export type Dictionary = {
    homeTitle: string;
    theWeddingTitle: string;
    eventsTitle: string;
    travelTitle: string;
    ourStoryTitle: string;
    registryTitle: string;
    faqTitle: string;
    invitationTitle: string;

    subtitle: string;
    subtitle2: string;
    subtitle3: string;

    theWedding: string;

    accommodationsTitle: string;
    accommodations: string;
    howToArriveTitle: string;
    howToArrive: string;
    transportation: string;
    travelAgentTitle: string;
    travelAgent: string;

    events: {
        title: string;
        date: string;
        details: string;
        time: string;
        locationName: string;
        locationAddress: string;
        attire: string;
    }[];

    story: {
        name: string;
        text: string;
        date: string;
        image: string;
    }[];

    faq: {
        question: string;
        answer:string;
    }[];
}