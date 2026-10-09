# D+Dents Odontologia e Estética | Jardim Zaira

Site one-page da unidade Jardim Zaira (Mauá-SP). Objetivo: transformar visitas em conversas no WhatsApp.
Feito pela [TeoCode](https://teocode.com.br/).

- Stack: HTML + CSS + JS puro, Tailwind CSS via CDN, ícones Phosphor e fontes Google (CDN). Sem build, sem backend, sem CMS.
- Tema claro e escuro automático (segue a preferência do sistema do visitante).
- Acessibilidade: navegação por teclado, foco visível, landmarks, `prefers-reduced-motion` respeitado.

## Estrutura de arquivos

```
.
├── index.html                 Página única (textos, links e imagens editáveis estão marcados com comentários)
├── css/styles.css             Tokens de cor (claro e escuro) e componentes
├── js/main.js                 Menu móvel, revelação ao rolar, carrossel e eventos do GoatCounter
├── assets/
│   ├── img/                   Imagens usadas no site (logo, fachada, resultados, favicon, og-image)
│   └── source/                Originais e fontes (não são publicados na página; pode apagar no deploy)
│       ├── site-antigo/       Logo original e imagens do site antigo do cliente
│       └── google-maps/       Fachada original do Google Meu Negócio
├── data/google-reviews.json   Avaliações reais coletadas do Google (08/10/2026) e dados do perfil
├── PRODUCT.md                 Contexto do produto (para quem continuar o trabalho)
└── README.md
```

## Rodar localmente

Não precisa instalar nada. Abra o `index.html` no navegador, ou sirva a pasta:

```bash
python -m http.server 5173
```

Depois acesse http://localhost:5173.

## Deploy gratuito

Escolha uma opção. Em todas, o diretório de publicação é a raiz do projeto (sem build).

**GitHub Pages**
1. Suba o projeto para um repositório no GitHub.
2. Em Settings > Pages, escolha "Deploy from a branch", branch `main`, pasta `/ (root)`.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

**Netlify**
1. Em app.netlify.com, "Add new site" > "Deploy manually" e arraste a pasta, ou conecte o repositório.
2. Build command: vazio. Publish directory: `.`

**Cloudflare Pages**
1. Em Workers & Pages > Create > Pages, conecte o repositório.
2. Framework preset: None. Build command: vazio. Output directory: `/`.

### Domínio próprio
1. Registre o domínio (ex.: dmaisdentszaira.com.br).
2. No painel da hospedagem escolhida, adicione o domínio personalizado e copie os registros DNS (CNAME ou A) indicados.
3. Cadastre esses registros no provedor do domínio. O HTTPS é emitido automaticamente.
4. **Depois de publicar**, edite o `index.html`: troque `assets/img/og-image.jpg` em `og:image` por uma URL absoluta (`https://SEU-DOMINIO/assets/img/og-image.jpg`). Sem isso, o WhatsApp e o Instagram não mostram a imagem de prévia.

## O que editar

| O que | Onde |
|---|---|
| WhatsApp (número e mensagens) | Todos os links `wa.me/5511988851597?text=...` no `index.html`. A mensagem de cada seção fica no parâmetro `text=` (use https://www.urlencoder.org para codificar). |
| Textos | Blocos comentados no `index.html` (hero, tratamentos, depoimentos, como agendar, localização, fechamento). |
| Serviços | Lista em `#tratamentos`. Para remover, apague o `<li>`. |
| Fotos de resultado | `assets/img/resultado-01.jpg` a `06.jpg` (mantenha o nome ou ajuste o HTML). |
| Fachada | `assets/img/fachada-1200.jpg` e `fachada-720.jpg`. |
| Cores da marca | Tokens no topo de `css/styles.css` (`:root`). |
| Nota e quantidade de avaliações | Faixa `.rating` e texto da seção de depoimentos. |

## Microinterações e movimento

Tudo em CSS (`css/styles.css`, seção "MOVIMENTO") e um JS mínimo (`js/main.js`). Só `transform` e `opacity` são animados.

| Onde | O que acontece | Para quê |
|---|---|---|
| Hero | Texto sobe em cascata curta e a foto é revelada uma vez ao carregar | Guiar a leitura: título, texto, botão |
| Faixa de avaliação | As 5 estrelas acendem em sequência, uma vez | Reforçar a nota 5,0 |
| Seções | Revelação ao rolar (14px, 600ms); tratamentos e passos entram em cascata de 60ms | Marcar o ritmo da leitura |
| Passos | A linha que liga os passos se desenha quando a seção entra | Mostrar a sequência |
| Botões | Press com `scale(0.97)` em 160ms; hover levanta 1px | Feedback imediato |
| Links e menu | Sublinhado que desliza, seta que avança | Indicar que é clicável |
| Menu móvel | Painel suspenso que desce com fade (200ms) e sai mais rápido (150ms); não empurra a página | Menu sem salto de layout |
| Botão flutuante | Entra uma vez, 1,2s após carregar | Aparecer sem competir com o hero |
| Carrossel de resultados | Rolagem automática lenta e contínua (cerca de 80s por volta). Pausa com o mouse em cima, e a imagem é ampliada em 22%. Também pausa com foco no teclado, ao tocar e segurar, e fora da tela. Botão de pausa/retomar sempre disponível | Mostrar os resultados sem exigir clique, com controle para quem prefere parar |


Regras adotadas: curva `cubic-bezier(0.23, 1, 0.32, 1)`; interações de UI abaixo de 300ms; saída mais rápida que a entrada; hover só em dispositivos com mouse (`hover: hover`); nada animado por ação de teclado (o foco aparece na hora).
**Movimento reduzido:** quem ativa `prefers-reduced-motion` recebe só um fade curto, sem deslocamento, zoom ou linha se desenhando. O carrossel não rola sozinho: vira uma faixa com setas.

Para mudar a velocidade do carrossel, edite `animation: marquee 80s linear infinite` em `css/styles.css` (número maior = mais lento).

## GoatCounter (analytics sem cookies)

- Onde está o script: no `<head>` do `index.html`.

```html
<script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
```

- Não há cookies nem banner. O cliente não tem conta própria: use sempre o endereço `https://teocode.goatcounter.com/count`.
- **Lembrete:** o domínio onde o site for publicado precisa estar cadastrado no painel do GoatCounter (Settings > Sites > Add site / allowed domains), senão as visitas não aparecem.
- Como ver: acesse o painel do GoatCounter, aba **Dashboard** > seção **Events** para os cliques; as visitas ficam em **Dashboard > Pages**.
- Um único listener em `js/main.js` chama `window.goatcounter.count({ path, title, event: true })` para qualquer elemento com `data-gc-event`. Se o rastreio falhar (adblock), o link do WhatsApp continua funcionando.

Eventos de clique (um por local):

| Evento | Onde |
|---|---|
| `cta-header` | Botão do cabeçalho (desktop) |
| `cta-menu-mobile` | Botão dentro do menu móvel |
| `cta-hero` | Botão principal do topo |
| `cta-tratamentos` | Fim da seção de tratamentos |
| `cta-resultados` | Fim da seção de resultados |
| `cta-como-agendar` | Seção "Como agendar" |
| `cta-localizacao` | Seção "Como chegar" |
| `cta-contato` | Bloco de fechamento verde |
| `cta-footer` | Telefone no rodapé |
| `cta-flutuante` | Botão flutuante (mobile) |
| `click-google-avaliacoes` | Link da faixa de avaliação |
| `click-google-avaliacoes-depoimentos` | Botão "Ver as 391 avaliações no Google" |
| `click-mapa` | "Traçar rota" |
| `click-instagram` | Ícone do Instagram no rodapé |
| `click-google-perfil` | Ícone do Google no rodapé |

## Origem do conteúdo (nada foi inventado)

- Endereço, horário, telefone e nota (5,0 com 391 avaliações): Google Meu Negócio, coletado em 08/10/2026.
- Depoimentos: avaliações reais do Google, com trechos curtos e cortes marcados com `[...]`. Fonte completa em `data/google-reviews.json`.
- Serviços: site antigo do cliente (clínico geral, limpeza, extrações, botox, harmonização, preenchimento labial) e Instagram da unidade (restaurações, próteses, implantes, clareamento, facetas). **Confirmar a lista com o cliente.**
- Fotos: fachada do Google Meu Negócio (número 1422 visível) e os antes e depois do site antigo do cliente.
- Logo: arquivo original do cliente, apenas com as margens transparentes cortadas.

## Pendências que dependem do cliente

1. Responsável técnico (nome e CRO) para o rodapé. Costuma ser exigido em publicidade odontológica.
2. E-mail de contato (não encontrado em nenhuma fonte; foi omitido).
3. Autorização dos pacientes para as imagens de antes e depois.
4. Confirmar a lista de serviços e os nomes de profissionais citados nas avaliações.
5. Logo em versão original de maior resolução e com a correção do texto ("CLÍNICA ODONTOLÓGICA **E** ESTÉTICA"; o arquivo atual traz "ODONTOLOGICA É ESTÉTICA").
6. Fotos reais do interior e da equipe (hoje não há; a página usa apenas a fachada).
