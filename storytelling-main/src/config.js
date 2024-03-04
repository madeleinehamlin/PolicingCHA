var config = {
    style: 'mapbox://styles/mhamlin/ckx0t7bqz0qd514po5545mmn0',
    accessToken: 'pk.eyJ1IjoibWhhbWxpbiIsImEiOiJjbGtrNXA0eGcwM2xqM2ptbWhtYWk5Z3ZnIn0.A9Ymlb3nofYdP4KI0q6SGA',
    showMarkers: false,
    markerColor: '#D2D4D6',
    inset: false,
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'POLICING CHICAGO PUBLIC HOUSING DRAFT',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'Section1',
            alignment: 'center',
            hidden: false,
            description: 'This story map provides an overview of the relationship between public housing and policing in Chicago. Much of the public housing discussed here has been destroyed as part of Chicago’s Plan for Transformation. On this map, the historic developments are shown in red. As the story unfolds, the map will move between relevant public housing developments. (Please note that the developments are not shown to scale.)  <br><br>',
            location: {
                center: [-87.63726, 41.88938],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Public Housing Complete',
                    opacity: 0
                },
                {
                    layer: 'Stateway Gardens',
                    opacity: 0
                },
                {
                    layer: 'Wells Homes',
                    opacity: 0
                },
                {
                    layer: 'Taylor Homes',
                    opacity: 0
                },
                {
                    layer: 'Cabrini-Green',
                    opacity: 0
                },
                {
                    layer: 'Trumbull Park',
                    opacity: 0
                },
                {
                    layer: 'Black Belt Polygon',
                    opacity: 0
                }
           ],
           onChapterExit: [
                {
                    
                }
           ]
        },
                {
            id: 'Section2',
            title: 'CHICAGO',
            alignment: 'right',
            hidden: false,
            image: 'images/Image1.png',
            description: 'Chicago is one of the most racially segregated cities in the country. This is not an accident nor is it the result of individual preferences.<br><br>',
            credit: 'Map made by Madeleine Hamlin and Maheen Khan using data from the 2020 U.S. Census',
            location: {
                center: [-87.63726, 41.88938],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Public Housing Complete',
                    opacity: 0
                },
                {
                    layer: 'Stateway Gardens',
                    opacity: 0
                },
                {
                    layer: 'Wells Homes',
                    opacity: 0
                },
                {
                    layer: 'Taylor Homes',
                    opacity: 0
                },
                {
                    layer: 'Cabrini-Green',
                    opacity: 0
                },
                {
                    layer: 'Trumbull Park',
                    opacity: 0
                }
           ],
           onChapterExit: [
                {
                    
                }
           ]
        },
        {
            id: 'Section3',
            alignment: 'right',
            hidden: false,
            description: 'Between 1916 and 1970, 500,000 African Americans moved to Chicago from the South during successive waves of the Great Migration, seeking a better life and fleeing the Jim Crow legal regime enforced by terror.<br><br>',
            location: {
                center: [-87.63726, 41.88938],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Public Housing Complete',
                    opacity: 0
                },
                {
                    layer: 'Stateway Gardens',
                    opacity: 0
                },
                {
                    layer: 'Wells Homes',
                    opacity: 0
                },
                {
                    layer: 'Taylor Homes',
                    opacity: 0
                },
                {
                    layer: 'Cabrini-Green',
                    opacity: 0
                },
                {
                    layer: 'Trumbull Park',
                    opacity: 0
                },
                {
                    layer: 'Black Belt Polygon',
                    opacity: 0
                }
           ],
           onChapterExit: [
                {
                    
                }
           ]
        },
        {
            id: 'Section4',
            title: 'THE BLACK BELT',
            alignment: 'right',
            hidden: false,
            image: 'images/Image3.webp',
            description: 'The influx of newcomers was largely funneled into an area that became known as the “Black Belt”— a narrow strip of the city extending south.<br><br>',
			credit: "Image source: WTTW",
            location: {
                center: [-87.60742, 41.8172],
                zoom: 13.15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Public Housing Complete',
                    opacity: 0
                },
                {
                    layer: 'Stateway Gardens',
                    opacity: 0
                },
                {
                    layer: 'Wells Homes',
                    opacity: 0
                },
                {
                    layer: 'Taylor Homes',
                    opacity: 0
                },
                {
                    layer: 'Cabrini-Green',
                    opacity: 0
                },
                {
                    layer: 'Trumbull Park',
                    opacity: 0
                },
                {
                    layer: 'Black Belt Polygon',
                    opacity: 0.46
                }
           ],
           onChapterExit: [
                {
                    
                }
           ]         
        },
        {
            id: 'Section5',
            alignment: 'right',
            hidden: false,
            image: 'images/Image4.jpg',
            description: 'The Great Migration gave rise to tensions over housing and employment that erupted into violence in the 1919 Race Riot. Prior to the riot, the city was not yet rigidly segregated. After the riot, the boundaries between Black and white Chicago were sharply drawn and fiercely defended. Police responded to the public emergency of the riot by establishing a cordon around the Black Belt.An emergency measure during a race war, policing as containment soon became normalized.<br><br>',
            credit: "Image source: Chicago History Museum, ICHi-065485; Jun Fujita, photographer",
            location: {
                center: [-87.60742, 41.8172],
                zoom: 13.15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Public Housing Complete',
                    opacity: 0
                },
                {
                    layer: 'Stateway Gardens',
                    opacity: 0
                },
                {
                    layer: 'Wells Homes',
                    opacity: 0
                },
                {
                    layer: 'Taylor Homes',
                    opacity: 0
                },
                {
                    layer: 'Cabrini-Green',
                    opacity: 0
                },
                {
                    layer: 'Trumbull Park',
                    opacity: 0
                }
           ],
           onChapterExit: [
                {
                    
                }
           ]
        },
        {
            id: 'Section6',
            alignment: 'right',
            hidden: false,
            image: 'images/Image5.jpeg',
            description: 'Under conditions of rigid segregation, the Black Belt comprised a city-within-a-city that was at once a site of cultural and entrepreneurial vitality and a containment zone. Although Black workers were integral to the city’s economy, they were prevented from meaningful social or economic mixing with other groups. And most residents of the Black Belt were forced to live in poverty in decrepit, unsafe tenements where they were exposed to environmental toxins, disease, and rodent infestations.<br><br>',
            credit: "Image source: Library of Congress",
            location: {
                center: [-87.60742, 41.8172],
                zoom: 13.15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Public Housing Complete',
                    opacity: 0
                },
                {
                    layer: 'Stateway Gardens',
                    opacity: 0
                },
                {
                    layer: 'Wells Homes',
                    opacity: 0
                },
                {
                    layer: 'Taylor Homes',
                    opacity: 0
                },
                {
                    layer: 'Cabrini-Green',
                    opacity: 0
                },
                {
                    layer: 'Trumbull Park',
                    opacity: 0
                }
           ],
           onChapterExit: [
                {
                    
                }
           ]
        },
        {
            id: 'Section7',
            alignment: 'right',
            hidden: false,
            image: 'images/Image6.jpg',
            description: 'In the 1930s, progressive housing reformers pushed to tear down the tenements and rebuild Chicago’s slum neighborhoods. Federal funding established the Chicago Housing Authority (CHA), which, like similar agencies across the nation, began a widespread construction program intended to house the city’s poor in new, modern structures where, it was believed, they would experience "social rebirth." <br><br>',
            credit: "Image source: Chicago History Museum, ICHi-035845; Clarence W. Hines, photographer",
            location: {
                center: [-87.60742, 41.8172],
                zoom: 13.15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Public Housing Complete',
                    opacity: 1
                },
                {
                    layer: 'Stateway Gardens',
                    opacity: 1
                },
                {
                    layer: 'Wells Homes',
                    opacity: 1
                },
                {
                    layer: 'Taylor Homes',
                    opacity: 1
                },
                {
                    layer: 'Cabrini-Green',
                    opacity: 1
                },
                {
                    layer: 'Trumbull Park',
                    opacity: 1
                }
           ],
           onChapterExit: [
           ]
        },
        {
            id: 'Section8',
            alignment: 'right',
            hidden: false,
            description: 'Elizabeth Wood, the first director of CHA, wanted to distribute public housing across the city. This plan was resisted by aldermen representing white neighborhoods. As a result, the bulk of high-rise public housing was constructed within the footprint of the Black Belt. In the end, public housing reinforced rather than eased segregation.<br><br>',
            location: {
                center: [-87.60742, 41.8172],
                zoom: 13.15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'Black Belt Polygon',
                    opacity: 0.46
                }
            ],
            onChapterExit: [
                {
                    layer: 'Black Belt Polygon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section9',
            title: 'TRUMBULL PARK HOMES',
            alignment: 'left',
            hidden: false,
            image: 'images/Image8.jpg',
            description: 'When early developments—such as the Airport Homes and Trumbull Park Homes—began to integrate in the late 1940s and 1950s, race riots broke out. CHA called in the police to quell tensions, but they proved incapable of managing the hostilities. Even after 700 police officers were stationed for months at the Trumbull Park site, the first Black family to move in gave up and moved out. Although the police were ineffective at promoting integration, these events solidified the relationship between the CHA and the police. Going forward, police became the central tool for managing and controlling public housing residents.<br><br>',
            credit: "Image source: Chicago History Museum, ICHi-036817",
            location: {
                center: [-87.56585, 41.70006],
                zoom: 16.5,
                pitch: 70,
                bearing: -30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section10',
            alignment: 'left',
            hidden: false,
            description: 'Over time, the racial composition of CHA changed, however. As white Chicagoans fled the inner-city for new housing in the suburbs, Blacks were left behind in an increasingly impoverished city, hit hard by successive waves of deindustrialization that took place in the 1960s and 1970s, as the packinghouse industry decentralized and the steel industry declined, eliminating  the sorts of jobs that had drawn migrants from the South in the Great Migration.',
            location: {
                center: [-87.56585, 41.70006],
                zoom: 16.5,
                pitch: 70,
                bearing: -30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section11',
            title: 'STATEWAY GARDENS',
            alignment: 'right',
            hidden: false,
            description: 'As the local economy collapsed, the informal economy—the economy of hustle, including but not limited to the drug trade—grew. Fueled by media reports, CHA developments became known as sites of gang and drug activity. Open-air drug markets served a broad cross-section of customers. In effect, CHA developments increasingly operated as vice zones where illicit activities could take place without disturbing the regular commerce or tourism that drove the city’s mainstream economic engine.',
            location: {
                center: [-87.62610, 41.80931],
                zoom: 15.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section12',
            alignment: 'right',
            hidden: false,
            description: 'CHA developments were simultaneously over- and under-policed. By the 1980s, the Chicago Police Department (CPD) had assigned specific units to patrol public housing and had deployed tactics such as “vertical patrols,” in which groups of police officers would walk floor-to-floor in the high-rises, as well as  various surveillance technologies, such as CCTV cameras. Rather than provide social services to alleviate conditions of extreme poverty, policing of crime became the primary vehicle for exercising social control. At the same time, residents complained that officers often did not respond to calls when needed and were ineffective at stopping or solving crimes. Many complained of regular abuse, corruption, and violence by officers.',
            location: {
                center: [-87.62610, 41.80931],
                zoom: 15.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section13',
            alignment: 'right',
            hidden: false,
            image: 'images/Image12.png',
            description: 'In the 1990s, in response to complaints that the CPD was failing to adequately police public housing, it was joined by a new force: the Chicago Housing Authority Police. This expanded CHA’s law enforcement function, making it both landlord and police. CHA officers—numbering about 500 at the force’s height—had full powers of arrest in CHA developments and worked out of sub-stations within several of the complexes, complete with lock-up facilities. Together, CPD and the CHA police officers conducted unconstitutional raids of public housing buildings, ransacking apartments before dawn. In effect, the CHA Police force drained federal funds otherwise earmarked for building maintenance, while making public housing into an ever-more prison-like space where residents were presumed to be criminals.<br><br>',
            credit: "Photo (c) Patricia Evans",
            location: {
                center: [-87.62610, 41.80931],
                zoom: 15.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section14',
            title: 'CABRINI-GREEN',
            alignment: 'right',
            hidden: false,
            image: 'images/image13.jpg',
            description: 'All this police activity did little to halt the drug trade, curb crime, or stop violence in public housing. In 1992, 7-year-old Dantrell Davis was shot and killed by a stray bullet at Cabrini-Green. Although not the first child killed by random violence in public housing, Davis’ death prompted an unprecedented media maelstrom and sparked widespread public outrage. In the wake of his death, policymakers argued that crime and violence in public housing were intolerable and, implicitly, that they were beyond what policing alone could control. Over time, these arguments would serve other ends: a growing movement to demolish and replace public housing.',
            location: {
                center: [-87.64092, 41.90058],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section15',
            alignment: 'center',
            hidden: false,
            description: 'In 1995, the Department of Housing and Urban Development (HUD) seized control of CHA, citing mismanagement, corruption, and deteriorated living conditions. After several years of federal management, it was announced in 1999 that the city would resume control of the CHA and would launch what it called the “Plan for Transformation,” under which it would demolish all of the city’s high-rises and replace them with privately-owned and managed “mixed-income communities.” The CHA Police were disbanded, and policing of CHA developments became the sole responsibility of CPD, which created a new unit for the purpose. Under the agreement between the city and HUD, CHA was granted a “Moving to Work” (MTW) designation—a privilege usually reserved for high-performing housing authorities that allows more flexibility in the use of federal funds—even though CHA had been deemed “failing” just four years prior.',
            location: {
                center: [-87.63726, 41.88938],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section16',
            title: 'ROBERT TAYLOR HOMES',
            alignment: 'right',
            hidden: false,
            image: 'images/image15.png',
            description: 'Long before the Plan for Transformation was announced, it was clear to residents that demolition was coming. CHA ceased turning over vacant units, shutting down entire floors and then entire buildings. Thus, the resident population began to decline, despite the massive demand for housing as reflected in the city’s decades-long public housing waitlist. This artificially produced vacancy rate was used by CHA as a rationale for reducing the number of units it was responsible for replacing—from 42,000 units at full occupancy to the 25,000 units that were promised in the Plan. Some high-rises became de facto homeless shelters, as homeless families squatted in vacant units until evicted—a clear reflection of the need that was not being addressed.<br><br>',
            credit: "Photo (c) Patricia Evans",
            location: {
                center: [-87.62589, 41.80188],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section17',
            title: 'IDA B. WELLS HOMES',
            alignment: 'right-image',
            hidden: false,
            image: 'images/image16.jpeg',
            description: 'As buildings gradually emptied out in the early 2000s, conditions were ripe for heightened police corruption and abuse. Although CHA transferred money to the police department for supplemental services (over $161 million between 2000 and 2012), police were allowed to operate with little oversight in an increasingly hollowed-out landscape, leaving the remaining residents vulnerable to corrupt officers such as former CPD Sergeant Ronald Watts. Between the late 1990s and 2012, Watts and his tactical team operated a protection racket, extorting a “tax” from drug dealers in the Ida B. Wells Homes and neighboring developments as the buildings were slowly demolished around them. Watts and his co-conspirators planted evidence and fabricated drug and gun charges, resulting in the wrongful incarceration of hundreds of public housing tenants. Finally, in 2012, Watts and his partner Kallat Mohammed were caught in an FBI sting and convicted on a single charge of stealing government property, for which they received sentences of 22 months and 18 months, respectively. To date, 183 Watts’ victims have been exonerated.',
            location: {
                center: [-87.61335, 41.82577],
                zoom: 16.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section18',
            alignment: 'center',
            hidden: false,
            description: 'The practices employed by Watts and his team—shaking down drug dealers, skimming off the top of money seized, planting guns and drugs on tenants—were commonplace in public housing at this time. Under conditions of abandonment, rogue police officers preyed on a population that had been criminalized by the War on Drugs and portrayed by the media as beyond the pale. The policing of public housing was thus the extreme case that illuminates the larger phenomenon of apartheid justice, dramatizing  the larger contradictions and failures of policing as an institution.',
            location: {
                center: [-87.61335, 41.82577],
                zoom: 16.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section19',
            title: 'CABRINI-GREEN',
            alignment: 'right',
            hidden: false,
            image: 'images/image18.jpg',
            description: 'Judged on its own terms, the Plan for Transformation did not achieve its stated goals. It is yet to produce the total number of replacement units CHA committed to produce. It has not resulted in thriving mixed-income communities. In the course of forced relocation, the agency lost track of an unknown but substantial number of tenants. Today, fewer than 7,000 units of traditional public housing remain, while some 44,000 people are on the CHA waitlist for public housing and another 35,000 people are on the voucher waitlist. Vast expanses of land that used to house those in need stand vacant in the central city; others, such as the former site of Cabrini Green, have been gentrified. And, the CHA has, in effect, become a commercial real estate broker for big box stores and sports facilities, including the XS Tennis Village at the site of the Robert Taylor Homes, Mariano’s at the site of the Ida B. Wells Homes, Target at the site of the Cabrini Green Homes, and a planned training facility for the Chicago Fire professional soccer team on the site of the ABLA Homes.<br><br>', 
            credit: "Photo (c) Patricia Evans",
            location: {
                center: [-87.64092, 41.90058],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section20',
            title: 'STATEWAY GARDENS',
            alignment: 'right',
            hidden: false,
            image: 'images/image19.png',
            description: 'There has been, however, one way in which the Plan has been transformative. Demolition and forced relocation have effectively disappeared people, places, and issues, shaping what we can see and what is rendered invisible. While other cities continue to use Chicago’s transformation as a blueprint, the city of Chicago  is yet to reckon with this history and its implications for the future.<br><br>', 
            credit: "Photo (c) Patricia Evans",
            location: {
                center: [-87.62610, 41.80931],
                zoom: 15.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
        {
            id: 'Section21',
            alignment: 'center',
            hidden: false,
            description: 'This storymap is the product of a collaboration between Madeleine Hamlin, PhD, and the Invisible Institute. It was produced by Madeleine Hamlin and Jamie Kalven, with mapping and technical support from Tingkuan Hsieh, Maheen Khan, Sophie Schadler, and Sophie Thompson. Funding support for this project was provided by the Colgate University Public Affairs and Policy Research Initiative. For questions, please contact mhamlin [at] colgate.edu. Copyright 2024.', 
            location: {
                center: [-87.63726, 41.88938],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
        },
    ]
}
