---
id: "563"
title: 'bash: Checking a port number'
date: 2010-07-16T17:23:06-04:00
template: post
slug: /bash-checking-a-port-number/
tags:
  - bash
  - programming
  - shell
---

![Nucella lapillus](nucella_lapillus1.jpg 'Nucella lapil lus. Image by Manfred Heyde. Licensed under the Creative Commons Attribution ShareAlike 3.0 -License.')

Ever needed to check if a given port number is valid in bash? It's harder than
it looks because if you accept any input from the user, you can't use
`declare -i` since it spews errors and aborts functions with malformed input.

An example:

```bash
declare -i foo='10#88f'
bash: declare: 10#88f: value too great for base (error token is "10#88f")
```

It's annoying (you can't use `||` to get around it) _and_ it's also wrong. It
isn't a matter of base but an invalid value.

```bash
#!/bin/bash

function to_int {
    local -i num="10#${1}"
    echo "${num}"
}

function port_is_ok {
    local port="$1"
    local -i port_num=$(to_int "${port}" 2>/dev/null)

    if (( $port_num < 1 || $port_num > 65535 )) ; then
        echo "*** ${port} is not a valid port" 1>&2
        return
    fi

    echo 'ok'
}

port_is_ok 1          # => ok
port_is_ok 20         # => ok
port_is_ok 70000      # => *** 70000 is not a valid port
port_is_ok tnenth2    # => *** tnenth2 is not a valid port
port_is_ok thethe     # => *** thethe is not a valid port
port_is_ok 888f88     # => *** 888f88 is not a valid port
port_is_ok 88888f     # => *** 88888f is not a valid port

# EOF
```

Without the `to_int()` function, then you'd get errors from `port_is_ok` and the
function would abort before it gets to the check.

You have to redirect `stderr` to hide this bash error.

This was tested with bash `4.1.5(1)-release`

Ciao!
