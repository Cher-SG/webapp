FROM oven/bun:1-debian

# Update & install system packages (feel free to add on here)
RUN apt update && apt upgrade -y
RUN apt install -y \
    wget \
    zsh

# Additonal configurations (installs oh-my-zsh for a nicer looking shell)
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.2.1/zsh-in-docker.sh)" -- \
    -t robbyrussell \
    -p git \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -p https://github.com/zsh-users/zsh-syntax-highlighting