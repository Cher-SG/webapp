# Cher! - Web Application

This repository contains the codebase for the web application for `Cher!`. This
README description will be expanded upon as development progresses, and will
currently serve as internal documentation for the team.

## Tech Stack

This web application plans on using the following technologies to develop upon.
Feel free to click each of the links to be redirected to the corresponding
project pages.

- [Qwik City](https://qwik.dev/docs/qwikcity/) — A React-like JavaScript framework with blazingly render times
- [Supabase](https://supabase.com/) — An amazing open source Firebase alternative
- [Bun](https://bun.sh/) — A blazingly fast Javascript runtime

## Devcontainer Documentation

### Overview

This project uses [development containers](https://containers.dev/) to spin up
reproducible development environments, reducing the headaches caused by
dependency management issues. Development containers (devcontainers) allow one
to specify ways to build an environment with a `Dockerfile`, and adds additional
features such as automatically installing VSCode extensions to make our lives
easy.

The devcontainer setup is located in the `.devcontainer` directory in the same
level as this README. Here's a short explanation of each of its internal files:

- `devcontainer.json` — Specifies the `Dockerfile` to build from. Contains
  VSCode extensions and `bun install`
- `Dockerfile` — The base devcontainer image. Contains terminal environment
  setup code and additional packages installed via `apt`

### Installation

To get the devcontainer up and running, proceed with the following steps:

1. Install the [devcontainer extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
2. Press `Ctrl + Shift + P` to bring up the command prompt
3. Search for `Dev Containers: Open Folder in Container...` and open **this** directory
4. The environment should automatically build in a few minutes
