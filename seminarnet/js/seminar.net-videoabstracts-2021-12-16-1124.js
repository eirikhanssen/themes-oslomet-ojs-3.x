(function() {


var debug = false;
function Videoabstracts () {


    if(debug) {
        console.log('seminar-video-abstracts running ...');
    }

    this.data=[
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4493,
            filmet_id: 70373317,
            title: "Digital Capitalism, Datafication, and Media Education: Critical Perspectives"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4224,
            filmet_id: 69731132,
            title: "Digital Capitalism and Critical Media Education"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4268,
            filmet_id: 69731269,
            title: "Refocusing Zuboff's 'division of learning' on Education"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4280,
            filmet_id: 69731324,
            title: "Critical is not political: The need to (re)politicize data literacy"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4291,
            filmet_id: 69731500,
            title: "A feminist Critique to digital consent"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4232,
            filmet_id: 69731369,
            title: "Towards a Closer Look at the Pipes and Joints of Educational Data Infrastructures: A Technogenetic Analysis of the Experience API"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4397,
            filmet_id: 70632849,
            title: "Critical Data Studies and Data Science in Higher Education An interdisciplinary and explorative approach towards a critical data literacy"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4281,
            filmet_id: 69731514,
            title: "Artificial Intelligence in Education Big Data, Black Boxes, and Technological Solutionism"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4254,
            filmet_id: 69731339,
            title: "Global Education Industry - Exploring the state of affairs in Austria"
        },
        {
            journal: "seminar",
            year: 2021,
            vol: 17,
            issue: 2,
            article_id: 4303,
            filmet_id: 69731207,
            title: "Technology giants, educational policy and a preliminary mapping of networks and channels of influence in a Norwegian context"
        },
	{
	    journal: "seminar",
	    year: 2021,
	    vol: 17,
	    issue: 1,
	    article_id: 3828,
	    filmet_id: 67955426,
	    title: "Perceived adequate education in ethics: A way to tap into ethical Social Networking Sites awareness?",
	},
	{
	    journal: "seminar",
	    year: 2021,
	    vol: 17,
	    issue: 1,
	    article_id: 3582,
	    filmet_id: 67897650,
	    title: "The use of digital technologies in a 1:1 laptop initiative: The parent perspective",
	},
	{
	    journal: "seminar",
	    year: 2021,
	    vol: 17,
	    issue: 1,
	    article_id: 3599,
	    filmet_id: 67955437,
	    title: "Collaborative Online Learning Using a Blended Learning Design for a Physiology Course in Nursing Education",
	},
	{
	    journal: "seminar",
	    year: 2021,
	    vol: 17,
	    issue: 1,
	    article_id: 3199,
	    filmet_id: 67897634,
	    title: "Identifying the contradictions in the technology enhanced language classroom",
	},
	{
	    journal: "seminar",
	    year: 2021,
	    vol: 17,
	    issue: 1,
	    article_id: 3761,
	    filmet_id: 67897697,
	    title: "The impact of emotions on learning and motivation in producing and presenting digital stories",
	},
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 4043,
            filmet_id: "",
            title: "Special issue: 30 years of ICT and learning in education - major changes and challenges"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 4046,
            filmet_id: 65481665,
	        title: "Education, Change and the Longue Dureé: The Fate of the Book"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 4047,
            filmet_id: 65313433,
            title: "30 years of ICT in education: reflecting on educational technology projects"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 4048,
            filmet_id: 65654933,
            title: "Back to the future : Socio-technical imaginaries in 50 years of school digitalization curriculum reforms"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 4049,
            filmet_id: 65411992,
            title: "When student-activating teaching conflict with students' desire for efficiency. A communication perspective on undergraduate students' media use"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 4044,
            filmet_id: 65411725,
            title: "On the expression of hegemony in the field of educational technology - a case study of editorials in a Norwegian academic journal"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 1,
            article_id: 2563,
            filmet_id: 63022468,
            title: "Better together: building a new support site for bachelor's students in nursing"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 1,
            article_id: 3476,
            filmet_id: 63017517,
            title: "Educational and Digital Divides in Inclusive Education The Case of Video Materials for Teacher Training in Uganda"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 1,
            article_id: 2870,
            filmet_id: 63022286,
            title: "The challenges and opportunities of using 360-degree video technology in online lecturing: A case study in higher education business studies"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 1,
            article_id: 3165,
            filmet_id: 63017446,
            title: "Educational textbooks in digital surroundings"
        },
        {
            journal: "seminar",
            year: 2019,
            vol: 15,
            issue: 1,
            article_id: 3402,
            filmet_id: 52172269,
            title: "Teachers as users of ICT from the student perspective in higher education flipped classroom classes"
        },
        {
            journal: "seminar",
            year: 2019,
            vol: 15,
            issue: 1,
            article_id: 2908,
            filmet_id: 52116132,
            title: "Teachers' Pedagogical Role as Mediators in Leading and Guiding Students' Learning in Digital Storytelling (DST)"
        },
        {
            journal: "seminar",
            year: 2019,
            vol: 15,
            issue: 1,
            article_id: 2890,
            filmet_id: 52116426,
            title: "Exploring Healthcare Simulation Facilitators' Conceptions of Teaching and Learning"
        },
        {
            journal: "seminar",
            year: 2019,
            vol: 15,
            issue: 1,
            article_id: 3074,
            filmet_id: 52116671,
            title: "Nonlinear Storytelling Method and Tools for Low-Threshold Game Development"
        },
        {
            journal: "seminar",
            year: 2019,
            vol: 15,
            issue: 1,
            article_id: 2919,
            filmet_id: 52116563,
            title: "How are technology-related workplace resources associated with techno-work engagement among a group of Finnish teachers?"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2974,
            filmet_id: 36544230,
            title: "Editorial - Recent trends in the digitalization of the Nordic K-12 schools"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2983,
            filmet_id: 36544218,
            title: "Rethinking communication in virtual learning environments through the concept of Bildung"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2975,
            filmet_id: 36544219,
            title: "Trends in the Digitalization of K-12 Schools: The Australian Perspective"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2976,
            filmet_id: 36544233,
            title: "Digitally Competent School Organizations – Developing Supportive Organizational Infrastructures"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2977,
            filmet_id: 36544237,
            title: "A Comparison Between Digital Competence in Two Nordic Countries' National Curricula and an International Framework: Inspecting their Readiness for 21st Century Education"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2972,
            filmet_id: 36544217,
            title: "Power and control in the one-to-one computing classroom: students' perspectives on teachers' didactical design"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2978,
            filmet_id: 36544229,
            title: "Digital transformation in Swedish schools – Principals' strategic leadership and organisation of tablet-based one-to-one computing initiatives"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2979,
            filmet_id: 36544243,
            title: "Digital relational competence: Sensitivity and responsivity to needs of distance and co-located students"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2980,
            filmet_id: 36544222,
            title: "Digitally competent schools: teacher expectations when introducing digital competence in Finnish basic education"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2981,
            filmet_id: 36544234,
            title: "Enhancing future teachers' competencies for technology integration in education:  Turning theory into practice"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2982,
            filmet_id: 36544214,
            title: "Adequate digital competence – a close reading of the new national strategy for digitalization of the schools in Sweden"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2584,
            filmet_id: 28013604,
            title: "Introducing Virtual Reality Technologies to Design Education"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2579,
            filmet_id: 28013605,
            title: "Enhancing engagement, enjoyment and learning experiences through gamification on an English course for health care students"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2581,
            filmet_id: 28013502,
            title: "Transcultural perspectives in Teaching Children's Horror Films"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2834,
            filmet_id: 28013518,
            title: "A long way? Introducing digitized historical newspapers in school, a case study from Finland"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2597,
            filmet_id: 28013593,
            title: "How to trigger students' interest in digital learning environments: A systematic literature review"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2835,
            filmet_id: 28013564,
            title: "Preschoolers Learning with the Internet of Toys:  From Toy-Based Edutainment to Transmedia Literacy"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2304,
            filmet_id: 19719855,
            title: "Differences between the genders in ICT skills for Finnish upper comprehensive school students: Does gender matter?"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2305,
            filmet_id: 19719853,
            title: "Cooperative Learning within Educational Networks: Perspectives for Good Educational Governance in Modern Reading Education"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2306,
            filmet_id: 19718129,
            title: "Teachers' practices to support student work in digital storytelling: A study on Finnish and Chinese school teachers' experiences"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2307,
            filmet_id: 19719863,
            title: "Older Adults' Coping with the Digital Everyday Life"
        },
        {
            journal: "seminar",
            year: 2020,
            vol: 16,
            issue: 2,
            article_id: 2308,
            filmet_id: 19719862,
            title: "Openness in Education: Claims, Concepts, and Perspectives for Higher Education"
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2983,
            filmet_id: 36544218,
            title: "Rethinking communication in virtual learning environments through the concept of Bildung"
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2981,
            filmet_id: 36544234,
            title: "Enhancing future teachers' competencies for technology integration in education: Turning theory into practice."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2980,
            filmet_id: 36544222,
            title: "Digitally competent schools: teacher expectations when introducing digital competence in Finnish basic education."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2979,
            filmet_id: 36544243,
            title: "Digital relational competence: Sensitivity and responsivity to needs of distance and co-located students."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2978,
            filmet_id: 36544229,
            title: "Digital transformation in Swedish schools – Principals' strategic leadership and organisation of tablet-based one-to-one computing initiatives."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2977,
            filmet_id: 36544237,
            title: "A Comparison Between Digital Competence in Two Nordic Countries' National Curricula and an International Framework: Inspecting their Readiness for 21st Century Education"
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2975,
            filmet_id: 36544219,
            title: "Trends in the Digitalization of K-12 Schools: The Australian Perspective."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2974,
            filmet_id: 36544230,
            title: "Editorial - Recent trends in the digitalization of the Nordic K-12 schools"
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 2,
            article_id: 2972,
            filmet_id: 36544217,
            title: "Power and control in the one-to-one computing classroom: students' perspectives on teachers' didactical design."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 1,
            article_id: 2835,
            filmet_id: 28013564,
            title: "Preschoolers Learning with the Internet of Toys: From Toy-Based Edutainment to Transmedia Literacy."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 1,
            article_id: 2834,
            filmet_id: 28013518,
            title: "A long way? Introducing digitized historical newspapers in school, a case study from Finland."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 1,
            article_id: 2597,
            filmet_id: 28013593,
            title: "How to trigger students' interest in digital learning environments: A systematic literature review."
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 1,
            article_id: 2581,
            filmet_id: 28013502,
            title: "Transcultural perspectives in Teaching Children's Horror Films"
        },
        {
            journal: "seminar",
            year: 2018,
            vol: 14,
            issue: 1,
            article_id: 2579,
            filmet_id: 28013605,
            title: "Enhancing engagement, enjoyment and learning experiences through gamification on an English course for health care students."
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 2,
            article_id: 2308,
            filmet_id: 19719862,
            title: "Openness in Education: Claims, Concepts, and Perspectives for Higher Education"
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 2,
            article_id: 2307,
            filmet_id: 19719863,
            title: "Older Adults' Coping with the Digital Everyday Life"
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 2,
            article_id: 2306,
            filmet_id: 19718129,
            title: "Teachers' practices to support student work in digital storytelling: A study on Finnish and Chinese school teachers' experiences"
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 2,
            article_id: 2305,
            filmet_id: 19719853,
            title: "Cooperative Learning within Educational Networks: Perspectives for Good Educational Governance in Modern Reading Education."
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 2,
            article_id: 2110,
            filmet_id: 19719855,
            title: "Differences between the genders in ICT skills for Finnish upper comprehensive school students: Does gender matter?"
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 1,
            article_id: 2326,
            filmet_id: 19721456,
            title: "Teachers' Awareness of Guidelines for Quality Assurance when developing MOOCs."
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 1,
            article_id: 2325,
            filmet_id: 19721457,
            title: "Gamification of Learning and Teaching in Schools – A Critical Stance."
        },
        {
            journal: "seminar",
            year: 2017,
            vol: 13,
            issue: 1,
            article_id: 2297,
            filmet_id: 19719563,
            title: "Older active users of ICTs make sense of their engagement"
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 2,
            article_id: 2333,
            filmet_id: 19829802,
            title: "A user experience case study: two embodied cognition user interface solutions for a math learning game."
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 2,
            article_id: 2332,
            filmet_id: 19829797,
            title: "Using Mobile Tools to Support Meaningful Work-based Learning in Vocational Education"
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 2,
            article_id: 2331,
            filmet_id: 19829793,
            title: "Students' Expectations and Experiences of Meaningful Simulation-Based Medical Education"
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 2,
            article_id: 2281,
            filmet_id: 19829803,
            title: "When does the educational use of ICT become a source of technostress for Finnish teachers?"
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 1,
            article_id: 2340,
            filmet_id: 19829877,
            title: "TORIES OF TECHNOLOGY-ENHANCEMENT IN HIGHER EDUCATION – A CRITICAL APPROACH"
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 1,
            article_id: 2338,
            filmet_id: 19829855,
            title: "PROBLEM-BASED LEARNING IN SYNCHRONOUS NETWORKED ENVIRONMENTS: COMPARING ADOBE CONNECT AND SECOND LIFE."
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 1,
            article_id: 2337,
            filmet_id: 19829853,
            title: "FACEBOOK AS AN ACTOR - A CASE OF STUDENTS NEGOTIATING THEIR SOCIAL PRESENCE IN AN ONLINE COURSE."
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 1,
            article_id: 2336,
            filmet_id: 19829851,
            title: "SUPPORTING LEARNING THROUGH EPISTEMIC SCAFFOLDS EMBEDDED IN A HIGHLIGHTER TOOL"
        },
        {
            journal: "seminar",
            year: 2016,
            vol: 12,
            issue: 1,
            article_id: 2335,
            filmet_id: 19829849,
            title: "ETHNOGRAPHY FOR INVESTIGATING THE INTERNET"
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 3,
            article_id: 2350,
            filmet_id: 19830136,
            title: "Website Preferences of Finnish and Mexican University Students: A Cross-Cultural Study."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 3,
            article_id: 2349,
            filmet_id: 19830134,
            title: "Technology and ethnography – will it blend? Technological possibilities for fieldwork on transformations of teacher knowledge with videography and video diaries."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 3,
            article_id: 2348,
            filmet_id: 19830133,
            title: "Examining value creation in a community of learning practice: Methodological reflections on story-telling and story-reading."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 3,
            article_id: 2347,
            filmet_id: 19830132,
            title: "Digital Learning Aids for Nynorsk Pupils in School: - A Politically Sensitive Area or a Question of a Deeper Scientific Understanding of Learnin"
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 3,
            article_id: 2345,
            filmet_id: 19830139,
            title: "First do no harm: developing an ethical process of consent and release for digital storytelling in healthcare"
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 2,
            article_id: 2357,
            filmet_id: 19890291,
            title: "The Digital Competences and Agency of Older People Living in Rural Villages in Finnish Lapland"
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 2,
            article_id: 2356,
            filmet_id: 19890290,
            title: "Toys as Tools for Skill-building and Creativity in Adult Life."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 2,
            article_id: 2355,
            filmet_id: 19890289,
            title: "Body, identity and images of the self among adolescents. From research to action through Peer&amp;Media Education."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 2,
            article_id: 2354,
            filmet_id: 19890288,
            title: "Behind the concepts of multiliteracies and media literacy in the renewed Finnish core curriculum: A systematic literature review of peer-reviewed research."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 2,
            article_id: 2353,
            filmet_id: 19890283,
            title: "Developing a TPACK measurement instrument for 21st century pre-service teachers."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 2,
            article_id: 2352,
            filmet_id: 19890287,
            title: "A pedagogical model for simulation-based learning in healthcare"
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 1,
            article_id: 2363,
            filmet_id: 19890397,
            title: "Coming Back to Basic Concepts of the Context."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 1,
            article_id: 2362,
            filmet_id: 19890390,
            title: "At Home with Students – Observing Online and Offline Contexts."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 1,
            article_id: 2361,
            filmet_id: 19890399,
            title: "Nursing students' attitudes towards ICT in education and clinic in Denmark."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 1,
            article_id: 2360,
            filmet_id: 19890385,
            title: "Learning by using digital media in and out of school."
        },
        {
            journal: "seminar",
            year: 2015,
            vol: 11,
            issue: 1,
            article_id: 2359,
            filmet_id: 19890383,
            title: "ICT-enabled innovation in technology rich schools?"
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 2,
            article_id: 2371,
            filmet_id: 19901191,
            title: "Comparing the use of computer-supported collaboration tools among university students with different life circumstances."
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 2,
            article_id: 2370,
            filmet_id: 19901188,
            title: "Philosophical speech act theory and challenges in interactive dialogue: Experiences of narrow communication."
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 2,
            article_id: 2369,
            filmet_id: 19901185,
            title: "eacher education as design: technology-rich learning environments and trajectories."
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 2,
            article_id: 2368,
            filmet_id: 19901183,
            title: "Old Literacies and the â€œNewâ€  Literacy Studies: Revisiting Reading and Writing."
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 1,
            article_id: 2378,
            filmet_id: 19901249,
            title: "Dinosaurs and fossils living without dangerous tools: Social representations of computers and the Internet by elderly Finnish and American non-users."
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 1,
            article_id: 2377,
            filmet_id: 19901247,
            title: "How to Gain Knowledge When Data Are Shared? Open Government Data from a Media Pedagogical Perspective."
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 1,
            article_id: 2376,
            filmet_id: 19901245,
            title: "Educational Expectations and Media Cultures"
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 1,
            article_id: 2375,
            filmet_id: 19901244,
            title: "Education for All Revisited: On Concepts of Sharing in the Open Educational Resources (OER) Movement"
        },
        {
            journal: "seminar",
            year: 2014,
            vol: 10,
            issue: 1,
            article_id: 2374,
            filmet_id: 19901243,
            title: "My Own Private Public Library"
        },
        {
            journal: "seminar",
            year: 2013,
            vol: 9,
            issue: 2,
            article_id: 2388,
            filmet_id: 19901301,
            title: "Theoretical analysis of three research apparatuses about media and information literacy in France"
        },
        {
            journal: "seminar",
            year: 2013,
            vol: 9,
            issue: 2,
            article_id: 2387,
            filmet_id: 19901300,
            title: "Interactive whiteboards as artefacts to support dialogic learning spaces in primary schools."
        },
        {
            journal: "seminar",
            year: 2013,
            vol: 9,
            issue: 2,
            article_id: 2386,
            filmet_id: 19901299,
            title: "Towards Considerations beyond Dichotomies: The Study of Material Culture faces challenges in Online Playgrounds"
        },
        {
            journal: "seminar",
            year: 2013,
            vol: 9,
            issue: 2,
            article_id: 2385,
            filmet_id: 19901298,
            title: "Key Concepts in Education: Critical Issues beyond Definition and Discursive Practices."
        },
        {
            journal: "seminar",
            year: 2013,
            vol: 9,
            issue: 1,
            article_id: 2392,
            filmet_id: 19901373,
            title: "Interprofessional Participation and Reflection in a Digital Network."
        },
        {
            journal: "seminar",
            year: 2013,
            vol: 9,
            issue: 1,
            article_id: 2391,
            filmet_id: 19901374,
            title: "Challenges with social software for collaboration: Two case studies from teacher training."
        },
        {
            journal: "seminar",
            year: 2013,
            vol: 9,
            issue: 1,
            article_id: 2390,
            filmet_id: 19901375,
            title: "From Classroom to Digital Arena in Seeking Higher-level Learning: Student Experience. Seminar"
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 2,
            article_id: 2397,
            filmet_id: 19911392,
            title: "Developing Contextual Knowledge Arenas in the Global Classroom"
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 2,
            article_id: 2396,
            filmet_id: 19911391,
            title: "Online dating and education."
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 2,
            article_id: 2395,
            filmet_id: 19911389,
            title: "Digital Network as a Learning Tool for Health Sciences Students."
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 2,
            article_id: 2394,
            filmet_id: 19911386,
            title: "Adopting digital skills in an international project in teacher education"
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 1,
            article_id: 2403,
            filmet_id: 19911503,
            title: "Scaffolded filmmaking in PlayOFF: A playground for worldwide film experiments"
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 1,
            article_id: 2402,
            filmet_id: 19911456,
            title: "Norwegian Nurses' Experiences with Blended Learning: An Evaluation Study."
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 1,
            article_id: 2401,
            filmet_id: 19911455,
            title: "University Students' Use of Information and Communication Technologies (ICT) in Russia: A Focus on Learning and Everyday Life"
        },
        {
            journal: "seminar",
            year: 2012,
            vol: 8,
            issue: 1,
            article_id: 2400,
            filmet_id: 19911463,
            title: "Storytelling – EDU: Educational - Digital – Unlimited?."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 2,
            article_id: 2408,
            filmet_id: 19911578,
            title: "Student attitudes toward teaching English with technology."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 2,
            article_id: 2407,
            filmet_id: 19911591,
            title: "How can we make junior business students understand the importance of learning organizational behaviour and management?"
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 2,
            article_id: 2406,
            filmet_id: 19911595,
            title: "E-learning for sustainable development - rationale, strategies, choices and actions. Experiences from the study programme MSc in Development Management."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 2,
            article_id: 2405,
            filmet_id: 19911596,
            title: "Wiki Storyline in Second Language Teaching."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 2,
            article_id: 2404,
            filmet_id: 19911588,
            title: "EFA in Pakistan: Struggle for Upgrading Literacy."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 1,
            article_id: 2416,
            filmet_id: 19911634,
            title: "Alternative Online Evaluation in a Blended Learning Environment."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 1,
            article_id: 2415,
            filmet_id: 19911633,
            title: "Title Lecturers' Conception of Learning and Use of Methods in Blended Learning Courses at Three Swedish Universities."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 1,
            article_id: 2414,
            filmet_id: 19911628,
            title: "The nature and limits of interactive communication: A philosophical analysis."
        },
        {
            journal: "seminar",
            year: 2011,
            vol: 7,
            issue: 1,
            article_id: 2413,
            filmet_id: 19911624,
            title: "Visual Competence, Media Literacy and \"New Literacies\" – Conceptual Considerations in a Plural Discursive Landscape"
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 3,
            article_id: 2426,
            filmet_id: 19911681,
            title: "Digital storytelling as an emerging documentary form."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 3,
            article_id: 2421,
            filmet_id: 19911698,
            title: "Experiences from Blended Learning, Net-based Learning and Mind Tools"
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 3,
            article_id: 2420,
            filmet_id: 19911690,
            title: "Tools for peer assessment in an e-learning environment."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 3,
            article_id: 2419,
            filmet_id: 19911687,
            title: "Learning Outcomes and a Taxonomy as a Starting Point for creating digital Multiple-choice Tests"
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 3,
            article_id: 2418,
            filmet_id: 19911683,
            title: "Promoting the Good e-Teacher: Didactical Choices when developing e-pedagogical Competences"
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2449,
            filmet_id: 19968607,
            title: "Meshing the Personal with the Professional: Digital Storytelling in Higher Education."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2448,
            filmet_id: 19968592,
            title: "The Pedagogy of Digital Storytelling in the College Classroom."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2448,
            filmet_id: 19968608,
            title: "The Pedagogy of Digital Storytelling in the College Classroom."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2447,
            filmet_id: 19968604,
            title: "â€œDon't Keep It To Yourself!â€ : Digital Storytelling with South African Youth."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2446,
            filmet_id: 19968591,
            title: "The Hadia Story: Digital Storytelling in Election Campaigns"
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2445,
            filmet_id: 19968602,
            title: "Digital storytelling in sex education. Avoiding the pitfalls of building a â€˜haram' website."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2444,
            filmet_id: 19968588,
            title: "Digital storytelling in study abroad: toward a counter-catalogic experience"
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2443,
            filmet_id: 19968597,
            title: "Understanding digital storytelling: individual â€˜voice' and community-building in youth media programs."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2442,
            filmet_id: 19968596,
            title: "Making time for storytelling; the challenges of community building and activism in a rural locale."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2430,
            filmet_id: 19968586,
            title: "Poetic reflection through digital storytelling – a methodology to foster professional health worker identity in students."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 2,
            article_id: 2429,
            filmet_id: 19968594,
            title: "Boundary crossing and learning identities – digital storytelling in primary schools"
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2463,
            filmet_id: 20033102,
            title: "Does MS Photo Story 3 Make a Difference? The Views and Experiences of a Group of Norwegian Secondary School Teachers."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2462,
            filmet_id: 20033097,
            title: "Creating and Reading Images: Towards a Communication Framework for Higher Education Learning."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2461,
            filmet_id: 20033098,
            title: "What Don't We Know About Interactive Lectures?."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2460,
            filmet_id: 20033095,
            title: "Self and Peer Assessment and Dominance During Group Work Using Online Visual Tools."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2459,
            filmet_id: 20033094,
            title: "Virtual Chemical Engineering: Guidelines for E-Learning in Engineering Education."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2458,
            filmet_id: 20033092,
            title: "Smart Morning in an African Village: Diversifying Technologies within a Tanzanian Context."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2457,
            filmet_id: 20033087,
            title: "Visual Considerations in the Presentation of Mathematical Proofs."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2456,
            filmet_id: 20033089,
            title: "Video Conferencing for Opening Classroom Doors in Initial Teacher Education: Sociocultural Processes of Mimicking and Improvisation."
        },
        {
            journal: "seminar",
            year: 2010,
            vol: 6,
            issue: 1,
            article_id: 2455,
            filmet_id: 20033099,
            title: "The Rhetoric of Multi-Display Learning Spaces: exploratory experiences in visual art disciplines."
        },
        {
            journal: "seminar",
            year: 2009,
            vol: 5,
            issue: 2,
            article_id: 2465,
            filmet_id: 20143345,
            title: "Using Competence Meetings as a Practical Reflective Method"
        },
        {
            journal: "seminar",
            year: 2009,
            vol: 5,
            issue: 2,
            article_id: 2465,
            filmet_id: 20143342,
            title: "Using Competence Meetings as a Practical Reflective Method"
        },
        {
            journal: "seminar",
            year: 2009,
            vol: 5,
            issue: 2,
            article_id: 2464,
            filmet_id: 20143340,
            title: "ICT - an ally and an alien The role of ICT in Swedish popular adult education organisations."
        },
        {
            journal: "seminar",
            year: 2009,
            vol: 5,
            issue: 2,
            article_id: 2357,
            filmet_id: 19719652,
            title: "Design of Customized Corporate E-Learning"
        },
        {
            journal: "seminar",
            year: 2009,
            vol: 5,
            issue: 1,
            article_id: 2470,
            filmet_id: 20143449,
            title: "Constraints in Film Making Processes Offer an Exercise to the Imagination."
        },
        {
            journal: "seminar",
            year: 2009,
            vol: 5,
            issue: 1,
            article_id: 2469,
            filmet_id: 20143450,
            title: "Facilitating practical knowledge by using ECT"
        },
        {
            journal: "seminar",
            year: 2009,
            vol: 5,
            issue: 1,
            article_id: 2468,
            filmet_id: 20143442,
            title: "Life Long Education: A Conceptual Debate."
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 3,
            article_id: 2481,
            filmet_id: 20325134,
            title: "Dealing with pupils digital everyday life."
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 3,
            article_id: 2477,
            filmet_id: 20143518,
            title: "Developing professional competence by internet-based reflection"
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 3,
            article_id: 2476,
            filmet_id: 20143549,
            title: "On the hidden curriculum of the mouse click: An anthropologically drama."
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 3,
            article_id: 2475,
            filmet_id: 20143533,
            title: "Distance learning students in -communities of practice-"
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 3,
            article_id: 2474,
            filmet_id: 20143530,
            title: "Gender Profiles of Internet and Mobile Phone Use among Norwegian Adolescents"
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 2,
            article_id: 2482,
            filmet_id: 20325136,
            title: "Cooperative Online Education."
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 2,
            article_id: 2479,
            filmet_id: 20325137,
            title: "urvival of the -net-est?"
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 1,
            article_id: 2492,
            filmet_id: 20325185,
            title: "New teacher functions in cyberspace - on technology, mass media and education."
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 1,
            article_id: 2490,
            filmet_id: 20325187,
            title: "Dimensions of flexibility - Students, communication technology and distributed education."
        },
        {
            journal: "seminar",
            year: 2008,
            vol: 4,
            issue: 1,
            article_id: 2488,
            filmet_id: 20325186,
            title: "Identifying Needs: A Missing Part in Teacher Training Programs."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 3,
            article_id: 2503,
            filmet_id: 20325241,
            title: "And twelve months later, we are still waiting-: Insights into teaching and use of ICT in rural and remote Australian schools"
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 3,
            article_id: 2502,
            filmet_id: 20325240,
            title: "Shaping or shaking the learning network? Insights into teaching practices using Virtual Learning Environments."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 3,
            article_id: 2501,
            filmet_id: 20325242,
            title: "Developing a Virtual Book - Material for Virtual Learning Environments."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 2,
            article_id: 2508,
            filmet_id: 20325274,
            title: "The Constant Transformation and Re-configuration of Educational Knowledge Through the Internet."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 2,
            article_id: 2506,
            filmet_id: 20325272,
            title: "How students interact when working with mathematics in an ICT context."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 2,
            article_id: 2505,
            filmet_id: 20325270,
            title: "Tweens on the Internet - communication in virtual guest books"
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 1,
            article_id: 2513,
            filmet_id: 20325329,
            title: "Digitalized story-making in the classroom- A social semiotic perspective on gender, multimodality and learning."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 1,
            article_id: 2511,
            filmet_id: 20325326,
            title: "CT in Swedish Schools 1984 - 2004: How computers work in the teachers- world."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 1,
            article_id: 2510,
            filmet_id: 20325331,
            title: "The Digital Culture and -Peda-Socio- Transformation."
        },
        {
            journal: "seminar",
            year: 2007,
            vol: 3,
            issue: 1,
            article_id: 2509,
            filmet_id: 20325325,
            title: "University teaching staff as learners of the pedagogical use of ICT."
        },
        {
            journal: "seminar",
            year: 2006,
            vol: 2,
            issue: 2,
            article_id: 2517,
            filmet_id: 20407421,
            title: "Do students profit from feedback?."
        },
        {
            journal: "seminar",
            year: 2006,
            vol: 2,
            issue: 2,
            article_id: 2516,
            filmet_id: 20407419,
            title: "When means become ends: technology producing values."
        },
        {
            journal: "seminar",
            year: 2006,
            vol: 2,
            issue: 2,
            article_id: 2515,
            filmet_id: 20407420,
            title: "Interactive and face-to-face communication:a perspective from philosophy of mind and language."
        },
        {
            journal: "seminar",
            year: 2006,
            vol: 2,
            issue: 1,
            article_id: 2527,
            filmet_id: 20407468,
            title: "Technocultural education."
        },
        {
            journal: "seminar",
            year: 2006,
            vol: 2,
            issue: 1,
            article_id: 2522,
            filmet_id: 20407469,
            title: "Making sense with multimedia: A text theoretical study of a digital format integrating writing and video."
        },
        {
            journal: "seminar",
            year: 2005,
            vol: 1,
            issue: 2,
            article_id: 2532,
            filmet_id: 20407522,
            title: "Information technology in schools: Should the product be marked hazardous?"
        },
        {
            journal: "seminar",
            year: 2005,
            vol: 1,
            issue: 2,
            article_id: 2531,
            filmet_id: 20407521,
            title: "Narrative Competence and the Enhancement of Literacy."
        },
        {
            journal: "seminar",
            year: 2005,
            vol: 1,
            issue: 2,
            article_id: 2530,
            filmet_id: 20407524,
            title: "Stealing Our Smarts: Indigenous knowledge in On-Line Learning"
        },
        {
            journal: "seminar",
            year: 2005,
            vol: 1,
            issue: 2,
            article_id: 2529,
            filmet_id: 20407525,
            title: "The Digital Culture and Communication: More than just Classroom Learning."
        },
        {
            journal: "seminar",
            year: 2005,
            vol: 1,
            issue: 1,
            article_id: 2536,
            filmet_id: 20407580,
            title: "Reflexivity and technology in adult learning."
        },
        {
            journal: "seminar",
            year: 2005,
            vol: 1,
            issue: 1,
            article_id: 2535,
            filmet_id: 20407578,
            title: "Message posting Or dialogue?: On the dialectics of on-line practice in adult education."
        },
        {
            journal: "seminar",
            year: 2005,
            vol: 1,
            issue: 1,
            article_id: 2534,
            filmet_id: 20407579,
            title: "Society's Educational System"}];

        this.has_id = function(id) {
            var result = false;
            this.data.forEach(function(entry) {
                if (id == entry.article_id) {
                    result = true;
                }
            });
            return result;
        }

        this.get_filmet_id_old = function(id) {
            var result = false;
            var current_entry = this.data.find(entry => entry.article_id === id);
            if (current_entry == undefined) {
                return false;
            }
            return(current_entry.filmet_id);
        }
    this.lookuptable = [];

    for(var i=0; i<this.data.length; i++) {
        // indexes of this.lookuptable will be article_id whoose values will be filmet_id
        this.lookuptable[parseInt(this.data[i].article_id)] = parseInt(this.data[i].filmet_id);
    }

    this.getLookupTable = function(){
        return this.lookuptable;
    }

    this.get_filmet_id = function(id) {
        // return filmet_id (the value) when given the article_id (the index)
        var val = this.lookuptable[parseInt(id)];
        if (isNaN(val) == false) {
            return val;
        } else {
            return false;
        }
    }
}

var va = new Videoabstracts();

var hasClass = function(el, cls) {
    if (!el.className) {
        return false;
    } else {
        var newElementClass = ' ' + el.className + ' ';
        var newClassName = ' ' + cls + ' ';
        return newElementClass.indexOf(newClassName) !== -1;
    }
}

var videoAdder = function () {
    if (isAbstractPage()) {
        addVideoAbstractIfApplicable();
    }
}

var isAbstractPage = function () {
    var page_is_abstract_page = hasClass(document.querySelector('body'), 'pkp_page_article');
    if(debug) {
        console.log('isAbstractPage(): page_is_abstract_page = ' + page_is_abstract_page);
    }
    return (page_is_abstract_page);
}

function getFilmetVideoEmbedCode(filmet_id) {
    // based on the filmet_id code, create the HTML embed code to inject to the abstract page
    var embedcode = '<div class="abstract_video_container" style="width:100%; height:0; position: relative; padding-bottom:56.25%"><iframe src="https://film.oslomet.no/v.ihtml/player.html?source=embed&photo%5fid=' + filmet_id + '" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="fullscreen"></iframe></div>';
    return embedcode;
}

var addVideoAbstractIfApplicable = function () {
    var abstract_db = new Videoabstracts();
    var page_article_id_meta = document.querySelector('meta[name="DC.Identifier"]');
    var page_has_article_id_meta = (page_article_id_meta != null);

    if(debug) {
        console.log('addVideoAbstractIfApplicable(): page_article_id_meta = ' + page_article_id_meta);
    }

    if (page_has_article_id_meta) {
        var page_article_id = page_article_id_meta.getAttribute('content'); // get the article_id from the page
        var page_has_article_id = (page_article_id != null);

        if(debug) {
            console.log('addVideoAbstractIfApplicable(): page_article_id = ' + page_article_id);
        }

        if (page_has_article_id) {
            var filmet_id = abstract_db.get_filmet_id(page_article_id);
            var abstract_db_has_valid_filmet_id_for_page_id = (filmet_id != false);

            if(debug) {
                console.log('addVideoAbstractIfApplicable(): filmet_id = ' + filmet_id);
            }

                if (abstract_db_has_valid_filmet_id_for_page_id) {

                    var embedContainer = document.createElement('div');
                    embedContainer.innerHTML = getFilmetVideoEmbedCode(filmet_id);

                    var abstractSection = document.querySelector('.obj_article_details .abstract');

                    var abstractBody = abstractSection.querySelector('p');
                    abstractSection.insertBefore(embedContainer.firstElementChild, abstractBody);
                } else {
                    if(debug) {
                        console.log('addVideoAbstractIfApplicable(): no filmet_id found for page_article_id = ' + page_article_id);
                    }
                }
            }
        }

} // addVideoAbstractIfApplicable

window.addEventListener('load', videoAdder, false);

//videoAdder();
})();

