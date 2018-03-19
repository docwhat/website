#!/bin/bash

set -eu

#declare -i start_time="$(date +'%s%N')"
#function debug_trap {
#    if [[ "${FUNCNAME[1]}" != return_trap ]]; then
#    #(set -o posix ; set) 1>&2
#	local -i time="$(date +'%s%N')"
#	time=$(( (${time} - ${start_time}) / 1000000 ))
#	echo "${time}ms ${FUNCNAME[1]} ${BASH_LINENO[0]}" 1>&2
#    fi
#}
#set -T
#shopt -s extdebug
#trap debug_trap DEBUG
#function return_trap {
#    #(set -o posix ; set) 1>&2
#    local -i time="$(date +'%s%N')"
#    time=$(( (${time} - ${start_time}) / 1000000 ))
#    echo "${time}ms ${FUNCNAME[1]} ${BASH_LINENO[0]} RETURN" 1>&2
#}
#trap return_trap RETURN

## Yes, this is an honest to goddess traceback for bash.
## Useful for debugging.
#function traceback {
#    local -i start=1
#    if [[ -n "${1:-}" ]]; then
#        # Always hide our function call...
#        start=$(( $1 + ${start} ))
#    fi
#    local i
#    local j
#    echo "Traceback (last called is first):"
#    for i in $(seq "${start}" $(( ${#BASH_SOURCE[@]} - 1 ))); do
#        j=$(( $i - 1 ))
#        local function="${FUNCNAME[$i]}"
#        local file="${BASH_SOURCE[$i]}"
#        local line="${BASH_LINENO[$j]}"
#        echo "     ${function}() in ${file}:${line}"
#    done
#}

function print_field {
    for y in $(seq 0 $(( ${rows} - 1 ))); do
	for x in $(seq 0 $(( ${columns} - 1 ))); do
	    field_get $x $y
	    echo -n " "
	done
	echo
    done
}

function coord_to_idx {
    local -i x="${1}" ; shift
    local -i y="${1}" ; shift
    echo $(( ${y} * ${columns} + ${x} ))
}

function field_get {
    echo -n "${field[$(coord_to_idx "$@")]}"
}

function field_set {
    local -i x="${1}"
    local -i y="${2}"
    local value="${3:-o}"

    # Assertion
    case "${value}" in
	.) ;;
	o) ;;
	*) echo "WRONG"; exit 1;;
    esac

    field[$(coord_to_idx $x $y)]="${value}"
}

function neighbor_count {
    local -i x="${1}"
    local -i y="${2}"
    local -i count=0

    for i in "-1" 0 "+1"; do
	for j in "-1" 0 "+1"; do
	    if [[ $i = 0 && $j = 0 ]]; then
		continue
	    fi
	    local -i new_x=$(( ($x + ${columns} + ${i}) % ${columns} ))
	    local -i new_y=$(( ($y + ${rows}    + ${j}) % ${rows} ))
            if [[ $(field_get ${new_x} ${new_y}) = o ]]; then
		count=$(( $count + 1 ))
	    fi
	done
    done

    echo "${count}"
}

declare -i rows=6
declare -i columns=8
declare -a field=()
declare -a new_field=()
declare design=gliber
declare -i iterations=6

while (( $# > 0 )); do
    case "${1}" in
	-i|--iterations)
	    iterations="${2}"; shift;;
	-h|--help)
	    cat <<EOF
Usage: $0 [OPTIONS] [pattern] [<columns>x<rows>]

Options:
  -h --help             This help.
  -i --interations NUM  Run for NUM iterations at most.

You can specify the size of the playing field by using <columns>x<rows> (e.g. '5x5').

Patterns:
EOF
	    grep -E '^ +[^ (*]+\)' life.sh | grep -E -o '.*[^)]'
	    exit;;
	-*)
	    echo "Unknown flag ${1}"; exit 1;;
	*[0-9]x[0-9]*)
	    rows="${1/x*/}"
	    columns="${1/*x/}"
	    ;;
	*)
	    design="${1}"
	    ;;
    esac
    shift
done


declare -a seq=( 0 $(seq $(( ${rows} * ${columns} - 1 ))) )
field=( "${seq[@]}" )
new_field=( "${seq[@]}" )

for i in "${seq[@]}"; do
    field[$i]=.
done

case "${design}" in
    blank)
	;;
    random)
	for i in "${seq[@]}"; do
	    if (( $RANDOM % 3 == 0 )); then
		field[$i]=o
	    else
		field[$i]=.
	    fi
	done
	;;
    blinker)
        #   0 1 2
        # 0 . . .
        # 1 o o o
        # 2 . . .
	field_set 0 1
	field_set 1 1
	field_set 2 1
	;;
    block)
        #   0 1 2
        # 0 o o .
        # 1 o o .
        # 2 . . .
	field_set 0 0
	field_set 1 0
	field_set 0 1
	field_set 1 1
	;;
    beacon)
	#   0 1 2 3
	# 0 o o . .
	# 1 o o . .
	# 2 . . o o
	# 3 . . o o
	field_set 0 0
	field_set 1 0
	field_set 0 1
	field_set 1 1

	field_set 2 2
	field_set 3 2
	field_set 2 3
	field_set 3 3
	;;
    glider)
        #   0 1 2
	# 0 . . o
        # 1 o . o
        # 2 . o o
	field_set 2 0
	field_set 0 1
	field_set 2 1
	field_set 1 2
	field_set 2 2
	;;
    spaceship)
	#   0 1 2 3 4
	# 0 o . . o .
	# 1 . . . . o
	# 2 o . . . o
	# 3 . o o o o
	field_set 0 0
	field_set 3 0

	field_set 4 1

	field_set 0 2
	field_set 4 2

	field_set 1 3
	field_set 2 3
	field_set 3 3
	field_set 4 3
	;;
    diehard)
	#   0 1 2 3 4 5 6 7
	# 0 . . . . . . o .
	# 1 o o . . . . . .
	# 2 . o . . . o o o
	field_set 6 0

	field_set 0 1
	field_set 1 1

	field_set 1 2
	field_set 5 2
	field_set 6 2
	field_set 7 2
	;;
    *)
	echo "specify a shape"
	exit 13
esac

echo
echo "Initial:"
print_field

while (( $iterations > 0 )); do
    echo

    declare -i x=-1
    declare -i y=-1

    # Tick
    # Populate new_field with the next iteration.
    for y in $(seq 0 $(( ${rows} - 1 ))); do
	for x in $(seq 0 $(( ${columns} - 1 ))); do
	    declare -i count=$(neighbor_count ${x} ${y})
	    declare old="$(field_get $x $y)"
	    declare -i idx=$(coord_to_idx $x $y)
	    if [[ "${old}" = 'o' ]]; then
		if (( $count < 2 || $count > 3 )); then # under-population
		    new_field[$idx]=.
		else
		    new_field[$idx]=o
		fi
	    else
		if (( $count == 3 )); then
		    new_field[$idx]=o
		else
		    new_field[$idx]=.
		fi
	    fi
	done
    done

    # Tock
    if [[ "${field[*]}" = "${new_field[*]}" ]]; then
	echo "Stopped since nothing changed."
	exit 0
    fi
    # Copy new_field to field, and empty new_field.
    field=( "${new_field[@]}" )
    new_field=( "${seq}" )

    echo "Iteration $iterations:"
    print_field
    iterations=$(( $iterations - 1 ))
done

# EOF