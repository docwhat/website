---
id: 8c8dec86-42c6-4a43-90b4-7b8e1fc5c5e7
draft: true
banner:
---

```sh
$ ulimit -c unlimited && echo -e "int main() { *(int*)0 = 0; }" > segfault.c && clang segfault.c -o segfault && ./segfault ; ls -lhtr /cores
```

```sh
$ ulimit -c unlimited && echo -e "int main() { *(int*)0 = 0; }" > segfault.c && clang segfault.c -o segfault && ./segfault ; ls -lhtr /cores
segfault.c:1:14: warning: indirection of non-volatile null pointer will be deleted, not trap [-Wnull-dereference]
int main() { *(int*)0 = 0; }
             ^~~~~~~~
segfault.c:1:14: note: consider using __builtin_trap() or qualifying pointer with 'volatile'
1 warning generated.
[1]    85758 segmentation fault (core dumped)  ./segfault
total 5.4G
-r-------- 1 docwhat admin 1.4G Mar  6 09:55 core.85758
```
