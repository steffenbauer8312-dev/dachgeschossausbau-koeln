export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  audience: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  faqs: ServiceFaq[];
  related: string[];
  sources: Array<{ label: string; href: string }>;
}

export const services: Service[] = [
  {
    slug: 'dachgeschossausbau',
    title: 'Dachgeschossausbau in Köln planen',
    metaTitle: 'Dachgeschossausbau Köln | Planung, Ausbau und Anfrage',
    description: 'Dachgeschossausbau in Köln verständlich geplant: Bestandsprüfung, Raumaufteilung, Dämmung, Tageslicht, Haustechnik und die nächsten Schritte.',
    eyebrow: 'Leistung · Dachausbau',
    intro: 'Ein Dachgeschoss wird nicht allein durch neue Wände zu Wohnraum. Entscheidend sind die vorhandene Dachkonstruktion, die lichte Höhe, Tageslicht, Rettungswege, Wärme- und Schallschutz sowie die Frage, ob eine Nutzungsänderung oder ein Bauantrag erforderlich ist.',
    audience: 'Für Eigentümerinnen und Eigentümer in Köln, die einen bisher ungenutzten oder nur teilweise ausgebauten Dachraum als Wohn-, Arbeits- oder Nebenfläche nutzen möchten.',
    sections: [
      { heading: 'Was vor dem Ausbau geklärt werden muss', paragraphs: ['Am Anfang steht eine Bestandsaufnahme: Dachform, Sparren, Deckenaufbau, Feuchte, Leitungswege und Zugang werden erfasst. Erst danach lässt sich seriös beurteilen, welche Wohnfläche tatsächlich nutzbar ist.', 'Bei einem Ausbau zu Aufenthaltsräumen kommen zusätzlich Anforderungen an Belichtung, Belüftung, Raumhöhe, Brandschutz und Rettungswege hinzu. Ob ein Verfahren bei der Bauaufsicht notwendig ist, hängt vom konkreten Vorhaben und den örtlichen Vorgaben ab.'], bullets: ['Bestand und Tragfähigkeit prüfen', 'Raumprogramm und Belichtung festlegen', 'Dämm- und Luftdichtheitskonzept abstimmen', 'Bauordnungsrecht und mögliche Genehmigung klären'] },
      { heading: 'Typische Bausteine eines Dachgeschossausbaus', paragraphs: ['Je nach Bestand gehören Dachflächenfenster oder Gauben, Dämmung, luftdichte Anschlüsse, Trockenbau, Bodenaufbau und die technische Erschließung dazu. Ein Bad oder eine Küche erhöht die Anforderungen an Leitungsführung, Lüftung und Feuchteschutz.', 'Die sinnvollste Reihenfolge ist nicht bei jedem Haus gleich. Ein bestehendes Dach kann erhalten bleiben, während bei Schäden oder einer geplanten Aufstockung weitere Bauteile betroffen sind.'], bullets: ['Dachfenster und Verschattung', 'Dämmung und Luftdichtheit', 'Trockenbau, Boden und Treppe', 'Elektro, Heizung, Sanitär und Lüftung'] },
      { heading: 'So wird aus einer Idee eine belastbare Anfrage', paragraphs: ['Für eine erste Einordnung helfen Fotos vom Dachraum, Grundrisse, Angaben zum Baujahr und eine kurze Beschreibung des gewünschten Raums. Eine Vor-Ort-Prüfung ersetzt das nicht, sie macht aber sichtbar, welche Unterlagen als Nächstes gebraucht werden.'] }
    ],
    faqs: [
      { question: 'Ist ein Dachgeschossausbau in Köln immer genehmigungspflichtig?', answer: 'Nein, das lässt sich nicht pauschal beantworten. Je nach Umfang können Bauordnung, Nutzungsänderung, Dachaufbauten, Statik, Brandschutz und örtliche Satzungen betroffen sein. Das konkrete Vorhaben sollte vor Baubeginn mit der zuständigen Bauaufsicht beziehungsweise einer bauvorlageberechtigten Planung geklärt werden.' },
      { question: 'Was kostet ein Dachgeschossausbau?', answer: 'Die Kosten hängen unter anderem von Dachzustand, Wohnfläche, Fenstern oder Gauben, Haustechnik, Bad und gewünschtem Ausstattungsniveau ab. Pauschale Quadratmeterpreise sind ohne Bestandsdaten nur grobe Orientierung und kein Angebot.' },
      { question: 'Welche Unterlagen sind für eine erste Prüfung hilfreich?', answer: 'Grundrisse, Schnitte, Fotos von innen und außen, Baujahr, bekannte Schäden sowie Angaben zum gewünschten Raumprogramm. Bei Mehrfamilienhäusern sind außerdem Teilungserklärung und Beschlüsse der Eigentümergemeinschaft relevant.' }
    ],
    related: ['dachaufstockung', 'dachstatik', 'dachfenster', 'innenausbau-dachgeschoss'],
    sources: [
      { label: 'Stadt Köln: Bauantrag und Baugenehmigung', href: 'https://www.stadt-koeln.de/artikel/70574/index.html' },
      { label: 'Bauordnung NRW 2018, aktuelle Fassung', href: 'https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw/' }
    ]
  },
  {
    slug: 'dachaufstockung',
    title: 'Dachaufstockung in Köln vorbereiten',
    metaTitle: 'Dachaufstockung Köln | Tragwerk, Planung und Bauantrag',
    description: 'Dachaufstockung in Köln: Welche Fragen zu Tragwerk, Gebäudehöhe, Baurecht, Entwurf und Kosten vor der Planung geklärt werden müssen.',
    eyebrow: 'Leistung · Neue Wohnfläche',
    intro: 'Eine Dachaufstockung schafft zusätzliche Fläche, verändert aber die Gebäudegeometrie. Deshalb beginnt sie mit einer Tragwerks- und Machbarkeitsprüfung, nicht mit einer Ausstattungsentscheidung.',
    audience: 'Für Eigentümer von Ein- und Mehrfamilienhäusern sowie Wohnungsunternehmen, die eine zusätzliche Ebene oder mehr nutzbare Höhe prüfen möchten.',
    sections: [
      { heading: 'Aufstockung oder Ausbau?', paragraphs: ['Beim klassischen Dachgeschossausbau bleibt die äußere Dachform weitgehend erhalten. Eine Aufstockung kann dagegen Dachstuhl, Geschosshöhe, Kubatur und Anschlüsse verändern. Welche Variante sinnvoll ist, hängt vom Bestand, dem Bebauungsplan und dem gewünschten Raumprogramm ab.', 'In dicht bebauten Kölner Lagen können Abstandsflächen, Gestaltungsvorgaben, Denkmalschutz und die Nachbarschaft eine wichtige Rolle spielen. Diese Punkte gehören früh in die Machbarkeitsprüfung.'] },
      { heading: 'Technische Prüfungen', paragraphs: ['Geprüft werden unter anderem Fundamente, tragende Wände, Decken, Dachanschlüsse und der Lastabtrag. Für die spätere Planung braucht es belastbare Bestandsunterlagen und eine statische Beurteilung durch die dafür zuständige Fachplanung.', 'Holzbau kann bei Aufstockungen wegen des vergleichsweise geringen Eigengewichts eine Option sein. Ob das im Einzelfall passt, ist eine technische und gestalterische Entscheidung, keine pauschale Zusage.'], bullets: ['Bestand und Tragreserven aufnehmen', 'Gebäudehöhe und Baugrenzen prüfen', 'Entwurf, Brandschutz und Rettungswege koordinieren', 'Bauantrag und Ausführungsplanung vorbereiten'] },
      { heading: 'Was eine gute Anfrage enthalten sollte', paragraphs: ['Sinnvoll sind Grundrisse und Schnitte, Fotos der Dach- und Fassadenseiten, Informationen zum Baujahr sowie das Ziel der Aufstockung. Bei einem Mehrfamilienhaus kommen Eigentums- und Genehmigungsthemen hinzu.'] }
    ],
    faqs: [
      { question: 'Ist eine Dachaufstockung genehmigungspflichtig?', answer: 'Eine Aufstockung verändert regelmäßig die bauliche Anlage und sollte deshalb als genehmigungsrechtlich anspruchsvolles Vorhaben behandelt werden. Ob und in welchem Verfahren eingereicht wird, entscheidet sich anhand des konkreten Entwurfs und der örtlichen Regeln.' },
      { question: 'Kann jedes Haus aufgestockt werden?', answer: 'Nein. Tragwerk, Fundamente, Gebäudegeometrie, Baugrund, Baurecht und Brandschutz setzen Grenzen. Eine belastbare Aussage ist erst nach Bestands- und Machbarkeitsprüfung möglich.' },
      { question: 'Was ist der Unterschied zwischen Aufstockung und Dachausbau?', answer: 'Beim Dachausbau wird vorhandener Dachraum nutzbar gemacht. Eine Aufstockung ergänzt oder verändert die Konstruktion, um zusätzliche Höhe oder eine neue Ebene zu schaffen.' }
    ],
    related: ['dachgeschossausbau', 'dachstatik', 'innenausbau-dachgeschoss'],
    sources: [
      { label: 'Stadt Köln: Bauantrag und Baugenehmigung', href: 'https://www.stadt-koeln.de/artikel/70574/index.html' },
      { label: 'Bauordnung NRW 2018, aktuelle Fassung', href: 'https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw/' }
    ]
  },
  {
    slug: 'gauben',
    title: 'Dachgauben in Köln planen und bauen',
    metaTitle: 'Dachgauben Köln | Formen, Planung und Genehmigung',
    description: 'Dachgauben in Köln: Unterschiede von Schleppgaube, Sattelgaube und Flachdachgaube, dazu Platzgewinn, Tageslicht, Statik und Genehmigung.',
    eyebrow: 'Leistung · Tageslicht und Raumhöhe',
    intro: 'Eine Gaube kann dort Kopfhöhe und Fensterfläche schaffen, wo ein Dachflächenfenster allein nicht genügt. Sie verändert aber die Dachfläche und muss zur Konstruktion, Gestaltung und Rechtslage des Hauses passen.',
    audience: 'Für Eigentümer, die im Dachgeschoss mehr Stehhöhe, Tageslicht oder eine klar nutzbare Raumzone gewinnen möchten.',
    sections: [
      { heading: 'Welche Gaubenform passt?', paragraphs: ['Schleppgauben sind konstruktiv oft klar, Sattelgauben wirken traditionell und Flachdachgauben können bei begrenzter Dachneigung viel Höhe schaffen. Die Auswahl hängt von Dachneigung, First- und Traufhöhe, gewünschtem Fenster, Stadtbild und Bebauungsplan ab.', 'Die Form sollte nicht allein nach dem Innenraum gewählt werden. Proportion, Entwässerung, Anschluss an die Dachdeckung und die Wirkung auf Nachbar- und Straßenansicht gehören in dieselbe Prüfung.'] },
      { heading: 'Statik, Abdichtung und Bauordnung', paragraphs: ['Für die Öffnung der Dachfläche werden Sparren und Lasten verändert. Anschlüsse müssen dauerhaft luft- und regendicht sein. Je nach Ausführung können Abstandsflächen, Satzungen, Gestaltungsvorgaben oder ein Genehmigungsverfahren relevant werden.', 'Das Bauportal NRW weist ausdrücklich darauf hin, dass Gauben abhängig von Größe und Ausführung Abstandsflächen auslösen können. Eine allgemeine Aussage wie „jede Gaube ist genehmigungsfrei“ wäre deshalb falsch.'], bullets: ['Dachaufbau und Sparrenlage prüfen', 'Gaubenform mit Dach und Fassade abstimmen', 'Belichtung und nutzbare Raumhöhe planen', 'Bauordnungsrecht und örtliche Vorgaben prüfen'] },
      { heading: 'Mehrwert für den Dachraum', paragraphs: ['Gut platzierte Gauben verbessern nicht nur die Stehhöhe. Sie können eine Möblierungszone, einen Arbeitsplatz oder einen kleinen Badbereich ermöglichen. Für die Planung zählt daher der Grundriss unter der Dachschräge, nicht nur die Außenansicht.'] }
    ],
    faqs: [
      { question: 'Welche Gaube ist die beste?', answer: 'Das hängt von Dachneigung, Raumziel, gewünschter Fensterfläche, Gestaltung und Baurecht ab. Eine Sattelgaube ist nicht automatisch besser als eine Schlepp- oder Flachdachgaube.' },
      { question: 'Brauche ich für eine Dachgaube eine Genehmigung?', answer: 'Das kann je nach Größe, Lage, Satzung und Ausführung unterschiedlich sein. Das Bauportal NRW nennt unter anderem Abstandsflächen und örtliche Bauvorschriften als Prüfpunkt. Vor der Bestellung sollte die konkrete Gaube planungsrechtlich eingeordnet werden.' },
      { question: 'Kann eine Gaube nachträglich eingebaut werden?', answer: 'Ja, das ist bei vielen Bestandsdächern grundsätzlich möglich, aber Dachstuhl, Dachdeckung, Innenausbau und Anschlüsse müssen geprüft werden. Bei einem älteren Dach kann eine Kombination mit Sanierung sinnvoll sein.' }
    ],
    related: ['dachgeschossausbau', 'dachfenster', 'dachstatik'],
    sources: [
      { label: 'Bauportal NRW: Dachgaube bauen', href: 'https://bauportal.nrw/dachgaube-bauen-nordrhein-westfalen' },
      { label: 'Bauordnung NRW 2018, aktuelle Fassung', href: 'https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw/' }
    ]
  },
  {
    slug: 'daemmung',
    title: 'Dachdämmung für den Ausbau in Köln',
    metaTitle: 'Dachdämmung Köln | Aufbau, GEG und Dachgeschossausbau',
    description: 'Dachdämmung in Köln sachlich erklärt: Zwischensparren, Aufsparren, Luftdichtheit, GEG-Anforderungen und Förderung vor der Sanierung prüfen.',
    eyebrow: 'Leistung · Energie und Bauphysik',
    intro: 'Die Dämmung ist im Dachgeschossausbau nicht nur eine Frage des Materials. Aufbau, Feuchteschutz, Luftdichtheit, Wärmebrücken, Schallschutz und die Anschlussdetails entscheiden darüber, ob der Raum dauerhaft funktioniert.',
    audience: 'Für Eigentümer mit ungedämmtem oder sanierungsbedürftigem Dach sowie für Bauherren, die den Ausbau mit einer energetischen Verbesserung verbinden möchten.',
    sections: [
      { heading: 'Zwischen-, Unter- oder Aufsparrendämmung', paragraphs: ['Eine Zwischensparrendämmung nutzt den vorhandenen Sparrenraum. Eine Untersparrenebene kann den Aufbau ergänzen, reduziert aber die lichte Höhe. Eine Aufsparrendämmung liegt oberhalb der Sparren und ist besonders bei einer ohnehin geplanten Neueindeckung interessant.', 'Welche Konstruktion passt, hängt von Dachdeckung, Sparrenhöhe, Innenbekleidung, Traufdetails und dem gewünschten energetischen Ziel ab. Materialnamen allein beantworten diese Frage nicht.'] },
      { heading: 'GEG und Nachweise', paragraphs: ['Das Gebäudeenergiegesetz enthält Anforderungen für bestehende Gebäude bei Änderungen und für den Ausbau. Bei der obersten Geschossdecke nennt § 47 GEG einen maximalen Wärmedurchgangskoeffizienten von 0,24 W/(m²·K); § 48 und Anlage 7 sind bei Änderungen von Außenbauteilen relevant. Im Einzelfall müssen Planung und Nachweis zusammenpassen.', 'Für Förderungen gelten häufig zusätzliche Bedingungen. Die Förderfähigkeit und die aktuell geltenden Programmregeln sollten vor Auftrag und Baubeginn anhand der offiziellen Förderstelle geprüft werden.'], bullets: ['Bestand und Feuchteursachen prüfen', 'Wärmeschutz und Luftdichtheit planen', 'Anschlüsse an Fenster, Traufe und Giebel detaillieren', 'Fördervoraussetzungen vor Beauftragung prüfen'] },
      { heading: 'Dämmung als Teil des Dachausbaus', paragraphs: ['Wenn ohnehin Dachfenster, Gauben, Leitungen und Innenbekleidungen geplant sind, sollte der Dämmaufbau früh feststehen. Nachträgliche Änderungen an der Luftdichtheit oder an Anschlüssen sind meist aufwendiger als eine abgestimmte Planung.'] }
    ],
    faqs: [
      { question: 'Welche Dachdämmung ist die beste?', answer: 'Es gibt keine pauschal beste Lösung. Die richtige Konstruktion ergibt sich aus Dachaufbau, Platz, Feuchte- und Luftdichtheitskonzept, Bauablauf und Zielwerten.' },
      { question: 'Was schreibt das GEG bei einem Dachausbau vor?', answer: 'Das hängt davon ab, ob und welche Außenbauteile geändert werden und ob ein Ausbau oder eine Nutzungsänderung vorliegt. Für die oberste Geschossdecke und Änderungen am Dach gelten unterschiedliche Vorschriften. Die konkrete Planung sollte energetisch nachgewiesen werden.' },
      { question: 'Wird eine Dachdämmung gefördert?', answer: 'Für Maßnahmen an der Gebäudehülle können Programme der Bundesförderung für effiziente Gebäude relevant sein. Die BAFA-Förderübersicht nennt für bestimmte Einzelmaßnahmen an der Gebäudehülle einen Grundfördersatz von 15 Prozent. Bedingungen, Kostenobergrenzen und Antragsschritte müssen aktuell geprüft werden.' }
    ],
    related: ['dachgeschossausbau', 'dachfenster', 'innenausbau-dachgeschoss'],
    sources: [
      { label: 'GEG: §§ 47, 48 und 51', href: 'https://www.gesetze-im-internet.de/geg/GEG.pdf' },
      { label: 'BAFA: Förderübersicht BEG EM', href: 'https://www.bafa.de/SharedDocs/Downloads/DE/Energie/beg_em_foerderuebersicht.pdf?__blob=publicationFile&v=10' },
      { label: 'ALTBAUNEU Köln: Dachdämmung', href: 'https://www.alt-bau-neu.de/koeln/wissenswertes/gebaeudehuelle/dachdaemmung' }
    ]
  },
  {
    slug: 'dachfenster',
    title: 'Dachfenster in Köln einbauen oder ersetzen',
    metaTitle: 'Dachfenster Köln | Einbau, Austausch und Tageslicht',
    description: 'Dachfenster in Köln planen: Einbau im Dachgeschoss, Fenstergrößen, Anschluss, Verschattung, Lüftung und die Abstimmung mit Dämmung und Gauben.',
    eyebrow: 'Leistung · Tageslicht',
    intro: 'Dachfenster beeinflussen Belichtung, Lüftung, sommerlichen Wärmeschutz und den Grundriss. Im Dachgeschossausbau müssen sie deshalb mit Sparrenlage, Dämmung, Innenbekleidung und dem späteren Raumprogramm geplant werden.',
    audience: 'Für Eigentümer, die ein dunkles Dachgeschoss nutzbar machen, alte Dachfenster ersetzen oder die Fensterplanung mit einer Sanierung verbinden möchten.',
    sections: [
      { heading: 'Einbau oder Austausch?', paragraphs: ['Beim Austausch steht die vorhandene Öffnung im Mittelpunkt: Maße, Anschluss, Eindeckrahmen, Innenfutter und der Zustand der angrenzenden Konstruktion müssen zusammenpassen. Beim Neueinbau kommen Sparrenwechsel, Statik, Dachdeckung und Innenausbau hinzu.', 'Die Fensterposition sollte an Möblierung, Kopfhöhe und Rettungsweg gekoppelt werden. Ein größeres Fenster ist nicht automatisch die bessere Lösung, wenn Verschattung, sommerlicher Wärmeschutz oder die Dachkonstruktion nicht mitgedacht werden.'] },
      { heading: 'Details, die über die Qualität entscheiden', paragraphs: ['Wichtig sind ein fachgerechter Anschluss an die wasserführende Ebene, die luftdichte Innenebene und eine gedämmte Laibung. Außenliegender Sonnenschutz kann die sommerliche Aufheizung reduzieren; die passende Lösung hängt von Bedienung, Stromversorgung und Fensterlage ab.'], bullets: ['Fenstergröße und Sparrenlage abstimmen', 'Wasserführung und Eindeckrahmen planen', 'Dämmung und Luftdichtheit anschließen', 'Sonnenschutz und Lüftung mitdenken'] },
      { heading: 'Fenster, Gaube oder beides?', paragraphs: ['Dachflächenfenster bringen Licht mit vergleichsweise wenig Eingriff in die Dachform. Eine Gaube kann zusätzlich Kopfhöhe und eine andere Raumproportion schaffen. Für viele Ausbauten ist eine Kombination sinnvoll, aber nicht jedes Dach lässt jede Lösung zu.'] }
    ],
    faqs: [
      { question: 'Was kostet der Einbau eines Dachfensters?', answer: 'Der Aufwand hängt von Größe, Zugänglichkeit, Sparrenlage, Dachdeckung, Innenbekleidung und eventuellen Reparaturen ab. Ein belastbarer Preis braucht mindestens Maße, Fotos und Angaben zum Dachaufbau.' },
      { question: 'Brauche ich für ein Dachfenster eine Baugenehmigung?', answer: 'Der Austausch eines gleichartigen Fensters ist anders zu bewerten als ein Neueinbau oder eine Änderung der Dachform. Zusätzlich können Denkmalschutz, Gestaltungssatzung und Rettungsweg eine Rolle spielen. Das konkrete Fenster sollte vorab eingeordnet werden.' },
      { question: 'Sind Dachfenster oder Gauben besser?', answer: 'Dachfenster sind oft der geringere Eingriff in die Dachform. Gauben können mehr nutzbare Höhe schaffen. Die Entscheidung gehört in den Grundriss und in die baurechtliche Prüfung.' }
    ],
    related: ['dachgeschossausbau', 'gauben', 'daemmung'],
    sources: [
      { label: 'Stadt Köln: Bauantrag und Baugenehmigung', href: 'https://www.stadt-koeln.de/artikel/70574/index.html' },
      { label: 'GEG: Anforderungen bei Änderungen', href: 'https://www.gesetze-im-internet.de/geg/GEG.pdf' }
    ]
  },
  {
    slug: 'dachterrasse',
    title: 'Dachterrasse in Köln planen',
    metaTitle: 'Dachterrasse Köln | Statik, Abdichtung und Genehmigung',
    description: 'Dachterrasse in Köln planen: Tragfähigkeit, Abdichtung, Entwässerung, Geländer, Zugänge und baurechtliche Prüfung verständlich erklärt.',
    eyebrow: 'Leistung · Außenraum',
    intro: 'Eine Dachterrasse ist mehr als ein Belag auf dem Dach. Tragfähigkeit, Gefälle, Abdichtung, Entwässerung, Geländer, Zugang und die Auswirkungen auf Nachbarn und Stadtbild müssen zusammen geplant werden.',
    audience: 'Für Eigentümer, die einen begehbaren Dachbereich neu schaffen oder eine vorhandene Dachfläche sicher und dauerhaft nutzen möchten.',
    sections: [
      { heading: 'Bestand und Tragwerk zuerst', paragraphs: ['Vor der Gestaltung muss klar sein, welche Lasten die Dachkonstruktion aufnehmen kann. Auch der Zugang, die Brüstung, der Geländeranschluss und die Entwässerung beeinflussen die Konstruktion.', 'Bei Flachdächern und umgebauten Dachflächen ist die Abdichtung besonders sensibel. Durchdringungen, Randanschlüsse und Gefälle müssen so geplant werden, dass Wasser sicher abgeführt wird.'] },
      { heading: 'Baurecht und Nachbarschaft', paragraphs: ['Eine Dachterrasse kann die äußere Gestalt, die Nutzung und die Einsehbarkeit verändern. Je nach Vorhaben kommen Bauordnung, Bebauungsplan, Gestaltungssatzung, Denkmalschutz und Abstandsflächen in Betracht. Vor Beginn sollte geklärt werden, welches Verfahren und welche Nachweise nötig sind.'], bullets: ['Tragfähigkeit und Aufbauhöhe prüfen', 'Abdichtung und Entwässerung planen', 'Geländer, Brüstung und Zugang nachweisen', 'Baurecht und mögliche Nachbarbelange prüfen'] },
      { heading: 'Material und Nutzung', paragraphs: ['Belag, Aufbau und Möblierung sollten zur zulässigen Last und zur Wartung passen. Eine pflegeleichte Oberfläche ist nur dann sinnvoll, wenn Anschlüsse, Ablauf und Schutzlagen dauerhaft zugänglich bleiben.'] }
    ],
    faqs: [
      { question: 'Brauche ich für eine Dachterrasse eine Genehmigung?', answer: 'Das hängt von Konstruktion, Nutzung, Lage und den örtlichen Regeln ab. Weil sich Dachform, Brüstung, Einsehbarkeit oder Nutzung ändern können, sollte die Dachterrasse vor Ausführung bauordnungsrechtlich geprüft werden.' },
      { question: 'Kann jedes Flachdach zur Terrasse werden?', answer: 'Nein. Tragfähigkeit, Abdichtung, Gefälle, Entwässerung, Aufbauhöhe und Zugang müssen geeignet sein. Eine statische und bauphysikalische Prüfung ist der sichere Ausgangspunkt.' },
      { question: 'Welche Unterlagen helfen bei der Anfrage?', answer: 'Dachaufsicht, Schnitte, Fotos, Angaben zu Dachaufbau und Entwässerung sowie eine Skizze der gewünschten Fläche. Bei bestehenden Gebäuden sind frühere Bauunterlagen hilfreich.' }
    ],
    related: ['dachstatik', 'dachgeschossausbau', 'dachaufstockung'],
    sources: [
      { label: 'Stadt Köln: Bauantrag und Baugenehmigung', href: 'https://www.stadt-koeln.de/artikel/70574/index.html' },
      { label: 'Bauordnung NRW 2018, aktuelle Fassung', href: 'https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw/' }
    ]
  },
  {
    slug: 'dachstatik',
    title: 'Dachstatik für den Ausbau prüfen',
    metaTitle: 'Dachstatik Köln | Tragfähigkeit für Dachausbau prüfen',
    description: 'Dachstatik beim Ausbau in Köln: Bestandsunterlagen, Lasten, Sparren, Decken, Gauben und Aufstockung vor der Ausführung richtig einordnen.',
    eyebrow: 'Leistung · Tragwerk',
    intro: 'Ob ein Dachgeschoss als Wohnraum taugt, entscheidet sich auch am Tragwerk. Neue Bauteile, Nutzlasten, Gauben, Fenster, Estrich und Haustechnik können die vorhandene Konstruktion verändern.',
    audience: 'Für Eigentümer mit älteren Dachstühlen, geplanten Gauben, schwerem Bodenaufbau, Nutzungsänderung oder Aufstockung.',
    sections: [
      { heading: 'Was bei der Bestandsprüfung zählt', paragraphs: ['Pläne und sichtbare Bauteile werden mit der tatsächlichen Konstruktion abgeglichen. Relevant sind unter anderem Spannweiten, Querschnitte, Auflager, Decken, Schäden, Feuchte und frühere Umbauten.', 'Eine Fotoprüfung kann erste Hinweise liefern, ersetzt aber keine fachliche Tragwerksplanung. Das gilt besonders, wenn Aufenthaltsräume, zusätzliche Lasten oder Eingriffe in Sparren und Pfetten geplant sind.'] },
      { heading: 'Typische Auslöser für eine statische Prüfung', paragraphs: ['Gauben, größere Dachfenster, neue Treppenöffnungen, Bodenaufbauten, Bäder, Dachterrassen und Aufstockungen verändern Lasten oder Bauteile. Auch ein Wechsel der Dachdeckung kann relevant sein.'], bullets: ['neue oder größere Öffnungen', 'Gauben und Dachaufbauten', 'zusätzliche Geschoss- oder Nutzlasten', 'Aufstockung und neue Dachkonstruktion'] },
      { heading: 'Statik im Planungsablauf', paragraphs: ['Die Tragwerksprüfung sollte vor der endgültigen Raumaufteilung und vor Bestellungen stehen. So lassen sich Lösungen anpassen, bevor die Dachfläche geöffnet oder der Innenausbau festgelegt ist.'] }
    ],
    faqs: [
      { question: 'Brauche ich für jeden Dachausbau eine neue Statik?', answer: 'Das hängt vom Bestand und dem Eingriff ab. Sobald Lasten, tragende Bauteile oder Öffnungen verändert werden, sollte eine qualifizierte Tragwerksplanung prüfen, was nachzuweisen ist.' },
      { question: 'Kann man die Tragfähigkeit aus dem Baujahr ableiten?', answer: 'Nein. Baujahr und Dachform geben Hinweise, ersetzen aber nicht die Prüfung der tatsächlichen Konstruktion und früherer Veränderungen.' },
      { question: 'Ist eine statische Prüfung förderfähig?', answer: 'Das lässt sich nicht pauschal zusagen. Förderprogramme beziehen sich auf bestimmte Maßnahmen und Bedingungen. Die aktuelle Richtlinie muss im konkreten Projekt geprüft werden.' }
    ],
    related: ['dachgeschossausbau', 'dachaufstockung', 'gauben', 'dachterrasse'],
    sources: [
      { label: 'Bauordnung NRW: allgemeine Anforderungen an die Standsicherheit', href: 'https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw/' },
      { label: 'Stadt Köln: Bauantrag und Baugenehmigung', href: 'https://www.stadt-koeln.de/artikel/70574/index.html' }
    ]
  },
  {
    slug: 'innenausbau-dachgeschoss',
    title: 'Innenausbau im Dachgeschoss',
    metaTitle: 'Innenausbau Dachgeschoss Köln | Trockenbau, Boden und Technik',
    description: 'Innenausbau im Dachgeschoss in Köln: Trockenbau, Boden, Treppe, Elektro, Heizung, Sanitär und die richtige Reihenfolge für den Ausbau.',
    eyebrow: 'Leistung · Innenraum',
    intro: 'Ein ausgebautes Dachgeschoss braucht mehr als eine neue Oberfläche. Raumaufteilung, Installationen, Schallschutz, Brandschutz, Bodenaufbau und die Anschlüsse an die Dachkonstruktion müssen zusammenpassen.',
    audience: 'Für Eigentümer mit bereits genehmigtem oder technisch geklärtem Dachraum, die den Innenausbau als Wohn-, Arbeits- oder Nebenfläche planen.',
    sections: [
      { heading: 'Die richtige Reihenfolge', paragraphs: ['Zuerst werden Dach, Dämmung, Leitungswege und Öffnungen geklärt. Danach folgen Installationen, Unterkonstruktionen, Innenbekleidungen und Bodenaufbau. Erst am Ende stehen Oberflächen, Türen, Einbauten und Malerarbeiten.', 'Diese Reihenfolge schützt vor unnötigem Rückbau und macht sichtbar, wo Revisionsmöglichkeiten, Schallschutz oder Brandschutz benötigt werden.'] },
      { heading: 'Trockenbau, Boden und Technik', paragraphs: ['Trockenbau kann Raumzonen bilden und Leitungen aufnehmen. Der Bodenaufbau muss zur Tragfähigkeit, Aufbauhöhe und gewünschten Nutzung passen. Bei Bad, Küche oder Heizkörpern sind Leitungsführung, Abdichtung und Lüftung früh einzuplanen.', 'Welche Gewerke tatsächlich erforderlich sind, entscheidet der Bestand. Deshalb werden auf dieser Seite keine pauschalen Komplettpreise oder Fertigstellungsversprechen genannt.'], bullets: ['Dachschrägen und Trennwände', 'Bodenaufbau und Schallschutz', 'Elektro, Heizung, Sanitär und Lüftung', 'Treppe, Türen und Oberflächen'] },
      { heading: 'Nutzungsziel zuerst festlegen', paragraphs: ['Ein Schlafzimmer, ein Büro, ein Bad und eine eigenständige Wohnung haben unterschiedliche Anforderungen. Das Nutzungsziel beeinflusst Raumhöhe, Belichtung, Installationen, Rettungswege und die nötige Planungstiefe.'] }
    ],
    faqs: [
      { question: 'Kann der Innenausbau ohne Dachsanierung starten?', answer: 'Nur wenn Dach, Tragwerk, Feuchte und energetischer Aufbau bereits geklärt sind. Andernfalls droht Rückbau, wenn später Fenster, Dämmung oder Dachdeckung geändert werden.' },
      { question: 'Welche Bodenlösung passt unter das Dach?', answer: 'Das hängt von Tragfähigkeit, Aufbauhöhe, Schallschutz, Leitungsführung und Nutzung ab. Trockenestrich ist eine mögliche Lösung, aber keine pauschale Empfehlung für jeden Bestand.' },
      { question: 'Kann ein Bad im Dachgeschoss eingebaut werden?', answer: 'Grundsätzlich kann das möglich sein. Leitungswege, Tragfähigkeit, Abdichtung, Lüftung, Schallschutz und die rechtliche Einordnung müssen im konkreten Gebäude geprüft werden.' }
    ],
    related: ['dachgeschossausbau', 'daemmung', 'dachfenster', 'dachstatik'],
    sources: [
      { label: 'GEG: Anforderungen bei Änderung und Ausbau', href: 'https://www.gesetze-im-internet.de/geg/GEG.pdf' },
      { label: 'Stadt Köln: Bauantrag und Baugenehmigung', href: 'https://www.stadt-koeln.de/artikel/70574/index.html' }
    ]
  }
];

export const getService = (slug: string) => services.find(service => service.slug === slug);

export const guides = [
  { slug: 'kosten-dachgeschossausbau-pro-qm', title: 'Kosten beim Dachgeschossausbau: Welche Faktoren zählen?', description: 'Kosten transparent einordnen, ohne Scheingenauigkeit: Bestand, Dach, Technik, Ausstattung und Planung.' },
  { slug: 'baugenehmigung-dachgeschoss-koeln', title: 'Baugenehmigung für den Dachausbau in Köln', description: 'Welche Fragen vor dem Start mit Bauaufsicht, Bauordnung und Planung geklärt werden sollten.' },
  { slug: 'dachaufstockung-oder-ausbau', title: 'Dachaufstockung oder Dachausbau: Was passt zum Bestand?', description: 'Die beiden Wege nach Eingriff, Wohnfläche, Tragwerk, Baurecht und Planung vergleichen.' },
  { slug: 'dachgauben-arten-vergleich', title: 'Dachgauben vergleichen: Form, Raumgewinn und Planung', description: 'Schleppgaube, Sattelgaube und Flachdachgaube anhand nachvollziehbarer Kriterien einordnen.' },
  { slug: 'geg-daemmung-pflicht-2026', title: 'GEG und Dachdämmung: Was Eigentümer prüfen sollten', description: '§§ 47, 48 und 51 GEG verständlich einordnen, ohne aus Einzelfällen allgemeine Pflichten abzuleiten.' }
];

export const legacyServiceRedirects: Record<string, string> = {
  '/leistungen/dachbodenausbau': '/leistungen/dachgeschossausbau/',
  '/leistungen/dachfenstereinbau': '/leistungen/dachfenster/',
  '/leistungen/dachterrassenbau': '/leistungen/dachterrasse/',
  '/leistungen/statik': '/leistungen/dachstatik/',
  '/leistungen/trockenbau': '/leistungen/innenausbau-dachgeschoss/',
  '/leistungen/gaubenbau': '/leistungen/gauben/',
  '/leistungen/dachstuhlbau': '/leistungen/dachstatik/',
  '/leistungen/dachstuhlsanierung': '/leistungen/dachstatik/',
  '/leistungen/dachstuhlverstärkung': '/leistungen/dachstatik/',
  '/leistungen/dachstuhlreparatur': '/leistungen/dachstatik/',
  '/leistungen/sparren-austauschen-verstärken': '/leistungen/dachstatik/',
  '/leistungen/pfetten-erneuern-verstärken': '/leistungen/dachstatik/',
  '/leistungen/dachsanierung': '/leistungen/daemmung/',
  '/leistungen/energetische-dachsanierung': '/leistungen/daemmung/',
  '/leistungen/aufsparrendaemmung': '/leistungen/daemmung/',
  '/leistungen/zwischensparrendaemmung': '/leistungen/daemmung/',
  '/leistungen/dachboden-daemmen': '/leistungen/daemmung/',
  '/leistungen/holzbalkendecke-sanieren': '/leistungen/innenausbau-dachgeschoss/',
  '/leistungen/holzbalkendecke-verstaerken': '/leistungen/dachstatik/'
};
