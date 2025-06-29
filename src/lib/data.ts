import { Photo, Track, GallerySection, Playlist, Letter, TimelineEvent } from '@/types';

// Dados das fotos da galeria
export const galleryPhotos: Photo[] = [
  {
    id: '1',
    src: '/images/galeria/11.jpg',
    alt: 'Nosso momento especial',
    caption: 'Com você eu me sinto o cara mais sortudo do mundo, amor 💕',
    date: '2025-05-24',
    location: 'Nosso cantinho especial',
    tags: ['amor', 'momentos-especiais'],
  },
  {
    id: '2',
    src: '/images/galeria/22.jpg',
    alt: 'Juntinhos e felizes',
    caption: 'Você me faz ser o homem mais feliz do mundo ao seu lado ✨',
    date: '2025-03-05',
    location: 'Onde somos felizes',
    tags: ['felicidade', 'espontâneo'],
  },
  {
    id: '3',
    src: '/images/galeria/33.jpg',
    alt: 'Momento de carinho',
    caption: 'Ana, eu amo como você fica linda em qualquer foto que a gente tira 🌟',
    date: '2024-12-23',
    location: 'Nossos momentos',
    tags: ['carinho', 'beleza'],
  },
  {
    id: '4',
    src: '/images/galeria/44.jpg',
    alt: 'Sorrisos sinceros',
    caption: 'Meu mundo fica mais colorido quando você está comigo, amor 😊',
    date: '2024-12-25',
    location: 'Sempre felizes',
    tags: ['sorriso', 'radiante'],
  },
  {
    id: '5',
    src: '/images/galeria/55.jpg',
    alt: 'Cumplicidade pura',
    caption: 'Neguinha, essa nossa cumplicidade é tudo pra mim 💖',
    date: '2025-04-19',
    location: 'Nossa conexão',
    tags: ['cumplicidade', 'conexão'],
  },
  {
    id: '6',
    src: '/images/galeria/66.jpg',
    alt: 'Momentos únicos',
    caption: 'Ana, você é a protagonista de todos os meus momentos favoritos 📸💕',
    date: '2025-05-03',
    location: 'Construindo memórias',
    tags: ['memórias', 'especial'],
  },
];

// Seção da galeria
export const gallerySections: GallerySection[] = [
  {
    id: 'momentos-especiais',
    title: 'Nossos Momentos Especiais',
    photos: galleryPhotos,
  },
];

// Dados para o carousel da galeria
export const carouselSlides = galleryPhotos.map((photo, index) => {
  const titles = [
    'Você me faz o homem mais feliz do mundo',
    'Com você tudo é mais especial', 
    'Você fica linda em tudo',
    'Meu coração acelera quando te vejo',
    'Nossa conexão é única',
    'Construindo memórias juntos'
  ];

  const descriptions = [
    'Sou completamente apaixonado por você, amor ✨',
    'Com você tudo fica mais leve e bonito ❤️',
    'Você me enche de orgulho em tudo que faz, meu bem 🌟',
    'Ao seu lado eu me sinto completo e feliz 🤍',
    'Neguinha, nossa cumplicidade é tudo pra mim 💖',
    'Amo cada detalhe em você, Ana ❤️'
  ];
  
  return {
    title: titles[index] || 'Memória Especial',
    button: 'Ver Memória',
    src: photo.src,
    description: descriptions[index] || photo.caption,
  };
});

// Playlist de músicas (baseado nos arquivos disponíveis)
export const musicTracks: Track[] = [
  {
    id: '1',
    title: 'Irresistible',
    artist: 'One Direction',
    album: 'Take Me Home',
    src: '/music/playlist/One Direction - Irresistible (Audio).mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 240,
    description: 'Uma música para lembrar dos nossos momentos irresistíveis.'
  },
  {
    id: '2',
    title: 'More Than This (Live)',
    artist: 'One Direction',
    album: 'Up All Night: The Live Tour',
    src: '/music/playlist/One Direction - More Than This (Up All Night： The Live Tour).mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 270,
    description: 'Mais do que palavras, mais do que tudo.'
  },
  {
    id: '3',
    title: "It's Been a Long, Long Time",
    artist: 'Kitty Kallen',
    album: 'Single',
    src: '/music/playlist/It\'s Been a Long, Long Time.mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 210,
    description: 'Clássico para momentos nostálgicos.'
  },
  {
    id: '4',
    title: 'Fly Me To The Moon (2008 Remastered)',
    artist: 'Frank Sinatra',
    album: 'Best Of',
    src: '/music/playlist/Fly Me To The Moon (2008 Remastered).mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 150,
    description: 'Voando juntos até a lua.'
  },
  {
    id: '5',
    title: '2 Much (Live from Paris)',
    artist: 'Justin Bieber',
    album: 'Justice',
    src: '/music/playlist/Justin Bieber - 2 Much (Live from Paris).mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 180,
    description: 'Quando o amor é demais para caber em palavras.'
  },
  {
    id: '6',
    title: 'Angels Speak ft. Poo Bear (Visualizer)',
    artist: 'Justin Bieber',
    album: 'Justice',
    src: '/music/playlist/Justin Bieber - Angels Speak ft. Poo Bear (Visualizer).mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 200,
    description: 'Anjos falam quando estamos juntos.'
  },
  {
    id: '7',
    title: "Can't Help Falling In Love (Official Audio)",
    artist: 'Elvis Presley',
    album: 'Blue Hawaii',
    src: '/music/playlist/Elvis Presley - Can\'t Help Falling In Love (Official Audio).mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 180,
    description: 'Clássico do amor eterno.'
  },
  {
    id: '8',
    title: 'Unstable (Visualizer) ft. The Kid LAROI',
    artist: 'Justin Bieber',
    album: 'Justice',
    src: '/music/playlist/Justin Bieber - Unstable (Visualizer) ft. The Kid LAROI.mp3',
    cover: '/images/music-covers/default.jpg',
    duration: 190,
    description: 'Mesmo nos dias instáveis, o amor permanece.'
  },
];

// Playlist principal
export const mainPlaylist: Playlist = {
  id: 'nossa-playlist',
  name: 'Nossa Playlist do Coração 💕',
  tracks: musicTracks,
  isActive: true,
};

// Data de início do relacionamento
export const relationshipStartDate = '2024-12-15'; // Você pode ajustar esta data

// Cartinhas de amor
export const loveLetters: Letter[] = [
  {
    id: '1',
    type: 'love',
    title: 'Minha Sorte',
    content: `Neguinha, às vezes eu fico só te olhando e pensando: como é que eu tive tanta sorte? Você é forte, linda, cheia de luz. Eu admiro cada pedacinho seu, cada jeito seu, cada coisa que você é.

Com você, tudo tem mais sentido, mais amor. Você não é só parte da minha vida, você é a razão de muita coisa boa nela. Obrigado por existir do jeitinho que você é. Te amo muito!`,
    date: '2024-12-01',
    envelope: {
      color: '#e94560',
      seal: '💕'
    },
    availableAt: '2025-06-23T21:12:24.000Z'
  },
  {
    id: '2',
    type: 'memory',
    title: 'O Que Sinto Por Você',
    content: `Tem hora que nem sei explicar o que sinto por você… só sei que é grande, é bonito, é de verdade. Você mora em tudo que eu penso de bom pra minha vida. E eu sou muito mais eu quando tô com você.`,
    date: '2024-10-20',
    envelope: {
      color: '#f5d76e',
      seal: '⭐'
    },
    availableAt: '2025-06-24T21:12:24.000Z'
  },
  {
    id: '3',
    type: 'future',
    title: 'Meu Orgulho',
    content: `Eu tenho muito orgulho de você, de tudo que fez, do que se tornou e o que ainda vai se tornar. Você não tem noção do seu tamanho e de como você me inspira. Te amo demais, amor.`,
    date: '2024-11-15',
    envelope: {
      color: '#9333ea',
      seal: '✨'
    },
    availableAt: '2025-06-25T21:12:24.000Z'
  },
  {
    id: '4',
    type: 'special',
    title: 'Meu Amor Por Você',
    content: `Ana, você é a pessoa mais especial que já conheci. Cada momento ao seu lado é um presente que guardo no coração. Você me ensina a ser uma pessoa melhor todos os dias.

Seu sorriso ilumina até os meus dias mais difíceis, e sua força me inspira a nunca desistir dos nossos sonhos. Obrigado por me amar do jeito que eu sou e por fazer da nossa história algo tão bonito.

Te amo mais que as palavras podem expressar, neguinha. Você é minha vida.`,
    date: '2024-12-10',
    envelope: {
      color: '#10b981',
      seal: '💚'
    },
    availableAt: '2025-06-26T21:12:24.000Z'
  }
];

// Timeline do relacionamento
export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Primeiro Encontro',
    description: 'O dia em que nossas vidas se cruzaram e tudo começou ✨',
    date: '2024-10-15',
    type: 'meeting',
    icon: '💕',
    location: 'Café do Centro',
    photos: ['/images/timeline/primeiro-encontro.jpg']
  },
  {
    id: '2',
    title: 'Primeiro Beijo',
    description: 'O momento mágico que selou nosso destino juntos 💋',
    date: '2024-10-22',
    type: 'milestone',
    icon: '💋',
    location: 'Parque da Cidade'
  },
  {
    id: '3',
    title: 'Namoro Oficial',
    description: 'O "sim" mais bonito que já ouvi na vida! Agora somos oficialmente nós dois contra o mundo 👫',
    date: '2024-11-01',
    type: 'milestone',
    icon: '💑',
    location: 'Nossa mesa favorita no restaurante'
  },
  {
    id: '4',
    title: 'Primeira Viagem Juntos',
    description: 'Nossa primeira aventura como casal! Três dias de pura felicidade e descobertas 🏖️',
    date: '2024-11-20',
    type: 'travel',
    icon: '✈️',
    location: 'Praia do Paraíso',
    photos: ['/images/timeline/primeira-viagem.jpg']
  },
  {
    id: '5',
    title: 'Natal Juntos',
    description: 'Nosso primeiro Natal como casal! A magia da época mais especial do ano ficou ainda mais bonita ao seu lado 🎄',
    date: '2024-12-25',
    type: 'special',
    icon: '🎄',
    location: 'Casa da Família'
  },
  {
    id: '6',
    title: 'Museu Flutuante',
    description: 'Criei este museu especial para você, para guardar para sempre todos os nossos momentos mais preciosos 💖',
    date: '2025-01-19',
    type: 'special',
    icon: '🏛️',
    location: 'No meu coração e agora na internet!'
  }
];

// Frases românticas para elementos aleatórios
export const romanticQuotes = [
  "Você é a música mais bonita que meu coração já ouviu 🎵",
  "Em cada foto nossa, vejo nossa história se escrevendo 📸",
  "Cada dia com você é uma nova página no nosso livro de amor 📖",
  "Você transformou minha vida em uma sinfonia de alegria 🎼",
  "Nosso amor é a obra de arte mais linda do mundo 🎨",
  "Com você, cada momento é uma memória preciosa ✨",
]; 