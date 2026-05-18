import requests
import time
from plyer import notification

defaults_ports = [25565, 25566, 25567, 25568, 25569]

modo = input("escolha o modo de execuçao (1 para verificar um servidor específico, 2 para verificar um servidor em loop): ")

def verify_server(ip,port):
    try:
        verificar = requests.get(f"https://api.mcsrvstat.us/2/{ip}:{port}", timeout=5).json()
        return verificar.get('online', False)
    except:
        return False
if modo == "1":
    print("Digite o IP do servidor:")
    ip = input()
    print("Digite a porta do servidor (ou deixe em branco para usar as portas padrão):")
    port_input = input()
    if port_input:
        port = int(port_input)
        if verify_server(ip, port):
            print(f"O servidor {ip}:{port} está online!")
        else:
            print(f"O servidor {ip}:{port} está offline.")
    else:
        for port in defaults_ports:
            if verify_server(ip, port):
                print(f"O servidor {ip}:{port} está online!")
                break
        else:
            print(f"O servidor {ip} não está online em nenhuma das portas padrão.")
print("Digite o IP do servidor:")
ip = input()
print("Digite a porta do servidor (ou deixe em branco para usar as portas padrão):")
port_input = input()
if modo == "2":
    while True:
        if port_input:
            port = int(port_input)
            if verify_server(ip, port):
                print(f"O servidor {ip}:{port} está online!")
                notification.notify(
                        title="Servidor Minecraft",
                        message="O servidor ficou ONLINE!",
                        timeout=5
                    )
                time.sleep(20)
            else:
                print(f"O servidor {ip}:{port} está offline.")
                time.sleep(900)  # espera 15 minutos antes de verificar novamente
        else:
            for port in defaults_ports:
                if verify_server(ip, port):
                    print(f"O servidor {ip}:{port} está online!")
                    
                    notification.notify(
                        title="Servidor Minecraft",
                        message="O servidor ficou ONLINE!",
                        timeout=5
                    )
                    break
            else:
                print(f"O servidor {ip} não está online em nenhuma das portas padrão.")
                time.sleep(900)  # espera 15 minutos antes de verificar novamente