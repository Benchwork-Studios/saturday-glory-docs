import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  hostingSidebar: [
    {
      type: 'category',
      label: 'Hosting & Setup',
      collapsible: false,
      items: [
        'hosting/intro',
        'hosting/quickstart',
        'hosting/cloudflare-tunnel',
        'hosting/connecting-mac-app',
        'hosting/backup-restore',
        'hosting/upgrading',
        'hosting/multiple-leagues',
        'hosting/env-reference',
        'hosting/alternative-hosting',
      ],
    },
  ],

  commissionerSidebar: [
    {
      type: 'category',
      label: 'Commissioner Guide',
      collapsible: false,
      items: [
        'commissioner/intro',
        'commissioner/starting-a-league',
        'commissioner/join-codes-and-teams',
        'commissioner/advancing-the-season',
        'commissioner/deadlines',
        'commissioner/managing-coaches',
        'commissioner/exporting-data',
      ],
    },
  ],

  coachSidebar: [
    {
      type: 'category',
      label: 'Coach Guide',
      collapsible: false,
      items: [
        'coach/intro',
        'coach/joining-a-league',
        'coach/your-token',
        'coach/roster-and-depth-chart',
        'coach/game-plan',
        'coach/recruiting',
        'coach/transfer-portal',
        'coach/standings-and-stats',
      ],
    },
  ],

  mechanicsSidebar: [
    {
      type: 'category',
      label: 'Game Mechanics',
      collapsible: false,
      items: [
        'mechanics/season-structure',
        'mechanics/game-simulation',
        'mechanics/recruiting-system',
        'mechanics/transfer-portal',
        'mechanics/injury-system',
        'mechanics/coaching-carousel',
        'mechanics/conference-realignment',
        'mechanics/nfl-draft',
        'mechanics/hall-of-fame',
        'mechanics/rankings',
      ],
    },
  ],

  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      collapsible: false,
      items: [
        'api/overview',
        'api/authentication',
        'api/season',
        'api/teams',
        'api/coach-actions',
        'api/commissioner',
        'api/sse-events',
      ],
    },
  ],
};

export default sidebars;
