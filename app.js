import http from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png'
};

function readFile(response, file) {
    fs.readFile(file, function(err, data) {
        if (err) {
            return erro404(response);
        }

        const extension = path.extname(file).toLowerCase();
        const contentType = contentTypes[extension] || 'application/octet-stream';

        response.writeHead(200, {
            'Content-Type': contentType
        });

        response.end(data);
    });
}

function erro404(response) {
    const file = path.join(publicDir, 'erro404.html');

    fs.readFile(file, function(err, data) {
        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8'
            });

            return response.end('404 - Pagina Nao encontrada');
        }

        response.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        response.end(data);
    });
}

function calcularMedia(p1, p2) {
    return (p1 + p2) / 2;
}

function verificarSituacao(media) {
    if (media >= 6) {
        return {
            situacao: 'APROVADO',
            pagina: 'aprovado.html'
        };
    }

    return {
        situacao: 'REPROVADO',
        pagina: 'reprovado.html'
    };
}

function mostrarResultado(response, pagina, p1, p2, media, situacao) {
    const file = path.join(publicDir, pagina);

    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            return erro404(response);
        }

        data = data.replace('{p1}', p1.toFixed(1));
        data = data.replace('{p2}', p2.toFixed(1));
        data = data.replace('{media}', media.toFixed(1));
        data = data.replace('{situacao}', situacao);

        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        response.end(data);
    });
}

function callback(request, response) {
    const url = new URL(
        request.url,
        `http://${request.headers.host}`
    );

    const pathname = decodeURIComponent(url.pathname);

    if (pathname === '/') {
        return readFile(
            response,
            path.join(publicDir, 'index.html')
        );
    }

    if (pathname === '/media') {
        const p1 = parseFloat(url.searchParams.get('p1'));
        const p2 = parseFloat(url.searchParams.get('p2'));

        if (isNaN(p1) || isNaN(p2)) {
            response.writeHead(400, {
                'Content-Type': 'text/plain; charset=utf-8'
            });

            return response.end(
                'Informe as notas P1 e P2 na URL. Exemplo: /media?p1=7.5&p2=5.0'
            );
        }

        if (p1 < 0 || p1 > 10 || p2 < 0 || p2 > 10) {
            response.writeHead(400, {
                'Content-Type': 'text/plain; charset=utf-8'
            });

            return response.end(
                'As notas devem estar entre 0 e 10.'
            );
        }

        const media = calcularMedia(p1, p2);
        const resultado = verificarSituacao(media);

        return mostrarResultado(
            response,
            resultado.pagina,
            p1,
            p2,
            media,
            resultado.situacao
        );
    }

    const file = path.join(publicDir, pathname);

    if (!file.startsWith(publicDir)) {
        return erro404(response);
    }

    readFile(response, file);
}

const server = http.createServer(callback);

const PORT = 3000;

server.listen(PORT, function() {
    console.log(`Servidor iniciado em http://localhost:${PORT}/`);
});
