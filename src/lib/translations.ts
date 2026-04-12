export const translations: Record<string, any> = {
	en: {
		nav: {
			about: 'About',
			expertise: 'Expertise',
			experiences: 'Experience',
			courses: 'Courses',
			contact: 'Contact'
		},
		hero: {
			title: 'Your Path to',
			words: ['Mathematical Mastery.', 'Exam Success.', 'Academic Excellence.', 'True Understanding.'],
			subtitle: [
				'We offer personalized mathematics tutoring for middle school, high school, and university entrance exams. We help you build a deep understanding of the subject, improve your grades, and confidently succeed in your exams.',
				'Every lesson is fully tailored to your current level and goals. Whether you need to strengthen foundational concepts, break down complex topics, or prepare intensively for an upcoming exam.'
			],
			cta: 'Start Learning Today',
			cta_short: 'Enroll Now',
			scroll: 'Scroll to explore',
			accepting: 'Now Accepting Students',
			welcome: 'Welcome to Mathera'
		},
		about: {
			title: 'About Me',
			brief: 'Get to know your tutor',
			general: {
				title: 'General',
				greeting: 'Hi,',
				paragraphs: [
					'I\'m Aman and I will be your tutor. I have over 10 years of experience in tutoring, and I have helped more than 50 students achieve their goals. Whether it\'s raising grades, understanding difficult topics, preparing for entrance exams, or matriculation exams, together we will build a plan that works for you.',
					'My goal is simple: to help you succeed and achieve what you consider important.'
				]
			},
			education: {
				title: 'Education & Background',
				paragraphs: [
					'I graduated from high school in the science track and completed my degree in Engineering Physics and Mathematics at Aalto University. I currently work in artificial intelligence.',
					'I have served as a university course assistant for nearly five years across more than ten different courses. In this role, I have taught, led exercises, and helped students understand difficult topics clearly. I have received a great deal of positive feedback for my teaching, especially for clarity, patience, and the way I explain things in an understandable manner.',
					'Mathematics is not just a school subject or a job to me, but also a long-time hobby and passion. Tutoring has been a constant part of my life alongside my studies and career.'
				]
			},
			experience: {
				title: 'Competition Experience',	
				intro: 'I have participated in mathematics and science competitions since primary school. My experience includes:',
				bullets: ['Mental math competitions', 'MAOL competitions', 'Math Olympiad training', 'Math camps', '<a href="https://www.aalto.fi/fi/uutiset/aallon-opiskelijoille-mitaleita-kansainvalisessa-matematiikkakilpailussa-0" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accent hover:underline font-medium ml-1 transition-colors">IMC (International Mathematics Competition) ↗</a>'],
				outro: 'I have achieved several good placements, honorable mentions, and medals. This background has given me a strong understanding of mathematics and how it is learned effectively.'
			},
			footer: 'If you want clarity in mathematics, confidence for exams, or to raise your grades, I am happy to help. Let\'s make your goals a reality together.',
			badges: {
				structured: 'Structured Teaching',
				conceptFirst: 'Concept-First Approach',
				examReady: 'Exam-Ready Focus',
				patient: 'Patient & Supportive',
				adaptive: 'Adaptive Methods'
			}
		},
		skills: {
			title: 'Areas of Expertise',
			brief: 'What I teach',
			topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'Trigonometry'],
			linearAlgebra: 'Linear Algebra',
			proficiency: 'Proficiency',
			alsoComfortable: 'Also comfortable with: Discrete Mathematics, Number Theory, Mathematical Logic, SAT/ACT Math Prep',
			levels: { expert: 'Expert', advanced: 'Advanced', intermediate: 'Intermediate' },
			descs: {
				algebra: 'Linear, quadratic, polynomial and abstract algebra',
				calculus: 'Differential, integral and multivariable calculus',
				geometry: 'Euclidean, coordinate and analytical geometry',
				statistics: 'Probability, distributions and statistical analysis',
				trigonometry: 'Trigonometric functions, identities and equations',
				linearAlgebra: 'Matrices, vectors and linear transformations'
			}
		},
		courses: {
			title: 'Courses Offered',
			brief: 'What you\'ll learn',
			desc: 'Structured curricula designed for real understanding.',
			includesLabel: 'Course includes:',
			notesLabel: 'Important Notes:',
			weeks: 'weeks',
						studentsLabel: 'students',
			globalNotes: [
				'Courses do not guarantee specific outcomes, grades, or admission. Results depend on the student\'s starting level, effort, target goals, and the competitive environment.',
				'Success in mathematics requires a strong calculation routine and regular repetition. Lessons alone are not enough; independent practice outside of class is vital. Our coaching provides the tools, strategies, and understanding needed.',
				'Our promise: the student will gain a deeper understanding of previously challenging topics, learn to work more efficiently, and develop effective problem-solving strategies.',
				'Cancellation policy: Cancellations must be made at least 24 hours in advance. Late cancellations are not refunded. If the tutor cancels, a makeup lesson is provided.',
				'Where applicable, mock exams and practice tests are pre-tailored to best reflect actual exam conditions.'
			],
			c1: {
				title: 'Entrance Exam Coaching (Business & Engineering)',
				level: 'Entrance Exams',
				desc: [
					'Want to improve your chances of getting into a business or engineering program? This coaching focuses on one crucial area: mathematics.',
					'I offer personalized math tutoring tailored to the student\'s starting level, goals, and target program. The coaching focuses on deepening understanding, efficient time management, and building effective exam strategies.'
				],
				topics: [
					'Private math tutoring, entirely tailored to the student\'s needs',
					'4 customized mock exams simulating the actual test situation',
					'Personal coaching to develop thought models and problem-solving skills',
					'Tutor-based approach: the student and tutor plan together what topics to cover'
				],
				price: '<del class="text-muted-foreground mr-1.5 opacity-70">1990€</del><span class="text-accent font-bold">1490€</span> (includes 20h (+4h) session)'
			},
			c2: {
				title: 'General Mathematics Tutoring',
				level: 'All Levels',
				desc: [
					'Do you need help with math—strengthening the basics, passing courses, or improving grades? This tutoring provides individualized support for students at all levels, from middle school to university.',
					'Teaching is entirely tailored to your starting level, goals, and current topics. We focus on building understanding and logical thinking so you truly master math—not just survive the exercises.',
					'Ideal for: preparing for exams, supporting ongoing courses, breaking down difficult topics, or raising grades.'
				],
				topics: [
					'Private math tutoring adapted to the student\'s needs',
					'Personal guidance and feedback supporting continuous improvement',
					'Flexible pacing focusing on topics that pose the biggest challenges',
					'Tutor-based approach: the student and tutor plan the curriculum and pace together'
				],
				price: 'from 50€/h'
			},
			c3: {
				title: 'Matriculation Exam Coaching',
				level: 'High School',
				desc: [
					'Prepare efficiently and purposefully for the matriculation exam with personalized math coaching.',
					'This tutoring is aimed at both short and long math students who want to improve their skills, strengthen their understanding, and maximize their points in the graduation exams. Teaching is completely tailored to the student\'s starting level, goals, and schedule.',
					'We focus on the core skills required for the exam: understanding questions, calculating efficiently, and utilizing clear answering techniques that maximize points.'
				],
				topics: [
					'Private math tutoring tailored fully to your level and syllabus',
					'Customized practice exercises matching exam requirements',
					'Personal coaching to develop test strategies and time management',
					'Tutor-based approach: we collaboratively plan which topics to prioritize'
				],
				price: 'from 1490€ (includes 20h session)'
			},
			c4: {
				title: 'International Exam Prep (SAT & more)',
				level: 'Exam Prep',
				desc: [
					'Prepare effectively for international exams like the SAT with personalized math coaching.',
					'This tutoring is aimed at students who want to achieve high scores and stand out in college applications. Teaching is tailored to your starting level, goals, and schedule, focusing strictly on the mathematical skills and strategies required for the test.',
					'The coaching emphasizes speed, accuracy, and recognizing question types—skills that are critical in the SAT math section.'
				],
				topics: [
					'Private math tutoring directly targeted at SAT-style questions',
					'Customized practice materials and mock exams matching the real test',
					'Personal coaching to develop time management and efficient solving methods',
					'Tutor-based approach: collaboratively identifying focus areas to reach your target score'
				],
				price: 'from 1490€ (includes 20h session)'
			}
		},
		experience: {
			title: 'Achievements & Experience',
			brief: 'My journey',
			subtitle: 'A timeline of my growth as an educator and mathematician',
			types: { competition: 'Competition', academic: 'Academic', professional: 'Professional' },
			e1: {
				role: 'Honorable Mention',
				institution: 'International Mathematics Competition for University Students (IMC)',
				period: 'Recent',
				desc: 'Represented Aalto University at the prestigious International Mathematics Competition (IMC), competing against top university students globally and earning an Honorable Mention. My extensive background in national MAOL competitions and Math Olympiads gives me a unique ability to teach advanced problem-solving bridging school math and university hurdles.',
				highlights: ['Honorable Mention IMC', 'MAOL Competitions', 'Math Olympiads', 'Mental Math']
			},
			e2: {
				role: 'Engineering Physics and Mathematics Student',
				institution: 'Aalto University',
				period: 'Aug 2020 to Present',
				desc: 'Studying Engineering Physics and Mathematics. I work in the field of artificial intelligence and have served as a university Teaching Assistant, facilitating tutorials and guiding students through rigorous university calculus and linear algebra.',
				highlights: ['Engineering Physics', 'Mathematics', 'Teaching Assistant', 'AI Development']
			},
			e3: {
				role: 'Independent Mathematics Tutor',
				institution: 'Mathera',
				period: '10+ Years',
				desc: 'Over 10 years of experience providing private mathematics tuition. I have helped 50+ students achieve their goals—whether raising grades, passing university entrance exams, excelling in matriculation exams, or building foundational confidence.',
				highlights: ['10+ Years Experience', '50+ Students', 'Custom Curricula', 'Entrance Exams']
			}
		},
		registration: {
			title: 'Register',
			brief: 'Start your journey',
			desc: 'Book your first introductory meeting.',
			form: {
				name: 'Name',
				namePlaceholder: 'Your name',
				email: 'Email',
				emailPlaceholder: 'you@example.com',
				phone: 'Phone (optional)',
				phonePlaceholder: '+358 xx xxx xxxx',
				subject: 'Course',
				selectSubject: 'Select a course',
				subjects: [
					'Entrance Exam Coaching (Business & Engineering)',
					'General Mathematics Tutoring',
					'Matriculation Exam Coaching',
					'International Exam Prep (SAT & more)',
					'Other'
				],
				level: 'Your Level',
				selectLevel: 'Select your level',
				levels: ['Elementary School (Grade 1–6)', 'Middle School (Grade 7–9)', 'High School (Grade 10–12)', 'Pre-University / A-Level / IB', 'University / College', 'Adult Learner'],
				schedule: 'Preferred Schedule',
				selectTime: 'Select a time',
				schedules: ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–9pm)', 'Flexible'],
				message: 'Message (Optional)',
				messagePlaceholder: 'What would you like to achieve? Any specific struggles or upcoming exams?',
				required: 'Required fields',
				submit: 'Send',
				errorRequired: 'Please fill in all required fields.',
				successMessage: '🎉 Registration received! Mathera will reach out within 24 hours.',
				whatsappNotice: 'Please note: All direct contact and scheduling will be handled securely via company WhatsApp.'
			}
		},
		stats: {
			students: 'Students Taught',
			experience: 'Years Experience',
			passRate: 'Pass Rate',
			subjects: 'Subjects Covered'
		},
		footer: {
			tagline: 'Making mathematics meaningful, one student at a time',
			builtWith: 'Built with',
			forLearners: 'for math learners everywhere',
			backToTop: 'Back to top',
			enrollNow: 'Enroll Now',
			topicsCovered: 'Topics Covered',
			mathFacts: [
				'∑ The word "mathematics" comes from the Greek "máthēma" meaning learning.',
				'π Pi contains every possible sequence of numbers.',
				'∞ There are more types of infinity than one.',
				'√ The square root symbol is called a "radical".'
			],
			motto: '∑ Master Mathematics with Mathera'
		},
		seo: {
			title: 'Mathera - Expert Mathematics Tutoring',
			description: 'Expert mathematics tutoring by Mathera. Algebra, Calculus, Geometry, Statistics and more. Personalized lessons for every level.',
			ogTitle: 'Mathera - Expert Mathematics Tutoring',
			ogDescription: 'Expert mathematics tutoring. Personalized lessons, proven results. From foundation algebra to advanced calculus.'
		}
	},
	fi: {
		nav: {
			about: 'Tietoa',
			expertise: 'Osaaminen',
			experiences: 'Kokemus',
			courses: 'Kurssit',
			contact: 'Ota yhteyttä'
		},
		hero: {
			title: 'Polkusi kohti',
			words: [
				'Matematiikan mestaruutta.',
				'Erinomaista koemenestystä.',
				'Akateemista huippuosaamista.',
				'Aitoa ymmärrystä.'
			],
			subtitle: [
				'Tarjoamme yksilöllistä matematiikan opetusta yläkoululaisille, lukiolaisille ja pääsykokeisiin valmistautuville. Autamme sinua ymmärtämään asiat kunnolla, nostamaan arvosanojasi ja onnistumaan kokeissa.',
				'Opetus räätälöidään aina sinun tasosi ja tavoitteidesi mukaan – oli kyse perusasioiden vahvistamisesta, vaikeiden aiheiden avaamisesta tai tavoitteellisesta valmistautumisesta kokeisiin.'
			],
			cta: 'Aloita oppiminen tänään',
			cta_short: 'Ilmoittaudu nyt',
			scroll: 'Selaa tutkiaksesi',
			accepting: 'Nyt otetaan uusia opiskelijoita',
			welcome: 'Tervetuloa Matheraan'
		},
		about: {
			title: 'Tietoa minusta',
			brief: 'Tutustu tuutoriisi',
			general: {
				title: 'Yleisesti',
				greeting: 'Heippa,',
				paragraphs: [
					'olen Aman ja tulen olemaan tuutorisi. Minulla on yli 10 vuoden kokemus tutoroinnista, ja olen auttanut yli 50 oppilasta saavuttamaan omat tavoitteensa. Oli kyse arvosanojen korottamisesta, vaikeiden asioiden ymmärtämisestä, pääsykokeisiin valmistautumisesta tai ylioppilaskirjoituksista, rakennamme yhdessä sinulle toimivan suunnitelman.',
					'Tavoitteeni on yksinkertainen: auttaa sinua onnistumaan ja saavuttamaan se, mitä itse pidät tärkeänä.'
				]
			},
			education: {
				title: 'Koulutus ja tausta',
				paragraphs: [
					'Olen valmistunut lukiosta tiedelinjalta ja suorittanut tutkintoni Aalto-yliopistossa teknillisestä matematiikasta. Tällä hetkellä työskentelen tekoälyn parissa.',
					'Olen toiminut lähes viiden vuoden ajan yliopistolla kurssiassistenttina yli kymmenellä eri kurssilla. Tässä roolissa olen opettanut, ohjannut harjoituksia ja auttanut opiskelijoita ymmärtämään vaikeita aiheita selkeästi. Olen saanut opetuksestani runsaasti positiivista palautetta, erityisesti selkeydestä, kärsivällisyydestä ja tavastani selittää asiat ymmärrettävästi.',
					'Matematiikka ei ole minulle pelkästään oppiaine tai työ, vaan myös pitkäaikainen harrastus ja intohimo. Tutorointi on kulkenut mukana elämässäni jatkuvasti opintojen ja työelämän rinnalla.'
				]
			},
			experience: {
				title: 'Kilpailukokemus',
				intro: 'Olen osallistunut matematiikan ja luonnontieteiden kilpailuihin jo ala-asteelta lähtien. Kokemusta on muun muassa:',
				bullets: ['Päässälaskukilpailuista', 'MAOL-kilpailuista', 'Matematiikkaolympialaisten valmennuksesta', 'Matematiikkaleireistä', '<a href="https://www.aalto.fi/fi/uutiset/aallon-opiskelijoille-mitaleita-kansainvalisessa-matematiikkakilpailussa-0" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accent hover:underline font-medium ml-1 transition-colors">IMC:stä (International Mathematics Competition)  ↗</a>'],
				outro: 'Olen saavuttanut kilpailuissa useita hyviä sijoituksia, kunniamainintoja ja mitaleja. Tämä tausta on antanut minulle vahvan ymmärryksen matematiikasta sekä siitä, miten sitä opitaan tehokkaasti.'
			},
			footer: 'Jos haluat selkeyttä matematiikkaan, varmuutta kokeisiin tai nostaa arvosanojasi, autan sinua mielelläni. Tehdään yhdessä tavoitteistasi totta.',
			badges: {
				structured: 'Rakenteellinen opetus',
				conceptFirst: 'Käsite ensin -lähestymistapa',
				examReady: 'Kokeisiin valmistavat menetelmät',
				patient: 'Kärsivällinen ja tukeva',
				adaptive: 'Mukautuvat menetelmät'
			}
		},
		skills: {
			title: 'Osaamisalueet',
			brief: 'Mitä opetan',
			topics: ['Algebra', 'Geometria', 'Kalkyyli', 'Tilastotiede', 'Trigonometria'],
			linearAlgebra: 'Lineaarialgebra',
			proficiency: 'Osaamistaso',
			alsoComfortable: 'Myös mukava opettaa: Diskreetti matematiikka, Lukuteoria, Matemaattinen logiikka, Ylioppilaskirjoitusten matematiikka',
			levels: { expert: 'Asiantuntija', advanced: 'Edistynyt', intermediate: 'Keskitaso' },
			descs: {
				algebra: 'Lineaarinen, kvadraattinen, polynomi- ja abstrakti algebra',
				calculus: 'Differentiaali-, integraali- ja monimuuttujuuskalkyyli',
				geometry: 'Euklidinen, koordinaatti- ja analyyttinen geometria',
				statistics: 'Todennäköisyys, jakaumat ja tilastollinen analyysi',
				trigonometry: 'Trigonometriset funktiot, identiteetit ja yhtälöt',
				linearAlgebra: 'Matriisit, vektorit ja lineaariset muunnokset'
			}
		},
		courses: {
			title: 'Kurssitarjonta',
			brief: 'Mitä tulet oppimaan',
			desc: 'Strukturoidut opetussuunnitelmat aitoa ymmärrystä varten.',
			includesLabel: 'Kurssi sisältää:',
			notesLabel: 'Tärkeää tietoa ja ehdot:',
			weeks: 'viikkoa',
						studentsLabel: 'opiskelijaa',
			globalNotes: [
				'Kurssit ja valmennus eivät takaa tiettyjä arvosanoja, tuloksia tai sisäänpääsyä. Lopputulos riippuu työpanoksesta, lähtötasosta, tavoitteista ja kilpailutilanteesta.',
				'Matematiikassa menestyminen vaatii säännöllistä ja aktiivista itsenäistä harjoittelua tuntien ulkopuolella. Opetus tarjoaa ohjausta, välineet ja tehokkaat oppimismenetelmät.',
				'Lupaus: oppilas ymmärtää haastavat aiheet aiempaa paremmin, nopeuttaa tehtävien ratkaisua ja kehittää varman ja strategisen lähestymistavan.',
				'Peruutusehdot: Tunti on peruutettava viimeistään 24 tuntia etukäteen. Myöhässä peruttuja tunteja ei hyvitetä. Mikäli tutor peruuttaa tunnin, järjestetään korvaava tunti ilmaiseksi.',
				'Soveltuvin osin harjoituskokeet ja simulaatiot räätälöidään etukäteen vastaamaan mahdollisimman hyvin todellisia kokeita.'
			],
			c1: {
				title: 'Matematiikkavalmennus kauppiksen ja tekniikan pääsykokeisiin',
				level: 'Pääsykokeet',
				desc: [
					'Haluatko parantaa mahdollisuuksiasi päästä kauppakorkeaan tai tekniikan alalle? Tämä valmennus keskittyy yhteen ratkaisevaan osa-alueeseen: matematiikkaan.',
					'Tarjoan yksilöllistä matematiikan opetusta, joka räätälöidään oppilaan lähtötason, tavoitteiden ja hakukohteen mukaan. Valmennus keskittyy ymmärryksen syventämiseen, tehokkaaseen ajankäyttöön sekä toimivien koestrategioiden rakentamiseen.'
				],
				topics: [
					'Yksityisopetusta matematiikassa, täysin oppilaan tarpeiden mukaan',
					'4 räätälöityä harjoituskoetta, jotka simuloivat todellista koetilannetta',
					'Henkilökohtaista valmennusta, jossa kehitetään ajattelumalleja ja ongelmanratkaisua',
					'Tutor-perusteinen ohjaus: oppilas ja tutor suunnittelevat yhdessä sisällön'
				],
				price: '<del class="text-muted-foreground mr-1.5 opacity-70">1990€</del><span class="text-accent font-bold">1490€</span> (sis. 20h (+4h) opetusta)'
			},
			c2: {
				title: 'Matematiikan tutorointi (peruskoulusta korkeakoulutasolle)',
				level: 'Kaikki tasot',
				desc: [
					'Tarvitsetko apua matematiikassa – perusteiden vahvistamiseen, kurssien läpäisyyn tai arvosanojen parantamiseen? Tämä tutorointi tarjoaa yksilöllistä tukea kaikentasoisille opiskelijoille peruskoulusta aina korkeakouluun asti.',
					'Opetus räätälöidään täysin oppilaan lähtötason, tavoitteiden ja opiskeltavien aiheiden mukaan. Keskitymme ymmärryksen rakentamiseen, loogiseen ajatteluun sekä siihen, että opit oikeasti hallitsemaan matematiikan – et vain selviämään tehtävistä.',
					'Tutorointi sopii: kokeisiin valmistautumiseen, kurssien tukemiseen, vaikeiden aiheiden avaamiseen tai arvosanojen nostamiseen.'
				],
				topics: [
					'Yksityisopetusta matematiikassa oppilaan tarpeiden mukaan',
					'Henkilökohtaista ohjausta ja palautetta, joka tukee jatkuvaa kehittymistä',
					'Joustavaa etenemistä, keskittyen haastavimpiin aiheisiin',
					'Tutor-perusteinen lähestymistapa: opiskelusuunnitelma tehdään yhdessä'
				],
				price: 'alkaen 50€/h'
			},
			c3: {
				title: 'Matematiikkavalmennus ylioppilaskokeeseen (lyhyt ja pitkä)',
				level: 'Lukio / Yo',
				desc: [
					'Valmistaudu ylioppilaskokeeseen tehokkaasti ja tavoitteellisesti henkilökohtaisessa matematiikan valmennuksessa.',
					'Tämä tutorointi on suunnattu lyhyen ja pitkän matematiikan opiskelijoille, jotka haluavat maksimoida pisteensä yo-kokeessa. Opetus räätälöidään lähtötason, tavoitteiden ja aikataulun mukaan.',
					'Keskitymme keskeisiin yo-kokeessa vaadittaviin taitoihin: tehtävien ymmärtämiseen, tehokkaaseen laskemiseen ja pisteitä maksimoivaan vastaustekniikkaan.'
				],
				topics: [
					'Yksityisopetusta täysin oppilaan tason ja oppimäärän mukaan',
					'Räätälöityä harjoittelua ja tehtäviä yo-kokeen vaatimuksien pohjalta',
					'Henkilökohtaista valmennusta koestrategian ja ajankäytön kehittämiseksi',
					'Yhteisesti luotu painotussuunnitelma tutorin kanssa'
				],
				price: 'alkaen 1490€ (sis. 20h opetusta)'
			},
			c4: {
				title: 'Matematiikkavalmennus kansainvälisiin kokeisiin (SAT ym.)',
				level: 'Koevalmennus',
				desc: [
					'Valmistaudu kansainvälisiin kokeisiin, kuten SAT:iin, tehokkaasti henkilökohtaisessa matematiikan valmennuksessa.',
					'Tämä tutorointi on suunnattu opiskelijoille, jotka haluavat saavuttaa korkean pistemäärän ja erottua hakuprosessissa. Opetus räätälöidään tavoitteiden mukaan.',
					'Valmennuksessa painotetaan nopeutta, tarkkuutta ja tehtävätyyppien tunnistamista – taitoja, jotka ovat keskeisiä SAT-matematiikkaosiossa.'
				],
				topics: [
					'Yksityisopetusta kohdennettuna SAT-tyyppisiin tehtäviin',
					'Koesimulaatioita ja harjoitustehtäviä, jotka vastaavat oikeaa koetta',
					'Henkilökohtaista valmennusta ajankäytön ja ratkaisutapojen hiomiseen',
					'Tavoitepistemäärän mukainen yksilöllinen painotussuunnitelma'
				],
				price: 'alkaen 1490€ (sis. 20h opetusta)'
			}
		},
		experience: {
			title: 'Saavutukset ja Kokemus',
			brief: 'Taustani',
			subtitle: 'Aikajana matkastani matematiikassa ja opetuksessa',
			types: { competition: 'Kilpailu', academic: 'Akateeminen', professional: 'Ammatillinen' },
			e1: {
				role: 'Kunniamaininta',
				institution: 'International Mathematics Competition for University Students (IMC)',
				period: 'Viimeaikainen',
				desc: 'Edustin Aalto-yliopistoa kansainvälisessä yliopisto-opiskelijoiden matematiikkakilpailussa (IMC) ja saavutin kunniamaininnan. Laaja taustani MAOL-kilpailuista ja matematiikkaolympialaisista antaa minulle ainutlaatuisen kyvyn opettaa vaativaa ongelmanratkaisua.',
				highlights: ['Kunniamaininta IMC', 'MAOL-kilpailut', 'Matematiikkaolympialaiset', 'Päässälasku']
			},
			e2: {
				role: 'Teknillisen fysiikan ja matematiikan opiskelija',
				institution: 'Aalto-yliopisto',
				period: 'Elokuu 2020 – nyt',
				desc: 'Opiskelen teknillistä fysiikkaa ja matematiikkaa. Työskentelen tekoälyn parissa ja olen toiminut yliopistolla opetusassistenttina, ohjaten opiskelijoita vaativilla yliopistotason kalkyylin ja lineaarialgebran kursseilla.',
				highlights: ['Teknillinen fysiikka', 'Matematiikka', 'Opetusassistentti', 'Tekoäly']
			},
			e3: {
				role: 'Itsenäinen Matematiikan Tuutori',
				institution: 'Mathera',
				period: 'Yli 10 vuotta',
				desc: 'Yli 10 vuoden kokemus matematiikan yksityisopetuksesta. Olen auttanut yli 50 opiskelijaa saavuttamaan omat tavoitteensa – oli kyse sitten arvosanojen nostamisesta, pääsykokeista, ylioppilaskirjoituksista tai perusteiden vahvistamisesta.',
				highlights: ['10+ vuoden kokemus', '50+ opiskelijaa', 'Räätälöity opetus', 'Pääsykokeet']
			}
		},
		registration: {
			title: 'Ilmoittaudu',
			brief: 'Aloita matkasi',
			desc: 'Varaa ensimmäinen tutustumistapaamisesi.',
			form: {
				name: 'Nimi',
				namePlaceholder: 'Sinun nimesi',
				email: 'Sähköposti',
				emailPlaceholder: 'sinä@esimerkki.fi',
				phone: 'Puhelin (valinnainen)',
				phonePlaceholder: '+358 xx xxx xxxx',
				subject: 'Kurssi',
				selectSubject: 'Valitse kurssi',
				subjects: [
					'Pääsykoevalmennus (Kauppis & Tekniikka)',
					'Yleinen matematiikan opetus',
					'Ylioppilaskoevalmennus',
					'Kansainvälinen koevalmennus (SAT ym.)',
					'Muu'
				],
				level: 'Tasosi',
				selectLevel: 'Valitse tasosi',
				levels: ['Alakoulu (luokat 1–6)', 'Yläkoulu (luokat 7–9)', 'Lukio (luokat 10–12)', 'Ylioppilas / A-Level / IB', 'Yliopisto / Korkeakoulu', 'Aikuisoppija'],
				schedule: 'Toivottu aikataulu',
				selectTime: 'Valitse ajankohta',
				schedules: ['Aamu (8–12)', 'Iltapäivä (12–17)', 'Ilta (17–21)', 'Joustava'],
				message: 'Viesti (Valinnainen)',
				messagePlaceholder: 'Mitä haluaisit saavuttaa? Onko erityisiä haasteita tai tulevia kokeita?',
				required: 'Pakolliset kentät',
				submit: 'Lähetä',
				errorRequired: 'Täytä kaikki pakolliset kentät.',
				successMessage: '🎉 Ilmoittautuminen vastaanotettu! Mathera ottaa yhteyttä 24 tunnin kuluessa.',
				whatsappNotice: 'Huomaa: Kaikki yhteydenpito ja aikataulutus hoidetaan turvallisesti yrityksen WhatsApp-tilin kautta.'
			}
		},
		stats: {
			students: 'Opiskelijaa opetettu',
			experience: 'Vuotta kokemusta',
			passRate: 'Läpäisyprosentti',
			subjects: 'Opetettavaa ainetta'
		},
		footer: {
			tagline: 'Tehdään matematiikasta merkityksellistä, yksi opiskelija kerrallaan',
			builtWith: 'Rakennettu',
			forLearners: 'matematiikan oppijoille kaikkialla',
			backToTop: 'Takaisin ylös',
			enrollNow: 'Ilmoittaudu nyt',
			topicsCovered: 'Käsiteltävät aiheet',
			mathFacts: [
				'∑ Sana "matematiikka" tulee kreikan sanasta "máthēma", joka tarkoittaa oppimista.',
				'π Pii sisältää jokaisen mahdollisen numerosarjan.',
				'∞ Ääretön on olemassa useammassa muodossa kuin yhden.',
				'√ Neliöjuurimärkkiä kutsutaan "radikaaliksi".'
			],
			motto: '∑ Hallitse matematiikka Matheran kanssa'
		},
		seo: {
			title: 'Mathera - Asiantuntevaa Matematiikan Opetusta',
			description: 'Matheran asiantuntevaa matematiikan opetusta. Algebraa, Kalkyylia, Geometriaa, Tilastotiedettä ja paljon muuta. Yksilölliset oppitunnit jokaiselle tasolle.',
			ogTitle: 'Mathera - Asiantuntevaa Matematiikan Opetusta',
			ogDescription: 'Asiantuntevaa matematiikan opetusta. Yksilölliset oppitunnit, todistetut tulokset. Algebran perusteista edistyneeseen kalkyyliin.'
		}
	}
};
