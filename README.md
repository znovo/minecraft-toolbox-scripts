# 📡 Minecraft Server Verifier

Um script simples em Python que monitora servidores de Minecraft (Java/Bedrock) e detecta quando eles estão online.

Ele não invade, não escaneia o vazio — apenas observa o que já está visível.

# ⚙️ Funcionalidades
Verifica se um servidor está online
Suporta IP + porta personalizada
Testa portas padrão automaticamente
Modo de verificação única
Modo de monitoramento contínuo (loop)
Pode enviar notificações quando integrado com biblioteca de sistema
# 📦 Requisitos

### Python 3.x
### Biblioteca:
pip install requests plyer

### Se estiver usando Python fora do PATH:

F:\python\python.exe -m pip install requests plyer
# 🚀 Como usar
### ▶️ Executar via terminal
python server_verifiermc.py

ou

F:\python\python.exe server_verifiermc.py
### ▶️ Executar via .bat

Exemplo:

@echo off
echo Iniciando busca de servidores mine...

"F:\python\python.exe" "C:\scripts\server_verifiermc.py"

pause

# 🧭 Modos de execução

### Ao iniciar, o script pede:

1 → Verificação única
2 → Monitoramento contínuo
### 🔹 Modo 1 (Simples)
Verifica uma vez
Retorna se o servidor está online ou offline
### 🔹 Modo 2 (Loop)
Monitora continuamente
Ideal para saber quando o servidor liga
Usa intervalo de tempo entre verificações
# 🌐 API utilizada
mcsrvstat.us

Essa API retorna informações públicas sobre servidores Minecraft, como:

Status (online/offline)
Jogadores online
Versão

# 🔔 Notificações

Usando:

plyer

Exemplo:

from plyer import notification

notification.notify(
    title="Servidor Minecraft",
    message="O servidor ficou ONLINE!",
    timeout=5
)

# ⚠️ Observações
Evite caminhos com acentos (ex: Área de Trabalho) ao usar .bat
Certifique-se de instalar bibliotecas no mesmo Python usado para executar
APIs públicas podem ter limite de requisições

# 🧩 Possíveis melhorias
Detectar mudança de estado (offline → online)
Enviar notificações automáticas
Integrar com Discord ou Telegram
Interface gráfica simples
Auto detecção de portas mais eficiente
