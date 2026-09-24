document.addEventListener("DOMContentLoaded", () => {
    // --- ESTRUCTURA DE ARCHIVOS ---
    // Esto simula una lista de archivos. En un escenario real,
    // esto podría ser generado por un script.
    // Las rutas son relativas a la raíz del repositorio.
    const fileStructure = {
        "StormStore-Name": {
            "type": "folder",
            "children": {
                "BOMBANANA.mp4": {
                    "type": "video"
                },
                "How_to_Fish.mp4": {
                    "type": "video"
                },
                "Kerbal Space Program Launch Trailer - Xbox.mp4": {
                    "type": "video"
                },
                "RANDOMLIFE REBORN - Reveal Trailer - rxramon_YT.mp4": {
                    "type": "video"
                },
                "a-bumpy-ride.mp4": {
                    "type": "video"
                },
                "ambidextro.mp4": {
                    "type": "video"
                },
                "backrooms-escape-together.mp4": {
                    "type": "video"
                },
                "backseat-drivers.mp4": {
                    "type": "video"
                },
                "balatro.mp4": {
                    "type": "video"
                },
                "big-walk.mp4": {
                    "type": "video"
                },
                "bridge-constructor-portal.mp4": {
                    "type": "video"
                },
                "buckshot_roulette.mp4": {
                    "type": "video"
                },
                "car-for-sale-simulator.mp4": {
                    "type": "video"
                },
                "chained-in-the-backrooms.mp4": {
                    "type": "video"
                },
                "colony-survival.mp4": {
                    "type": "video"
                },
                "content-warning.mp4": {
                    "type": "video"
                },
                "cookie-clicker.mp4": {
                    "type": "video"
                },
                "cuphead.mp4": {
                    "type": "video"
                },
                "ddlc.mp4": {
                    "type": "video"
                },
                "doom.mp4": {
                    "type": "video"
                },
                "drivebeyondhorizons.mp4": {
                    "type": "video"
                },
                "fastfood.mp4": {
                    "type": "video"
                },
                "five-nights-with-los-pinguinos.mp4": {
                    "type": "video"
                },
                "fnaf-into-the-pit.mp4": {
                    "type": "video"
                },
                "fnaf-sister-location.mp4": {
                    "type": "video"
                },
                "fnaf1.mp4": {
                    "type": "video"
                },
                "fnaf2.mp4": {
                    "type": "video"
                },
                "fnaf3.mp4": {
                    "type": "video"
                },
                "fnaf4.mp4": {
                    "type": "video"
                },
                "gamble-with-your-friends.mp4": {
                    "type": "video"
                },
                "geometry-dash.mp4": {
                    "type": "video"
                },
                "gmod.mp4": {
                    "type": "video"
                },
                "golfit.mp4": {
                    "type": "video"
                },
                "grain-rot.mp4": {
                    "type": "video"
                },
                "heavenly-bodies.mp4": {
                    "type": "video"
                },
                "hollow-knight-silksong.mp4": {
                    "type": "video"
                },
                "hollow-knight.mp4": {
                    "type": "video"
                },
                "human-fall-flat.mp4": {
                    "type": "video"
                },
                "hytale.mp4": {
                    "type": "video"
                },
                "iamfish.mp4": {
                    "type": "video"
                },
                "iracing-arcade.mp4": {
                    "type": "video"
                },
                "kill-it-with-fire.mp4": {
                    "type": "video"
                },
                "left4dead.mp4": {
                    "type": "video"
                },
                "lethal-company.mp4": {
                    "type": "video"
                },
                "level-devil.mp4": {
                    "type": "video"
                },
                "librarian-tidy-up-the-arcane-library.mp4": {
                    "type": "video"
                },
                "machine-party.mp4": {
                    "type": "video"
                },
                "mage-arena.mp4": {
                    "type": "video"
                },
                "majotori.mp4": {
                    "type": "video"
                },
                "meccha-chameleon.mp4": {
                    "type": "video"
                },
                "misery.mp4": {
                    "type": "video"
                },
                "miside.mp4": {
                    "type": "video"
                },
                "motortown.mp4": {
                    "type": "video"
                },
                "mr-president.mp4": {
                    "type": "video"
                },
                "panicore.mp4": {
                    "type": "video"
                },
                "papers-please.mp4": {
                    "type": "video"
                },
                "pc-tycoon-2.mp4": {
                    "type": "video"
                },
                "peak.mp4": {
                    "type": "video"
                },
                "peopleplayground.mp4": {
                    "type": "video"
                },
                "plague-inc-evolved.mp4": {
                    "type": "video"
                },
                "portal.mp4": {
                    "type": "video"
                },
                "project-zomboid.mp4": {
                    "type": "video"
                },
                "pureya.mp4": {
                    "type": "video"
                },
                "repo.mp4": {
                    "type": "video"
                },
                "retro-rewind.mp4": {
                    "type": "video"
                },
                "rimworld.mp4": {
                    "type": "video"
                },
                "robobeat.mp4": {
                    "type": "video"
                },
                "rv-there-yet.mp4": {
                    "type": "video"
                },
                "scamline.mp4": {
                    "type": "video"
                },
                "schedule1.mp4": {
                    "type": "video"
                },
                "shipped.mp4.mp4": {
                    "type": "video"
                },
                "sideeffects.mp4": {
                    "type": "video"
                },
                "slime-rancher-2.mp4": {
                    "type": "video"
                },
                "slime-rancher.mp4": {
                    "type": "video"
                },
                "space-engineers.mp4": {
                    "type": "video"
                },
                "spaceflight-simulator.mp4": {
                    "type": "video"
                },
                "stardewvalley.mp4": {
                    "type": "video"
                },
                "subnautica.mp4": {
                    "type": "video"
                },
                "superhot.mp4": {
                    "type": "video"
                },
                "supermarketsecuritysimulator.mp4": {
                    "type": "video"
                },
                "the-baby-in-yellow.mp4": {
                    "type": "video"
                },
                "theforest.mp4": {
                    "type": "video"
                },
                "theotown.mp4": {
                    "type": "video"
                },
                "theplanetcrafter.mp4": {
                    "type": "video"
                },
                "transformers-the-game.mp4": {
                    "type": "video"
                },
                "ultrakill.mp4": {
                    "type": "video"
                },
                "universe-sandbox.mp4": {
                    "type": "video"
                },
                "wallpaper-engine.mp4": {
                    "type": "video"
                },
                "we-gotta-go.mp4": {
                    "type": "video"
                },
                "worldbox.mp4": {
                    "type": "video"
                },
                "yandere-simulator.mp4": {
                    "type": "video"
                },
                "zort.mp4": {
                    "type": "video"
                }
            }

        }
    };

    const fileTreeContainer = document.getElementById("file-tree");
    const mediaViewer = document.getElementById("media-viewer");
    const viewerImage = document.getElementById("viewer-image");
    const viewerVideo = document.getElementById("viewer-video");
    const viewerAudio = document.getElementById("viewer-audio");
    const viewerInfo = document.getElementById("viewer-info");
    const downloadLink = document.getElementById("download-link");
    const closeViewerBtn = document.querySelector(".close-viewer");

    // --- CONFIGURACIÓN DE RUTAS ---
    // Usamos un CDN (jsDelivr) para acceder a los archivos del repositorio
    // con las cabeceras correctas y evitar problemas en GitHub Pages.
    const GITHUB_USER = "acierto-incomodo";
    const REPO_NAME = "Trailers-Juegos-StormStore";
    const BRANCH = "main";
    const FILE_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}@${BRANCH}/`;

    // Función para obtener el icono basado en el tipo de archivo
    function getIconClass(type) {
        switch (type) {
            case "folder":
                return "icon-folder";
            case "image":
                return "icon-image";
            case "video":
                return "icon-video";
            case "audio":
                return "icon-audio";
            case "font":
                return "icon-font";
            case "deb":
                return "icon-deb";
            default:
                return "icon-default";
        }
    }

    // Función recursiva para construir el árbol HTML
    function buildTree(data, path = "") {
        const ul = document.createElement("ul");
        for (const name in data) {
            const item = data[name];
            const currentPath = path ? `${path}/${name}` : name;
            const fileUrl = `${FILE_BASE_URL}${currentPath}`;
            const li = document.createElement("li");

            const isFolder = item.type === "folder";
            li.className = isFolder ? "folder" : "file";

            let nodeHtml = `
                <div class="tree-node">
                    <span class="node-info">
                        <span class="icon ${getIconClass(item.type)}"></span>
                        ${name}
                    </span>
                    <div class="node-actions">
                        <button class="action-btn copy-link-btn" data-url="${fileUrl}">Copiar Enlace</button>
                        <a href="${fileUrl}" target="_blank" class="action-btn">Ver Crudo</a>
                        ${!isFolder ? `<button class="action-btn view-btn" data-path="${currentPath}" data-type="${item.type}">Previsualizar</button>` : ""}
                    </div>
                </div>
            `;
            li.innerHTML = nodeHtml;

            if (isFolder) {
                const subTree = buildTree(item.children, currentPath);
                li.appendChild(subTree);
                li.querySelector(".node-info").addEventListener("click", () => {
                    li.classList.toggle("expanded");
                });
            }

            ul.appendChild(li);
        }
        return ul;
    }

    // Función para abrir el visualizador
    function openViewer(path, type) {
        // Ocultar todos los elementos del visor primero
        viewerImage.style.display = "none";
        viewerVideo.style.display = "none";
        viewerAudio.style.display = "none";
        viewerInfo.style.display = "none";

        const fullUrl = `${FILE_BASE_URL}${path}`;

        if (type === "image") {
            viewerImage.src = fullUrl;
            viewerImage.style.display = "block";
        } else if (type === "video") {
            viewerVideo.src = fullUrl;
            viewerVideo.style.display = "block";
            viewerVideo.play();
        } else if (type === "audio") {
            viewerAudio.src = fullUrl;
            viewerAudio.style.display = "block";
            viewerAudio.play();
        } else {
            downloadLink.href = fullUrl;
            viewerInfo.style.display = "block";
        }
        mediaViewer.style.display = "flex";
    }

    // Función para cerrar el visualizador
    function closeViewer() {
        mediaViewer.style.display = "none";
        viewerImage.src = "";
        viewerVideo.src = "";
        viewerAudio.src = "";
        viewerVideo.pause();
        viewerAudio.pause();
    }

    // Generar y mostrar el árbol
    fileTreeContainer.appendChild(buildTree(fileStructure));

    // Delegación de eventos para los botones de acción
    fileTreeContainer.addEventListener("click", (e) => {
        const target = e.target;

        // Botón de previsualizar
        if (target.classList.contains("view-btn")) {
            const path = target.dataset.path;
            const type = target.dataset.type;
            openViewer(path, type);
        }

        // Botón de copiar enlace
        if (target.classList.contains("copy-link-btn")) {
            const fileUrl = target.dataset.url;

            navigator.clipboard
                .writeText(fileUrl)
                .then(() => {
                    const originalText = target.textContent;
                    target.textContent = "¡Copiado!";
                    setTimeout(() => {
                        target.textContent = originalText;
                    }, 1500);
                })
                .catch((err) => {
                    console.error("Error al copiar el enlace: ", err);
                });
        }
    });

    // Eventos para cerrar el visualizador
    closeViewerBtn.addEventListener("click", closeViewer);
    mediaViewer.addEventListener("click", (e) => {
        if (e.target === mediaViewer) {
            // Cerrar solo si se hace clic en el fondo
            closeViewer();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeViewer();
        }
    });
});
