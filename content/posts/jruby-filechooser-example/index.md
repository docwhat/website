---
id: '638'
title: JRuby FileChooser example
date: '2010-12-06'
image: /files/2010/12/Screen-shot-2010-12-06-at-3.07.18-AM-250x199.png
tags:
    - "It's All Text!"
    - java
    - programming
    - Ruby
---

I'm working on the next version of _It's All Text!_ and it needs a stand-alone
editor server. I've had a couple false starts other languages but I'm thinking
it should be Java or JRuby so that it is fairly portable without me having too
much grief. In addition, installing Java is a little more acceptable to a
random group of people than installing Ruby (at the moment, it may change in
the future).

<!-- more -->

Actually, I found two projects that make it much more likely I'll use JRuby
instead of Java:

1.  [rawr](http://rawr.rubyforge.org/) - a gem to bundle your JRuby project
    into an app, `.exe` or `.jar`. I won't have to force the user to install
    Java.
2.  [monkeybars](http://monkeybars.rubyforge.org/) - a gem to providing an MVC
    model for swing development. You use netbeans, whatever, to build the V,
    and ruby to do the M and C.

The snippet below allows the user to pick an editor application from their
system. It should be able to be ported to pure Java without too much grief if
I want to.

The interesting bits are the `FileFilter` subclass and the OS detection (JRuby
specific).

```ruby
require 'rbconfig'
require 'pathname'

class AppFilter < Java::javax::swing::filechooser::FileFilter
  def accept fobj
    return true if fobj.canExecute
    return fobj.isDirectory
  end

  def getDescription
    "Applications"
  end
end


# Detect OS
OS = case Config::CONFIG['host_os']
  when /darwin/      then :mac
  when /mswin|mingw/ then :windows
else
  :unix
end

# Asks the user to choose an editor.
# Returns either a Pathname object or nil (if canceled)
def pickEditor
  # Create a FileChooser
  fc = Java::javax::swing::JFileChooser.new("JRuby panel")
  fc.set_dialog_title("Please select your editor")
  fc.setFileFilter AppFilter.new

  if :mac == OS
    fc.setCurrentDirectory(java.io.File.new("/Applications"))
  elsif :windows == OS
    fc.setCurrentDirectory(java.io.File.new("C:\"))
  else
    fc.setCurrentDirectory(java.io.File.new("/usr/bin"))
  end

  success = fc.show_open_dialog(nil)
  if success == Java::javax::swing::JFileChooser::APPROVE_OPTION
    return Pathname.new(fc.get_selected_file.get_absolute_path)
  else
    nil
  end
end

puts "The user picked: #{pickEditor}"

# EOF
```
