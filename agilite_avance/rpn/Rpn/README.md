# TDD Kata

## Règles RPN

Reverse Polish Notation (RPN) est une notation mathématique où chaque opérateur suit ses opérandes.

Bosser en TDD, red green notamment.

- 5 3 + => 5+3 => 8
- 6 2 / => 6/2 => 3
- 5 2 - 7 + => 10
- 7 5 2 - + => 10
- 3 5 8 x 7 + x => 3x((5x8)+7) => 141
- 3 4 2 1 + x + 2 / => (3 + (4 x (2+1)))/2 => 7.5
- 1 2 + 4 × 5 + 3 − => ((1+2) x 4) + 5 - 3 => 14
- 5 4 1 2 + x + => 5 + (4 x (1+2))

## How to run project

### Build the docker

```bash
make build
```

### Run the docker

```bash
make up
```

### Go in the docker

```bash
make ex
```

#### Run tests

```
vendor/bin/phpunit
```

## Configure xdebug

1. CTRL + ALT + S => PHP => CLI Interpreters => Click 3 dots (...)
2. Click + => From Docker => Tick Docker =>
    1. Server : `Docker`
    2. Image name : `ulco:latest`
    3. Interpreter path : `php`
3. PHP => Docker container => Click folder => Volume bindings => Changer container path to /app
4. PHP => Debug => Debug port => 9001
5. PHP => Servers => + =>
    1. Name: `docker.host.ip`
    2. Host: `docker.host.ip`
    3. Use path mappings : Absolute path on server `/app`