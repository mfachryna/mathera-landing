import fs from 'fs';
let content = fs.readFileSync('src/lib/translations.ts', 'utf8');

const enCourses = `			c1: {
				title: 'Entrance Exam Coaching (Business & Engineering)',
				level: 'Entrance Exams',
				desc: [
					'Want to improve your chances of getting into a business or engineering program? This coaching focuses on one crucial area: mathematics.',
					'I offer personalized math tutoring tailored to the student\\'s starting level, goals, and target program. The coaching focuses on deepening understanding, efficient time management, and building effective exam strategies.'
				],
				includes: [
					'Private math tutoring, entirely tailoring to the student\\'s needs',
					'4 customized mock exams simulating the actual test situation',
					'Personal coaching to develop thought models and problem-solving skills',
					'Tutor-based approach: the student and tutor plan together what topics to cover'
				],
				importantNotes: [
					'The course does not guarantee admission. Outcomes depend on the student\\'s starting level, effort, target program, and competition.',
					'Entrance exams require a strong calculation routine, which cannot be achieved through lessons alone. Significant independent practice is required outside of class. The course provides guidance, support, and methods to tackle demanding topics.',
					'Our promise: the student will understand previously challenging math areas, learn to manage time effectively, and develop a strategic approach to maximize their chances.',
					'Cancellation policy: Cancellations must be made at least 24 hours in advance. Late cancellations are not refunded. If the tutor cancels, a makeup lesson is arranged at no extra cost.',
					'Mock exams are pre-tailored to best reflect actual exam conditions.'
				],
				price: ''
			},
			c2: {
				title: 'General Mathematics Tutoring',
				level: 'All Levels',
				desc: [
					'Do you need help with math—strengthening the basics, passing courses, or improving grades? This tutoring provides individualized support for students at all levels, from middle school to university.',
					'Teaching is entirely tailored to your starting level, goals, and current topics. We focus on building understanding and logical thinking so you truly master math—not just survive the exercises.',
					'Ideal for: preparing for exams, supporting ongoing courses, breaking down difficult topics, or raising grades.'
				],
				includes: [
					'Private math tutoring adapted to the student\\'s needs',
					'Personal guidance and feedback supporting continuous improvement',
					'Flexible pacing focusing on topics that pose the biggest challenges',
					'Tutor-based approach: the student and tutor plan the curriculum and pace together'
				],
				importantNotes: [
					'Tutoring does not guarantee specific grades. Progress depends on your starting level, goals, and personal effort.',
					'Improving in math requires regular practice. Lessons alone are not enough; independent work outside of class is necessary. Tutoring provides clear tools, understanding, and direction for learning.',
					'Our promise: the student will understand topics they previously found difficult, develop logical thinking and problem-solving skills, and learn to work more efficiently and confidently.',
					'Cancellation policy: Cancellations must be made at least 24 hours in advance. Late cancellations are not refunded. If the tutor cancels, a makeup lesson is provided for free.'
				],
				price: ''
			},
			c3: {
				title: 'Matriculation Exam Coaching',
				level: 'High School',
				desc: [
					'Prepare efficiently and purposefully for the matriculation exam with personalized math coaching.',
					'This tutoring is aimed at both short and long math students who want to improve their skills, strengthen their understanding, and maximize their points in the graduation exams. Teaching is completely tailored to the student\\'s starting level, goals, and schedule.',
					'We focus on the core skills required for the exam: understanding questions, calculating efficiently, and utilizing clear answering techniques that maximize points.'
				],
				includes: [
					'Private math tutoring tailored fully to your level and syllabus',
					'Customized practice exercises matching exam requirements',
					'Personal coaching to develop test strategies and time management',
					'Tutor-based approach: we collaboratively plan which topics to prioritize'
				],
				importantNotes: [
					'Coaching does not guarantee a specific grade. The final result depends on your starting level, effort, goals, and exam performance.',
					'Success in the exam requires a strong calculation routine and independent practice. The course offers guidance, clarity for difficult topics, and efficient problem-solving methods.',
					'Our promise: the student will understand key mathematical topics better, learn how to answer clearly to maximize points, and develop confidence and time management skills for the exam situation.',
					'Cancellation policy: Cancellations must be made at least 24 hours in advance. Late cancellations are not refunded. If the tutor cancels, a makeup lesson is provided.'
				],
				price: ''
			},
			c4: {
				title: 'International Exam Prep (SAT & more)',
				level: 'Exam Prep',
				desc: [
					'Prepare effectively for international exams like the SAT with personalized math coaching.',
					'This tutoring is aimed at students who want to achieve high scores and stand out in college applications. Teaching is tailored to your starting level, goals, and schedule, focusing strictly on the mathematical skills and strategies required for the test.',
					'The coaching emphasizes speed, accuracy, and recognizing question types—skills that are critical in the SAT math section.'
				],
				includes: [
					'Private math tutoring directly targeted at SAT-style questions',
					'Customized practice materials and mock exams matching the real test',
					'Personal coaching to develop time management and efficient solving methods',
					'Tutor-based approach: collaboratively identifying focus areas to reach your target score'
				],
				importantNotes: [
					'Coaching does not guarantee a specific score. Results depend on various factors, including starting level, effort, goals, and the competitive environment.',
					'Succeeding in SAT math requires calculation routines and repetition. Independent practice outside of class is vital. The course provides the tools, strategies, and understanding needed.',
					'Our promise: the student will gain a deeper understanding of key topics and question types, learn to solve problems faster and with fewer errors, and develop an effective exam strategy to maximize their score.',
					'Cancellation policy: Cancellations must be made at least 24 hours in advance. Late cancellations are not refunded. If the tutor cancels, a makeup lesson is provided.'
				],
				price: ''
			}`;

const fiCourses = `			c1: {
				title: 'Matematiikkavalmennus kauppiksen ja tekniikan pääsykokeisiin',
				level: 'Pääsykokeet',
				desc: [
					'Haluatko parantaa mahdollisuuksiasi päästä kauppakorkeaan tai tekniikan alalle? Tämä valmennus keskittyy yhteen ratkaisevaan osa-alueeseen: matematiikkaan.',
					'Tarjoan yksilöllistä matematiikan opetusta, joka räätälöidään oppilaan lähtötason, tavoitteiden ja hakukohteen mukaan. Valmennus keskittyy ymmärryksen syventämiseen, tehokkaaseen ajankäyttöön sekä toimivien koestrategioiden rakentamiseen.'
				],
				includes: [
					'Yksityisopetusta matematiikassa, täysin oppilaan tarpeiden mukaan',
					'4 räätälöityä harjoituskoetta, jotka simuloivat todellista koetilannetta',
					'Henkilökohtaista valmennusta, jossa kehitetään ajattelumalleja ja ongelmanratkaisua',
					'Tutor-perusteinen ohjaus: oppilas ja tutor suunnittelevat yhdessä sisällön'
				],
				importantNotes: [
					'Kurssi ei takaa sisäänpääsyä. Lopputulos riippuu useista tekijöistä, kuten oppilaan lähtötasosta, työpanoksesta, hakukohteesta ja kilpailutilanteesta.',
					'Pääsykokeissa vaaditaan vahvaa laskurutiinia. Oppilaan tulee tehdä merkittävä määrä itsenäistä harjoittelua tuntien ulkopuolella. Kurssi tarjoaa ohjausta, tukea ja keinoja ymmärtää vaativia aiheita.',
					'Kurssi lupaa, että oppilas: ymmärtää haastavia aiheita, oppii käyttämään aikaansa tehokkaammin kokeessa, ja kehittää strategista lähestymistapaa.',
					'Peruutusehdot: Tunti on peruutettava 24h etukäteen. Myöhässä peruttuja ei hyvitetä. Tutorin peruessa järjestetään korvaava tunti.',
					'Harjoituskokeet ovat ennalta räätälöityjä todellisen koetilanteen mukaan.'
				],
				price: ''
			},
			c2: {
				title: 'Matematiikan tutorointi (peruskoulusta korkeakoulutasolle)',
				level: 'Kaikki tasot',
				desc: [
					'Tarvitsetko apua matematiikassa – perusteiden vahvistamiseen, kurssien läpäisyyn tai arvosanojen parantamiseen? Tämä tutorointi tarjoaa yksilöllistä tukea kaikentasoisille opiskelijoille peruskoulusta aina korkeakouluun asti.',
					'Opetus räätälöidään täysin oppilaan lähtötason, tavoitteiden ja opiskeltavien aiheiden mukaan. Keskitymme ymmärryksen rakentamiseen, loogiseen ajatteluun sekä siihen, että opit oikeasti hallitsemaan matematiikan – et vain selviämään tehtävistä.',
					'Tutorointi sopii: kokeisiin valmistautumiseen, kurssien tukemiseen, vaikeiden aiheiden avaamiseen tai arvosanojen nostamiseen.'
				],
				includes: [
					'Yksityisopetusta matematiikassa oppilaan tarpeiden mukaan',
					'Henkilökohtaista ohjausta ja palautetta, joka tukee jatkuvaa kehittymistä',
					'Joustavaa etenemistä, keskittyen haastavimpiin aiheisiin',
					'Tutor-perusteinen lähestymistapa: opiskelusuunnitelma tehdään yhdessä'
				],
				importantNotes: [
					'Tutorointi ei takaa tiettyjä arvosanoja. Kehitys riippuu oppilaan lähtötasosta, tavoitteista ja omasta työpanoksesta.',
					'Kehittyminen vaatii säännöllistä itsenäistä harjoittelua tuntien ulkopuolella. Tutorointi tarjoaa selkeät työkalut, ymmärryksen ja suunnan oppimiselle.',
					'Kurssi lupaa, että oppilas: ymmärtää vaikeiksi koettuja aiheita, kehittää ongelmanratkaisutaitoja ja oppii työskentelemään tehokkaammin.',
					'Peruutusehdot: Peruutus 24h ennen sovittua aikaa. Myöhästyneitä peruutuksia ei hyvitetä. Tutorin peruutukset hyvitetään korvaavalla tunnilla.'
				],
				price: ''
			},
			c3: {
				title: 'Matematiikkavalmennus ylioppilaskokeeseen (lyhyt ja pitkä)',
				level: 'Lukio / Yo',
				desc: [
					'Valmistaudu ylioppilaskokeeseen tehokkaasti ja tavoitteellisesti henkilökohtaisessa matematiikan valmennuksessa.',
					'Tämä tutorointi on suunnattu lyhyen ja pitkän matematiikan opiskelijoille, jotka haluavat maksimoida pisteensä yo-kokeessa. Opetus räätälöidään lähtötason, tavoitteiden ja aikataulun mukaan.',
					'Keskitymme keskeisiin yo-kokeessa vaadittaviin taitoihin: tehtävien ymmärtämiseen, tehokkaaseen laskemiseen ja pisteitä maksimoivaan vastaustekniikkaan.'
				],
				includes: [
					'Yksityisopetusta täysin oppilaan tason ja oppimäärän mukaan',
					'Räätälöityä harjoittelua ja tehtäviä yo-kokeen vaatimuksien pohjalta',
					'Henkilökohtaista valmennusta koestrategian ja ajankäytön kehittämiseksi',
					'Yhteisesti luotu painotussuunnitelma tutorin kanssa'
				],
				importantNotes: [
					'Valmennus ei takaa tiettyä arvosanaa. Lopputulos riippuu työpanoksesta, tavoitteista ja koesuorituksesta.',
					'Yo-kokeessa menestyminen vaatii vahvaa laskurutiinia ja itsenäistä harjoittelua. Kurssi tarjoaa ohjausta vaikeisiin aiheisiin ja tehokkaat lähestymistavat.',
					'Kurssi lupaa, että oppilas ymmärtää aiheet paremmin, oppii vastaamaan pisteitä maksimoivasti ja kehittää varmuutta koetilanteeseen.',
					'Peruutusehdot: 24h etukäteen. Myöhässä peruttuja ei hyvitetä.'
				],
				price: ''
			},
			c4: {
				title: 'Matematiikkavalmennus kansainvälisiin kokeisiin (SAT ym.)',
				level: 'Koevalmennus',
				desc: [
					'Valmistaudu kansainvälisiin kokeisiin, kuten SAT:iin, tehokkaasti henkilökohtaisessa matematiikan valmennuksessa.',
					'Tämä tutorointi on suunnattu opiskelijoille, jotka haluavat saavuttaa korkean pistemäärän ja erottua hakuprosessissa. Opetus räätälöidään tavoitteiden mukaan.',
					'Valmennuksessa painotetaan nopeutta, tarkkuutta ja tehtävätyyppien tunnistamista – taitoja, jotka ovat keskeisiä SAT-matematiikkaosiossa.'
				],
				includes: [
					'Yksityisopetusta kohdennettuna SAT-tyyppisiin tehtäviin',
					'Koesimulaatioita ja harjoitustehtäviä, jotka vastaavat oikeaa koetta',
					'Henkilökohtaista valmennusta ajankäytön ja ratkaisutapojen hiomiseen',
					'Tavoitepistemäärän mukainen yksilöllinen painotussuunnitelma'
				],
				importantNotes: [
					'Valmennus ei takaa tiettyä pistemäärää. Tulokset riippuvat lähtötasosta, kilpailutilanteesta ja työpanoksesta.',
					'SAT-matematiikka vaatii vahvaa rutiinia ja toistoa myös itsenäisesti. Kurssi antaa tehokkaat työkalut ja strategiat.',
					'Kurssi lupaa, että oppilas oppii ratkaisemaan tehtäviä nopeammin/virheettömämmin ja kehittää tehokkaan koestrategian.',
					'Peruutusehdot: 24h etukäteen.'
				],
				price: ''
			}`;

// EN repl
content = content.replace(/c1: \{\s*title: 'Entrance Exam Coaching[\s\S]*?c4: \{\s*title: 'International Exam Prep[\s\S]*?price: '[^']*'\s*\}/m, enCourses);

// FI repl
content = content.replace(/c1: \{\s*title: 'Matematiikkavalmennus kauppiksen[\s\S]*?c4: \{\s*title: 'Matematiikkavalmennus kansainvälisiin[\s\S]*?price: '[^']*'\s*\}/m, fiCourses);

// ADD Translations for the UI headers
content = content.replace(/desc: 'Structured curricula designed for real understanding.',/, "desc: 'Structured curricula designed for real understanding.',\n\t\t\tincludesLabel: 'Course includes:',\n\t\t\tnotesLabel: 'Important Notes:',");
content = content.replace(/desc: 'Strukturoidut opetussuunnitelmat aitoa ymmärrystä varten.',/, "desc: 'Strukturoidut opetussuunnitelmat aitoa ymmärrystä varten.',\n\t\t\tincludesLabel: 'Kurssi sisältää:',\n\t\t\tnotesLabel: 'Tärkeää tietoa ja ehdot:',");

fs.writeFileSync('src/lib/translations.ts', content, 'utf8');
