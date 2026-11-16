# Running the portfolio on your home network

This builds the site and serves it from one computer at home (a PC, Mac, NAS, Raspberry Pi or home server), so any phone, tablet or laptop on the same Wi-Fi can open it.

```
 phone / laptop ──▶ reverse proxy (optional, port 80) ──▶ portfolio container (port 8080) ──▶ the built site
```

## 1. Start it (one command)

You need **Docker** on the computer that will host the site (Docker Desktop on Windows or Mac, or Docker Engine on Linux, a NAS or a Pi).

```bash
git clone https://github.com/dantve94/Jade_CopyWriting_Portfolio.git
cd Jade_CopyWriting_Portfolio
git checkout ccr-fd27a5ad-hhttq9
docker compose up -d --build
```

This builds the site, then serves it with Caddy on port **8080**. It restarts automatically after a reboot.

## 2. Open it from another device

Find the host computer's local IP address:

| System | How |
|---|---|
| Windows | `ipconfig` → "IPv4 Address" (e.g. 192.168.1.50) |
| Mac | System Settings → Wi-Fi → Details → IP address, or `ipconfig getifaddr en0` |
| Linux / Pi | `hostname -I` |

Then, on any device on the same network, open **`http://192.168.1.50:8080`** (using your IP).

If it doesn't load, allow port 8080 through the host's firewall. Windows will usually ask the first time; on Linux, `sudo ufw allow 8080`.

## 3. Give it a friendly name (reverse proxy)

Choose **one** of these options.

### Option A: Use the included Caddy directly (simplest)
In `docker-compose.yml`, change `"8080:80"` to `"80:80"` and run `docker compose up -d` again. The site is then at `http://192.168.1.50`, with no port number.

### Option B: You already run a reverse proxy
Point it at `http://<host-ip>:8080`.

- **nginx:** use `deploy/nginx-reverse-proxy.conf` and follow the three steps at the top of that file.
- **Nginx Proxy Manager:** Add Proxy Host → Domain `portfolio.home` → Scheme `http` → Forward host `<host-ip>` → Port `8080`.
- **Caddy:** add a site block:
  ```
  http://portfolio.home {
      reverse_proxy <host-ip>:8080
  }
  ```
- **Traefik** (on the same Docker network): add to the `portfolio` service in `docker-compose.yml`:
  ```yaml
  labels:
    - traefik.enable=true
    - traefik.http.routers.portfolio.rule=Host(`portfolio.home`)
    - traefik.http.services.portfolio.loadbalancer.server.port=80
  ```

### Make the name work on your devices
For `portfolio.home` to work, point the name at the reverse proxy's IP using one of these:
- **Router or Pi-hole / AdGuard Home:** add a local DNS record `portfolio.home → <proxy-ip>`. This works for every device on the network.
- **Hosts file** (single device): add `192.168.1.50  portfolio.home` to `/etc/hosts` (Mac/Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows).

Avoid `.local` names; they clash with Bonjour/mDNS. `.home`, `.lan` or `.home.arpa` are safe.

### Optional: HTTPS on the home network
In Caddy, replace `http://portfolio.home` with `portfolio.home` and add `tls internal`. Caddy creates its own certificate. Each device will show a warning until you trust Caddy's root certificate, so plain HTTP is usually fine on a home network.

## Updating the site

After changing content (or pulling new changes):

```bash
git pull
docker compose up -d --build
```

## Stopping it

```bash
docker compose down
```

## Sharing outside your home

This setup is only reachable inside your home network. **Don't port-forward it on your router** to share it publicly. For people outside your home, either:
- deploy it to a free static host such as Netlify (the repo is ready: `netlify.toml`), or
- use a private tunnel such as Tailscale, so only invited devices can reach it.

## Without Docker

```bash
npm install
npm run build                      # creates _site/
npx http-server _site -p 8080 -a 0.0.0.0
```

`-a 0.0.0.0` makes the server reachable from other devices, not just the host computer.
