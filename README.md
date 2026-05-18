# Minecraft Server Verifier

Script em Python para verificar se um servidor de Minecraft está online usando a API pública do **mcsrvstat.us**.

Ele não escaneia portas aleatórias nem tenta invadir nada. Só consulta o que já está exposto publicamente e observa o resultado, com a paciência de quem encara o vazio e anota se ele respondeu.

## Funcionalidades

- Verifica se um servidor está online ou offline
- Aceita **IP + porta personalizada**
- Tenta portas padrão automaticamente quando a porta não é informada
- Possui **modo de verificação única**
- Possui **modo de monitoramento contínuo**
- Pode exibir notificações do sistema com `plyer`

## Requisitos

- Python 3.x
- Bibliotecas:

```bash
pip install requests plyer
```

Se o Python não estiver no PATH, use o executável completo:

```bash
F:\python\python.exe -m pip install requests plyer
```

## Arquivo principal

O script principal é:

```bash
server_verifiermc.py
```

## Como usar

Execute pelo terminal:

```bash
python server_verifiermc.py
```

Ou, se necessário:

```bash
F:\python\python.exe server_verifiermc.py
```

### Via `.bat`

Exemplo:

```bat
@echo off
echo Iniciando verificador de servidor Minecraft...
"F:\python\python.exe" "C:\scripts\server_verifiermc.py"
pause
```

## Modos de execução

Ao iniciar, o script pede um modo:

- `1` → Verificação única
- `2` → Monitoramento contínuo

### Modo 1 — verificação única

- Solicita o IP do servidor
- Permite informar uma porta
- Se a porta for deixada em branco, testa automaticamente:
  - `25565`
  - `25566`
  - `25567`
  - `25568`
  - `25569`

### Modo 2 — monitoramento contínuo

- Faz verificações em loop
- Mostra quando o servidor está online ou offline
- Envia notificação do sistema quando detectar o servidor online
- Usa intervalo de 15 minutos entre verificações quando o servidor está offline

## Como funciona

O script consulta a API:

```text
https://api.mcsrvstat.us/2/<ip>:<porta>
```

Essa API retorna informações públicas como:

- status online/offline
- jogadores online
- versão do servidor

## Notificações

O projeto usa `plyer` para enviar notificações do sistema:

```python
from plyer import notification

notification.notify(
    title="Servidor Minecraft",
    message="O servidor ficou ONLINE!",
    timeout=5
)
```

## Observações

- Evite caminhos com acentos ao usar arquivos `.bat`
- Instale as dependências no mesmo Python usado para executar o script
- APIs públicas podem ter limite de requisições
- Se a notificação não aparecer, o sistema pode não suportar esse recurso corretamente

## Limitações

- O script depende da disponibilidade da API pública
- A lógica de verificação é simples e não guarda histórico
- O monitoramento contínuo usa intervalo fixo, sem configuração via interface

## Possíveis melhorias

- Detectar mudança de estado automaticamente (`offline -> online`)
- Adicionar intervalo configurável
- Integrar com Discord ou Telegram
- Criar uma interface gráfica simples
- Melhorar a seleção automática de portas

## Licença

Ainda não definida.
