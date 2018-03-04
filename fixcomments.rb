#!/usr/bin/env ruby

require 'pathname'
require 'yaml'
require 'time'
require 'securerandom'

class Foo
  attr_reader :path, :yaml

  def initialize(path, yaml = nil)
    @path = path
    @yaml = yaml || YAML.load(path.read)
    # fix date
  end

  def inspect
    "<Foo path=#{path} />"
  end

  def to_s
    path.to_s
  end

  def to_yaml
    yaml.to_yaml
  end

  def to_md
    new_yaml = yaml.dup
    new_yaml['uuid'] ||= SecureRandom.uuid
    new_yaml['slug'] = "/#{path.dirname.basename}/"
    new_yaml['layout'] = 'comment'
    new_yaml['date'] = Time.parse(new_yaml['date']).iso8601
    message = new_yaml['message']
    new_yaml.delete 'message'
    FooMd.new(destpath, new_yaml, message)
  end

  def destpath
    Pathname.new('src/comments') + "#{path.basename('.yml')}.md"
    # path.dirname.dirname + "#{path.basename('.yml')}.md"
  end
end

class FooMd < Foo
  attr_reader :message
  def initialize(path, yaml, message)
    @path = path
    @yaml = yaml
    @message = message
  end

  def repair
    raise
  end

  def to_s
    [yaml.to_yaml, '---', '', message].join("\n") + "\n"
  end

  def destpath
    raise
  end

  def write
    path.write(to_s)
    self
  end
end

TOP = Pathname.new(__FILE__).dirname.freeze

files = (TOP + 'data' + 'comments')
  .children
  .select(&:directory?)
  .map(&:children)
  .flatten
  .select { |path| %w(.yml .yaml).include? path.extname }
  .map { |path| Foo.new path }

files.map(&:to_md)
  .each(&:write)
  .each do |foo|
    puts "#{foo.path}: #{foo.yaml['slug']}"
  end

# EOF
