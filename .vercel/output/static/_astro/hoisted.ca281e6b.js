import"./hoisted.8a3c16ad.js";import"./_sentry-release-injection-file.e809a965.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b24ebb95-f62c-4a49-8bcc-2d6dee99377a",t._sentryDebugIdIdentifier="sentry-dbid-b24ebb95-f62c-4a49-8bcc-2d6dee99377a")}catch{}})();const a=[{name:"Bluesky",url:"https://staging.bsky.app/profile/manhart.bsky.social",icon:"bluesky"},{name:"Chess.com",url:"https://www.chess.com/member/harthartman",icon:"dribbble"},{name:"Dribbble",url:"https://dribbble.com/manhart",icon:"dribbble"},{name:"Discogs",url:"https://www.discogs.com/user/manhartjohn",icon:"discogs"},{name:"Figma",url:"https://www.figma.com/@manhart",icon:"figma"},{name:"Github",url:"https://github.com/jmanhart"},{name:"Instagram",url:"https://github.com/jmanhart"},{name:"Letterboxd",url:"https://letterboxd.com/manhart/"},{name:"Linkedin",url:"https://www.linkedin.com/in/john-manhart/"},{name:"Read.cv",url:"https://read.cv/manhart"},{name:"Steam",url:"https://steamcommunity.com/id/ItsManhart/"},{name:"Strava",url:"https://www.strava.com/athletes/2083068"},{name:"Twitter",url:"https://twitter.com/JohnManhart"},{name:"Threads",url:"https://www.threads.net/@johnmanhart"},{name:"Twitch",url:"https://www.twitch.tv/itsmanhart"},{name:"Youtube",url:"https://www.youtube.com/channel/UCdgLTD7oNCCi5Y1sPVqDkwQ"}],r=a.map(function(t){return`
        <a href="${t.url}" target="_blank" rel="noopener noreferrer">
            <span class="root-social-links">${t.name}</span>
        </a>
        `});document.getElementById("social-media-cards").innerHTML=r.join("");const n=document.createElement("style");n.textContent=`

        .root-social-links {
          font-size: 1.5em;
          cursor: pointer;
        }
      `;document.head.appendChild(n);
//# sourceMappingURL=hoisted.ca281e6b.js.map
