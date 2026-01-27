export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string
}

export const events: EventItem[] =[
    { 
        image: '/images/event1.png', 
        title: 'React Summit US 2026',
        slug: 'react-summit-us-2026',
        location: 'San Francisco, CA, USA',
        date: '2025-02-10',
        time: '09:00 AM' 
      },
      { 
        image: '/images/event2.png', 
        title: 'KubeCon + CloudNativeCon Europe 2026',
        slug: 'kubecon-cloudnativecon-eu-2026',
        location: 'Vienne, Austria',
        date: '2026-03-18',
        time: '10:00 AM' 
      },
      { 
        image: '/images/event3.png', 
        title: 'Google Cloud Next 2026',
        slug: 'google-cloud-next-2026',
        location: 'San Jose, CA, USA',
        date: '2026-04-21',
        time: '09:00 AM' 
      },
      { 
        image: '/images/event4.png', 
        title: 'ETHGlobal Hackathon: Paris 2026',
        slug: 'ethglobal-paris-2026',
        location: 'Paris, France',
        date: '2026-05-10',
        time: '10:00 AM' 
      }
]