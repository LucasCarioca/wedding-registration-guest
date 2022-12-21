export type Dictionary = {
    homeTitle: string;
    theWeddingTitle: string;
    eventsTitle: string;
    travelTitle: string;
    ourStoryTitle: string;
    registryTitle: string;
    invitationTitle: string;

    subtitle: string;
    subtitle2: string;
    subtitle3: string;

    theWedding: string;

    events: {
        title: string;
        date: string;
        details: string;
    }[]

    accommodationsTitle: string;
    accommodations: string;
    howToArriveTitle: string;
    howToArrive: string;
    transportation: string;
    travelAgentTitle: string;
    travelAgent: string;

    story: {
        name: string;
        text: string;
        date: string;
        image: string;
    }[]
}