(function() {
    var debug = false;
    function Videoabstracts () {
    
    
        if(debug) {
            console.log('seminar-video-abstracts running ...');
        }
    
        this.data = [
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4493, token: "d45a7f983726c8737900a9d8fcfff49d", filmet_id: 70373317, title: "Digital Capitalism, Datafication, and Media Education: Critical Perspectives" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4224, token: "d9951be688898ac5fd1f5c5081e9841a", filmet_id: 69731132, title: "Digital Capitalism and Critical Media Education" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4268, token: "3e88442633e75377848ef4cf92867c90", filmet_id: 69731269, title: "Refocusing Zuboff's 'division of learning' on Education" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4280, token: "f9dfb58ee4a0184726241c4d282b6cf6", filmet_id: 69731324, title: "Critical is not political: The need to (re)politicize data literacy" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4291, token: "71775fe5d7959f7c33bde8145de97db5", filmet_id: 69731500, title: "A feminist Critique to digital consent" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4232, token: "0e55d57f8a138127fb45bdcb47449050", filmet_id: 69731369, title: "Towards a Closer Look at the Pipes and Joints of Educational Data Infrastructures: A Technogenetic Analysis of the Experience API" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4397, token: "b7a88093cf5db5655590c692da7d2139", filmet_id: 70632849, title: "Critical Data Studies and Data Science in Higher Education An interdisciplinary and explorative approach towards a critical data literacy" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4281, token: "dbd0260d5bdfef4a0fa16a8701012f8f", filmet_id: 69731514, title: "Artificial Intelligence in Education Big Data, Black Boxes, and Technological Solutionism" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4254, token: "dbb9c950512ac09b081ec74fe762cca6", filmet_id: 69731339, title: "Global Education Industry - Exploring the state of affairs in Austria" },
            { journal: "seminar", year: 2021, vol: 17, issue: 2, article_id: 4303, token: "ecdfabd8e2d9328145f691dc75c7f9e4", filmet_id: 69731207, title: "Technology giants, educational policy and a preliminary mapping of networks and channels of influence in a Norwegian context" },
            { journal: "seminar", year: 2021, vol: 17, issue: 1, article_id: 3828, token: "c7e4b00febf61d356146c796527a7fdd", filmet_id: 67955426, title: "Perceived adequate education in ethics: A way to tap into ethical Social Networking Sites awareness?" },
            { journal: "seminar", year: 2021, vol: 17, issue: 1, article_id: 3582, token: "aacab446859cf7df25b23b63702aabf8", filmet_id: 67897650, title: "The use of digital technologies in a 1:1 laptop initiative: The parent perspective" },
            { journal: "seminar", year: 2021, vol: 17, issue: 1, article_id: 3599, token: "bfe2f816ee2bc33b91b27246d2ca2e04", filmet_id: 67955437, title: "Collaborative Online Learning Using a Blended Learning Design for a Physiology Course in Nursing Education" },
            { journal: "seminar", year: 2021, vol: 17, issue: 1, article_id: 3199, token: "9e2e64885f10ba446b7c3ee261582f28", filmet_id: 67897634, title: "Identifying the contradictions in the technology enhanced language classroom" },
            { journal: "seminar", year: 2021, vol: 17, issue: 1, article_id: 3761, token: "153d3d3cc4c1bcee640b662d050295d2", filmet_id: 67897697, title: "The impact of emotions on learning and motivation in producing and presenting digital stories" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 4043, filmet_id: "", title: "Special issue: 30 years of ICT and learning in education - major changes and challenges" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 4046, token: "51d445f6b0fc4b3e1d86296a16c88978", filmet_id: 65481665, title: "Education, Change and the Longue Dureé: The Fate of the Book" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 4047, token: "25549c48b331e47fe123329353543550", filmet_id: 65313433, title: "30 years of ICT in education: reflecting on educational technology projects" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 4048, token: "84f099f10a638eab593ed6c6ade2c8a2", filmet_id: 65654933, title: "Back to the future : Socio-technical imaginaries in 50 years of school digitalization curriculum reforms" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 4049, token: "cb2ebc5a977794d62e65937a812ca7b1", filmet_id: 65411992, title: "When student-activating teaching conflict with students' desire for efficiency. A communication perspective on undergraduate students' media use" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 4044, token: "777ffdcf84ac891aa770da3c00ba7034", filmet_id: 65411725, title: "On the expression of hegemony in the field of educational technology - a case study of editorials in a Norwegian academic journal" },
            { journal: "seminar", year: 2020, vol: 16, issue: 1, article_id: 2563, token: "961191c5eeeb63d3b859d47480704bdd", filmet_id: 63022468, title: "Better together: building a new support site for bachelor's students in nursing" },
            { journal: "seminar", year: 2020, vol: 16, issue: 1, article_id: 3476, token: "7c0c924b3c14ebde0b3b3a818c46aae7", filmet_id: 63017517, title: "Educational and Digital Divides in Inclusive Education The Case of Video Materials for Teacher Training in Uganda" },
            { journal: "seminar", year: 2020, vol: 16, issue: 1, article_id: 2870, token: "dc4570a77a11fca4d3ab73992450ea1c", filmet_id: 63022286, title: "The challenges and opportunities of using 360-degree video technology in online lecturing: A case study in higher education business studies" },
            { journal: "seminar", year: 2020, vol: 16, issue: 1, article_id: 3165, token: "fc16615f0dbc7e5b9abed093ac85122d", filmet_id: 63017446, title: "Educational textbooks in digital surroundings" },
            { journal: "seminar", year: 2019, vol: 15, issue: 1, article_id: 3402, token: "aa321d7127119608424498d42e9423e5", filmet_id: 52172269, title: "Teachers as users of ICT from the student perspective in higher education flipped classroom classes" },
            { journal: "seminar", year: 2019, vol: 15, issue: 1, article_id: 2908, token: "9a61ae888a93612cce6f186c13d3d7c7", filmet_id: 52116132, title: "Teachers' Pedagogical Role as Mediators in Leading and Guiding Students' Learning in Digital Storytelling (DST)" },
            { journal: "seminar", year: 2019, vol: 15, issue: 1, article_id: 2890, token: "6456c2d3cb1296e9bd5a95ce9a1fcd70", filmet_id: 52116426, title: "Exploring Healthcare Simulation Facilitators' Conceptions of Teaching and Learning" },
            { journal: "seminar", year: 2019, vol: 15, issue: 1, article_id: 3074, token: "7c9f4a75f9e6d7442431ac0b0d7b5bd0", filmet_id: 52116671, title: "Nonlinear Storytelling Method and Tools for Low-Threshold Game Development" },
            { journal: "seminar", year: 2019, vol: 15, issue: 1, article_id: 2919, token: "0ef1d6c6598889f5c3d2a447b8bddd47", filmet_id: 52116563, title: "How are technology-related workplace resources associated with techno-work engagement among a group of Finnish teachers?" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2974, token: "e59da403e700ca261aabc6fbb84764b7", filmet_id: 36544230, title: "Editorial - Recent trends in the digitalization of the Nordic K-12 schools" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2983, token: "f333a6452864c51fe364be5518830c1e", filmet_id: 36544218, title: "Rethinking communication in virtual learning environments through the concept of Bildung" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2975, token: "6d895f117088e50342fc7d6cd1ccc315", filmet_id: 36544219, title: "Trends in the Digitalization of K-12 Schools: The Australian Perspective" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2976, token: "192cfb2afcf30b764986ae27f714a8bb", filmet_id: 36544233, title: "Digitally Competent School Organizations – Developing Supportive Organizational Infrastructures" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2977, token: "5573d01532b6687f507b36c5b0632558", filmet_id: 36544237, title: "A Comparison Between Digital Competence in Two Nordic Countries' National Curricula and an International Framework: Inspecting their Readiness for 21st Century Education" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2972, token: "052907603aab967f950340d689a1913c", filmet_id: 36544217, title: "Power and control in the one-to-one computing classroom: students' perspectives on teachers' didactical design" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2978, token: "26068f6f589ae47dbce1179641eb159d", filmet_id: 36544229, title: "Digital transformation in Swedish schools – Principals' strategic leadership and organisation of tablet-based one-to-one computing initiatives" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2979, token: "b0fa5075ee4f6360fa9e3790d47dd70c", filmet_id: 36544243, title: "Digital relational competence: Sensitivity and responsivity to needs of distance and co-located students" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2980, token: "cc11dd9a5d572252e544eba5b7601893", filmet_id: 36544222, title: "Digitally competent schools: teacher expectations when introducing digital competence in Finnish basic education" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2981, token: "0273208725e8b940421de4b29bf38cf2", filmet_id: 36544234, title: "Enhancing future teachers' competencies for technology integration in education:  Turning theory into practice" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2982, token: "2fa7e15f302a61df747a8ead77e33ef6", filmet_id: 36544214, title: "Adequate digital competence – a close reading of the new national strategy for digitalization of the schools in Sweden" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2584, token: "e15bca9c921e4a7583dd9d9d3265b0ae", filmet_id: 28013604, title: "Introducing Virtual Reality Technologies to Design Education" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2579, token: "9431c1bd9e84ab02bf00e4c24df31abb", filmet_id: 28013605, title: "Enhancing engagement, enjoyment and learning experiences through gamification on an English course for health care students" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2581, token: "48d618243ff70766c75096e78ee29435", filmet_id: 28013502, title: "Transcultural perspectives in Teaching Children's Horror Films" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2834, token: "ed2b93694084ffe342f1079824523d11", filmet_id: 28013518, title: "A long way? Introducing digitized historical newspapers in school, a case study from Finland" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2597, token: "b4cf5b572a03a3c8793c8c1b85dcbc4c", filmet_id: 28013593, title: "How to trigger students' interest in digital learning environments: A systematic literature review" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2835, token: "46a9bc2e154c8b1ad4f40fc68c7fd3fb", filmet_id: 28013564, title: "Preschoolers Learning with the Internet of Toys:  From Toy-Based Edutainment to Transmedia Literacy" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2304, token: "04a7939ce3d7b4d6d42a8c68790d8ef7", filmet_id: 19719855, title: "Differences between the genders in ICT skills for Finnish upper comprehensive school students: Does gender matter?" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2305, token: "714f06f11ff4b6cacface8660935337b", filmet_id: 19719853, title: "Cooperative Learning within Educational Networks: Perspectives for Good Educational Governance in Modern Reading Education" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2306, token: "2056e7b2a17e6a7d26ee7b764db223f8", filmet_id: 19718129, title: "Teachers' practices to support student work in digital storytelling: A study on Finnish and Chinese school teachers' experiences" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2307, token: "a51578034a76d868c4d8e56c25f83182", filmet_id: 19719863, title: "Older Adults' Coping with the Digital Everyday Life" },
            { journal: "seminar", year: 2020, vol: 16, issue: 2, article_id: 2308, token: "d24b9ea3c4779ac2275c978237fdc91f", filmet_id: 19719862, title: "Openness in Education: Claims, Concepts, and Perspectives for Higher Education" },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2983, token: "f333a6452864c51fe364be5518830c1e", filmet_id: 36544218, title: "Rethinking communication in virtual learning environments through the concept of Bildung" },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2981, token: "0273208725e8b940421de4b29bf38cf2", filmet_id: 36544234, title: "Enhancing future teachers' competencies for technology integration in education: Turning theory into practice." },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2980, token: "cc11dd9a5d572252e544eba5b7601893", filmet_id: 36544222, title: "Digitally competent schools: teacher expectations when introducing digital competence in Finnish basic education." },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2979, token: "b0fa5075ee4f6360fa9e3790d47dd70c", filmet_id: 36544243, title: "Digital relational competence: Sensitivity and responsivity to needs of distance and co-located students." },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2978, token: "26068f6f589ae47dbce1179641eb159d", filmet_id: 36544229, title: "Digital transformation in Swedish schools – Principals' strategic leadership and organisation of tablet-based one-to-one computing initiatives." },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2977, token: "5573d01532b6687f507b36c5b0632558", filmet_id: 36544237, title: "A Comparison Between Digital Competence in Two Nordic Countries' National Curricula and an International Framework: Inspecting their Readiness for 21st Century Education" },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2975, token: "6d895f117088e50342fc7d6cd1ccc315", filmet_id: 36544219, title: "Trends in the Digitalization of K-12 Schools: The Australian Perspective." },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2974, token: "e59da403e700ca261aabc6fbb84764b7", filmet_id: 36544230, title: "Editorial - Recent trends in the digitalization of the Nordic K-12 schools" },
            { journal: "seminar", year: 2018, vol: 14, issue: 2, article_id: 2972, token: "052907603aab967f950340d689a1913c", filmet_id: 36544217, title: "Power and control in the one-to-one computing classroom: students' perspectives on teachers' didactical design." },
            { journal: "seminar", year: 2018, vol: 14, issue: 1, article_id: 2835, token: "46a9bc2e154c8b1ad4f40fc68c7fd3fb", filmet_id: 28013564, title: "Preschoolers Learning with the Internet of Toys: From Toy-Based Edutainment to Transmedia Literacy." },
            { journal: "seminar", year: 2018, vol: 14, issue: 1, article_id: 2834, token: "ed2b93694084ffe342f1079824523d11", filmet_id: 28013518, title: "A long way? Introducing digitized historical newspapers in school, a case study from Finland." },
            { journal: "seminar", year: 2018, vol: 14, issue: 1, article_id: 2597, token: "b4cf5b572a03a3c8793c8c1b85dcbc4c", filmet_id: 28013593, title: "How to trigger students' interest in digital learning environments: A systematic literature review." },
            { journal: "seminar", year: 2018, vol: 14, issue: 1, article_id: 2581, token: "48d618243ff70766c75096e78ee29435", filmet_id: 28013502, title: "Transcultural perspectives in Teaching Children's Horror Films" },
            { journal: "seminar", year: 2018, vol: 14, issue: 1, article_id: 2579, token: "9431c1bd9e84ab02bf00e4c24df31abb", filmet_id: 28013605, title: "Enhancing engagement, enjoyment and learning experiences through gamification on an English course for health care students." },
            { journal: "seminar", year: 2017, vol: 13, issue: 2, article_id: 2308, token: "d24b9ea3c4779ac2275c978237fdc91f", filmet_id: 19719862, title: "Openness in Education: Claims, Concepts, and Perspectives for Higher Education" },
            { journal: "seminar", year: 2017, vol: 13, issue: 2, article_id: 2307, token: "a51578034a76d868c4d8e56c25f83182", filmet_id: 19719863, title: "Older Adults' Coping with the Digital Everyday Life" },
            { journal: "seminar", year: 2017, vol: 13, issue: 2, article_id: 2306, token: "2056e7b2a17e6a7d26ee7b764db223f8", filmet_id: 19718129, title: "Teachers' practices to support student work in digital storytelling: A study on Finnish and Chinese school teachers' experiences" },
            { journal: "seminar", year: 2017, vol: 13, issue: 2, article_id: 2305, token: "714f06f11ff4b6cacface8660935337b", filmet_id: 19719853, title: "Cooperative Learning within Educational Networks: Perspectives for Good Educational Governance in Modern Reading Education." },
            { journal: "seminar", year: 2017, vol: 13, issue: 2, article_id: 2110, token: "04a7939ce3d7b4d6d42a8c68790d8ef7", filmet_id: 19719855, title: "Differences between the genders in ICT skills for Finnish upper comprehensive school students: Does gender matter?" },
            { journal: "seminar", year: 2017, vol: 13, issue: 1, article_id: 2326, token: "9dff5ef01af27eacd4fdeabc9fd15c54", filmet_id: 19721456, title: "Teachers' Awareness of Guidelines for Quality Assurance when developing MOOCs." },
            { journal: "seminar", year: 2017, vol: 13, issue: 1, article_id: 2325, token: "3140969fd8a7490d9f7ca59a17a21562", filmet_id: 19721457, title: "Gamification of Learning and Teaching in Schools – A Critical Stance." },
            { journal: "seminar", year: 2017, vol: 13, issue: 1, article_id: 2297, token: "c97d29f31b03bb4551b7547487dcf799", filmet_id: 19719563, title: "Older active users of ICTs make sense of their engagement" },
            { journal: "seminar", year: 2016, vol: 12, issue: 2, article_id: 2333, token: "a299253fa67e3fba3772cb3da3c75bf0", filmet_id: 19829802, title: "A user experience case study: two embodied cognition user interface solutions for a math learning game." },
            { journal: "seminar", year: 2016, vol: 12, issue: 2, article_id: 2332, token: "6cdbaf6efd6ba4ff86df73ba2d303dd5", filmet_id: 19829797, title: "Using Mobile Tools to Support Meaningful Work-based Learning in Vocational Education" },
            { journal: "seminar", year: 2016, vol: 12, issue: 2, article_id: 2331, token: "e6942b4f80ed30172015428d2d532033", filmet_id: 19829793, title: "Students' Expectations and Experiences of Meaningful Simulation-Based Medical Education" },
            { journal: "seminar", year: 2016, vol: 12, issue: 2, article_id: 2281, token: "8a8bfcfe59e7477715ef4b71c5b11296", filmet_id: 19829803, title: "When does the educational use of ICT become a source of technostress for Finnish teachers?" },
            { journal: "seminar", year: 2016, vol: 12, issue: 1, article_id: 2340, token: "af29f8421008e25c9a86585cda5667b0", filmet_id: 19829877, title: "TORIES OF TECHNOLOGY-ENHANCEMENT IN HIGHER EDUCATION – A CRITICAL APPROACH" },
            { journal: "seminar", year: 2016, vol: 12, issue: 1, article_id: 2338, token: "a2d199b1775723205d95c3fa4961c7d7", filmet_id: 19829855, title: "PROBLEM-BASED LEARNING IN SYNCHRONOUS NETWORKED ENVIRONMENTS: COMPARING ADOBE CONNECT AND SECOND LIFE." },
            { journal: "seminar", year: 2016, vol: 12, issue: 1, article_id: 2337, token: "ea61a7de0390f1fa3a751d341b535f5a", filmet_id: 19829853, title: "FACEBOOK AS AN ACTOR - A CASE OF STUDENTS NEGOTIATING THEIR SOCIAL PRESENCE IN AN ONLINE COURSE." },
            { journal: "seminar", year: 2016, vol: 12, issue: 1, article_id: 2336, token: "1182b5f17eed55dfd3576676c708da88", filmet_id: 19829851, title: "SUPPORTING LEARNING THROUGH EPISTEMIC SCAFFOLDS EMBEDDED IN A HIGHLIGHTER TOOL" },
            { journal: "seminar", year: 2016, vol: 12, issue: 1, article_id: 2335, token: "203461f68b8f55749d3610161575a8f2", filmet_id: 19829849, title: "ETHNOGRAPHY FOR INVESTIGATING THE INTERNET" },
            { journal: "seminar", year: 2015, vol: 11, issue: 3, article_id: 2350, token: "aa933b68690e459d6dafff50f37e51e0", filmet_id: 19830136, title: "Website Preferences of Finnish and Mexican University Students: A Cross-Cultural Study." },
            { journal: "seminar", year: 2015, vol: 11, issue: 3, article_id: 2349, token: "ab6f28840f52b2f0f14b1c4794079535", filmet_id: 19830134, title: "Technology and ethnography – will it blend? Technological possibilities for fieldwork on transformations of teacher knowledge with videography and video diaries." },
            { journal: "seminar", year: 2015, vol: 11, issue: 3, article_id: 2348, token: "6e2b99583c2dff76aae20411d1a501c2", filmet_id: 19830133, title: "Examining value creation in a community of learning practice: Methodological reflections on story-telling and story-reading." },
            { journal: "seminar", year: 2015, vol: 11, issue: 3, article_id: 2347, token: "282c3e1fd655b5de468f002071f73108", filmet_id: 19830132, title: "Digital Learning Aids for Nynorsk Pupils in School: - A Politically Sensitive Area or a Question of a Deeper Scientific Understanding of Learnin" },
            { journal: "seminar", year: 2015, vol: 11, issue: 3, article_id: 2345, token: "7c05124f7dce026f188475cdd1a243b0", filmet_id: 19830139, title: "First do no harm: developing an ethical process of consent and release for digital storytelling in healthcare" },
            { journal: "seminar", year: 2015, vol: 11, issue: 2, article_id: 2357, token: "1397a46db7aaa476abaece7fde72f4cb", filmet_id: 19890291, title: "The Digital Competences and Agency of Older People Living in Rural Villages in Finnish Lapland" },
            { journal: "seminar", year: 2015, vol: 11, issue: 2, article_id: 2356, token: "5aa9a9767e476e97926350299d3fb638", filmet_id: 19890290, title: "Toys as Tools for Skill-building and Creativity in Adult Life." },
            { journal: "seminar", year: 2015, vol: 11, issue: 2, article_id: 2355, token: "d35f21990fcb85a3916cccc6aa7b3b66", filmet_id: 19890289, title: "Body, identity and images of the self among adolescents. From research to action through Peer&amp;Media Education." },
            { journal: "seminar", year: 2015, vol: 11, issue: 2, article_id: 2354, token: "8a889401606a512b089733cf5bb5d0a7", filmet_id: 19890288, title: "Behind the concepts of multiliteracies and media literacy in the renewed Finnish core curriculum: A systematic literature review of peer-reviewed research." },
            { journal: "seminar", year: 2015, vol: 11, issue: 2, article_id: 2353, token: "48709c8aa5fed275f45301946abf68b9", filmet_id: 19890283, title: "Developing a TPACK measurement instrument for 21st century pre-service teachers." },
            { journal: "seminar", year: 2015, vol: 11, issue: 2, article_id: 2352, token: "316329d1fce28e6eb920765b3ecd8c5b", filmet_id: 19890287, title: "A pedagogical model for simulation-based learning in healthcare" },
            { journal: "seminar", year: 2015, vol: 11, issue: 1, article_id: 2363, token: "7a9cdf2caa8d49212b0880f511be6df2", filmet_id: 19890397, title: "Coming Back to Basic Concepts of the Context." },
            { journal: "seminar", year: 2015, vol: 11, issue: 1, article_id: 2362, token: "5c8c24080fbeb24d8497362514cc99f5", filmet_id: 19890390, title: "At Home with Students – Observing Online and Offline Contexts." },
            { journal: "seminar", year: 2015, vol: 11, issue: 1, article_id: 2361, token: "e37010452ff34422ddd1e8b33d4e6da5", filmet_id: 19890399, title: "Nursing students' attitudes towards ICT in education and clinic in Denmark." },
            { journal: "seminar", year: 2015, vol: 11, issue: 1, article_id: 2360, token: "c82e63d995fb73b8ff9b673c973191fa", filmet_id: 19890385, title: "Learning by using digital media in and out of school." },
            { journal: "seminar", year: 2015, vol: 11, issue: 1, article_id: 2359, token: "5fbaf70f73f85525afbb0dbd3561d38a", filmet_id: 19890383, title: "ICT-enabled innovation in technology rich schools?" },
            { journal: "seminar", year: 2014, vol: 10, issue: 2, article_id: 2371, token: "1a25176c6bffe4164cb652c82dbc712d", filmet_id: 19901191, title: "Comparing the use of computer-supported collaboration tools among university students with different life circumstances." },
            { journal: "seminar", year: 2014, vol: 10, issue: 2, article_id: 2370, token: "00410d21fc636c646b8f2fee88c5410e", filmet_id: 19901188, title: "Philosophical speech act theory and challenges in interactive dialogue: Experiences of narrow communication." },
            { journal: "seminar", year: 2014, vol: 10, issue: 2, article_id: 2369, token: "a28c2fcca4f843b23a2ca1f8015288ca", filmet_id: 19901185, title: "eacher education as design: technology-rich learning environments and trajectories." },
            { journal: "seminar", year: 2014, vol: 10, issue: 2, article_id: 2368, token: "387021a7b3e03f6759bc5a0a670abb3c", filmet_id: 19901183, title: "Old Literacies and the â€œNewâ€  Literacy Studies: Revisiting Reading and Writing." },
            { journal: "seminar", year: 2014, vol: 10, issue: 1, article_id: 2378, token: "725adb7d51bb0d3093ee5d00cdb53426", filmet_id: 19901249, title: "Dinosaurs and fossils living without dangerous tools: Social representations of computers and the Internet by elderly Finnish and American non-users." },
            { journal: "seminar", year: 2014, vol: 10, issue: 1, article_id: 2377, token: "a6844186482a91e9d13af447811449d1", filmet_id: 19901247, title: "How to Gain Knowledge When Data Are Shared? Open Government Data from a Media Pedagogical Perspective." },
            { journal: "seminar", year: 2014, vol: 10, issue: 1, article_id: 2376, token: "cfde816e5b8c0d68d8b1ad7a96c80f18", filmet_id: 19901245, title: "Educational Expectations and Media Cultures" },
            { journal: "seminar", year: 2014, vol: 10, issue: 1, article_id: 2375, token: "af9d889b919d055ef386fb55fafd6e80", filmet_id: 19901244, title: "Education for All Revisited: On Concepts of Sharing in the Open Educational Resources (OER) Movement" },
            { journal: "seminar", year: 2014, vol: 10, issue: 1, article_id: 2374, token: "1a27568b9a75276deb23de87a6b2b50e", filmet_id: 19901243, title: "My Own Private Public Library" },
            { journal: "seminar", year: 2013, vol: 9, issue: 2, article_id: 2388, token: "510b217df634d0da852c8963d9e59da8", filmet_id: 19901301, title: "Theoretical analysis of three research apparatuses about media and information literacy in France" },
            { journal: "seminar", year: 2013, vol: 9, issue: 2, article_id: 2387, token: "1d5e4a895a1b5e0db782cf232b401f83", filmet_id: 19901300, title: "Interactive whiteboards as artefacts to support dialogic learning spaces in primary schools." },
            { journal: "seminar", year: 2013, vol: 9, issue: 2, article_id: 2386, token: "051180481e5480a457f04d7bf9f37c68", filmet_id: 19901299, title: "Towards Considerations beyond Dichotomies: The Study of Material Culture faces challenges in Online Playgrounds" },
            { journal: "seminar", year: 2013, vol: 9, issue: 2, article_id: 2385, token: "7e9fa2a0262e061d5bbef37c695bac63", filmet_id: 19901298, title: "Key Concepts in Education: Critical Issues beyond Definition and Discursive Practices." },
            { journal: "seminar", year: 2013, vol: 9, issue: 1, article_id: 2392, token: "03b65607e084ff3d137a0250c13fa864", filmet_id: 19901373, title: "Interprofessional Participation and Reflection in a Digital Network." },
            { journal: "seminar", year: 2013, vol: 9, issue: 1, article_id: 2391, token: "a21c3a4857af7555fda1b3a71e0c454c", filmet_id: 19901374, title: "Challenges with social software for collaboration: Two case studies from teacher training." },
            { journal: "seminar", year: 2013, vol: 9, issue: 1, article_id: 2390, token: "3d1e0635d83116101bf8625eb45174ac", filmet_id: 19901375, title: "From Classroom to Digital Arena in Seeking Higher-level Learning: Student Experience. Seminar" },
            { journal: "seminar", year: 2012, vol: 8, issue: 2, article_id: 2397, token: "016400b6a1ec505fae3d1bd482f134eb", filmet_id: 19911392, title: "Developing Contextual Knowledge Arenas in the Global Classroom" },
            { journal: "seminar", year: 2012, vol: 8, issue: 2, article_id: 2396, token: "f8f0cc7cf92c5d36e6f329e5efc929c4", filmet_id: 19911391, title: "Online dating and education." },
            { journal: "seminar", year: 2012, vol: 8, issue: 2, article_id: 2395, token: "e8367e106b6ea7e1b6235c8cf9977b7a", filmet_id: 19911389, title: "Digital Network as a Learning Tool for Health Sciences Students." },
            { journal: "seminar", year: 2012, vol: 8, issue: 2, article_id: 2394, token: "7f745bc3b98c54d94871be83cacc5417", filmet_id: 19911386, title: "Adopting digital skills in an international project in teacher education" },
            { journal: "seminar", year: 2012, vol: 8, issue: 1, article_id: 2403, token: "4ed5ea96e1fb8e6b1d865d0e856775b8", filmet_id: 19911503, title: "Scaffolded filmmaking in PlayOFF: A playground for worldwide film experiments" },
            { journal: "seminar", year: 2012, vol: 8, issue: 1, article_id: 2402, token: "4ee53f14940a089dc67667ad57d53b1f", filmet_id: 19911456, title: "Norwegian Nurses' Experiences with Blended Learning: An Evaluation Study." },
            { journal: "seminar", year: 2012, vol: 8, issue: 1, article_id: 2401, token: "ea96529f3dd7217ea8ac3b2f70a60f7a", filmet_id: 19911455, title: "University Students' Use of Information and Communication Technologies (ICT) in Russia: A Focus on Learning and Everyday Life" },
            { journal: "seminar", year: 2012, vol: 8, issue: 1, article_id: 2400, token: "71f244dbf4991ab0f2c8635e2f5d32df", filmet_id: 19911463, title: "Storytelling – EDU: Educational - Digital – Unlimited?." },
            { journal: "seminar", year: 2011, vol: 7, issue: 2, article_id: 2408, token: "329d9a9c61d3bcd1650321d67e296422", filmet_id: 19911578, title: "Student attitudes toward teaching English with technology." },
            { journal: "seminar", year: 2011, vol: 7, issue: 2, article_id: 2407, token: "30d9d220767c5bcffe36a56812c3f194", filmet_id: 19911591, title: "How can we make junior business students understand the importance of learning organizational behaviour and management?" },
            { journal: "seminar", year: 2011, vol: 7, issue: 2, article_id: 2406, token: "d28f517400bdfc6aef262128ea563b71", filmet_id: 19911595, title: "E-learning for sustainable development - rationale, strategies, choices and actions. Experiences from the study programme MSc in Development Management." },
            { journal: "seminar", year: 2011, vol: 7, issue: 2, article_id: 2405, token: "973728f5b9a3c4ef855770796d7ac9d9", filmet_id: 19911596, title: "Wiki Storyline in Second Language Teaching." },
            { journal: "seminar", year: 2011, vol: 7, issue: 2, article_id: 2404, token: "a578695d6b2e0d7fffa8a51ba3e58425", filmet_id: 19911588, title: "EFA in Pakistan: Struggle for Upgrading Literacy." },
            { journal: "seminar", year: 2011, vol: 7, issue: 1, article_id: 2416, token: "fd52faaf31663db65ed180f96e58c073", filmet_id: 19911634, title: "Alternative Online Evaluation in a Blended Learning Environment." },
            { journal: "seminar", year: 2011, vol: 7, issue: 1, article_id: 2415, token: "8249b67023ace772d7ab3777936dd733", filmet_id: 19911633, title: "Title Lecturers' Conception of Learning and Use of Methods in Blended Learning Courses at Three Swedish Universities." },
            { journal: "seminar", year: 2011, vol: 7, issue: 1, article_id: 2414, token: "ee54ff0073bbad22e5bb78d8e2958929", filmet_id: 19911628, title: "The nature and limits of interactive communication: A philosophical analysis." },
            { journal: "seminar", year: 2011, vol: 7, issue: 1, article_id: 2413, token: "9d6787c37a53819ce54d5ecdb749d65b", filmet_id: 19911624, title: "Visual Competence, Media Literacy and \"New Literacies\" – Conceptual Considerations in a Plural Discursive Landscape" },
            { journal: "seminar", year: 2010, vol: 6, issue: 3, article_id: 2426, token: "c338664212360fd267ee67bbf7833f3b", filmet_id: 19911681, title: "Digital storytelling as an emerging documentary form." },
            { journal: "seminar", year: 2010, vol: 6, issue: 3, article_id: 2421, token: "90c7ac5399148b492cbabd188bcb1ff1", filmet_id: 19911698, title: "Experiences from Blended Learning, Net-based Learning and Mind Tools" },
            { journal: "seminar", year: 2010, vol: 6, issue: 3, article_id: 2420, token: "104345abc643ad2b56e440ebfb6f3b32", filmet_id: 19911690, title: "Tools for peer assessment in an e-learning environment." },
            { journal: "seminar", year: 2010, vol: 6, issue: 3, article_id: 2419, token: "7714a904298284204ee2021aa9256039", filmet_id: 19911687, title: "Learning Outcomes and a Taxonomy as a Starting Point for creating digital Multiple-choice Tests" },
            { journal: "seminar", year: 2010, vol: 6, issue: 3, article_id: 2418, token: "4b274429f8b8bcc32fa93c5e12cf949e", filmet_id: 19911683, title: "Promoting the Good e-Teacher: Didactical Choices when developing e-pedagogical Competences" },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2449, token: "ea5cf4fc6cd34754b1a9663623dfdbce", filmet_id: 19968607, title: "Meshing the Personal with the Professional: Digital Storytelling in Higher Education." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2448, token: "9272ce9b2b347b4d6eb5c6671333724e", filmet_id: 19968592, title: "The Pedagogy of Digital Storytelling in the College Classroom." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2448, token: "b90aafc8e806d935be35c2a50aa53741", filmet_id: 19968608, title: "The Pedagogy of Digital Storytelling in the College Classroom." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2447, token: "4a9df8cfc78dfd3d8a24e1da151497ab", filmet_id: 19968604, title: "â€œDon't Keep It To Yourself!â€ : Digital Storytelling with South African Youth." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2446, token: "ae759a1afbece0d5c0a43904edc30856", filmet_id: 19968591, title: "The Hadia Story: Digital Storytelling in Election Campaigns" },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2445, token: "188bd2ab9fd611261cb821f1fd5bdc20", filmet_id: 19968602, title: "Digital storytelling in sex education. Avoiding the pitfalls of building a â€˜haram' website." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2444, token: "79566f410569abcfd8a85f8d42c25221", filmet_id: 19968588, title: "Digital storytelling in study abroad: toward a counter-catalogic experience" },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2443, token: "a70a667923f66c44142b949950207bd1", filmet_id: 19968597, title: "Understanding digital storytelling: individual â€˜voice' and community-building in youth media programs." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2442, token: "86a6db8d8af05299969a69e7fa4e0283", filmet_id: 19968596, title: "Making time for storytelling; the challenges of community building and activism in a rural locale." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2430, token: "12cd3824c166fe76ef96aa39e5b63ed1", filmet_id: 19968586, title: "Poetic reflection through digital storytelling – a methodology to foster professional health worker identity in students." },
            { journal: "seminar", year: 2010, vol: 6, issue: 2, article_id: 2429, token: "1ce86ea685c3d1c70d3dc14412ec8ff4", filmet_id: 19968594, title: "Boundary crossing and learning identities – digital storytelling in primary schools" },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2463, token: "bddf8534444c22cda211c30985c8bf8d", filmet_id: 20033102, title: "Does MS Photo Story 3 Make a Difference? The Views and Experiences of a Group of Norwegian Secondary School Teachers." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2462, token: "c679c7c96c2b5b5fba3430b6ce649609", filmet_id: 20033097, title: "Creating and Reading Images: Towards a Communication Framework for Higher Education Learning." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2461, token: "bbdbffff7f24c73a38000ef37a810402", filmet_id: 20033098, title: "What Don't We Know About Interactive Lectures?." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2460, token: "42a8db694c94524beedfb82066aca260", filmet_id: 20033095, title: "Self and Peer Assessment and Dominance During Group Work Using Online Visual Tools." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2459, token: "a81f37b0793200048b1462354e0d0e1d", filmet_id: 20033094, title: "Virtual Chemical Engineering: Guidelines for E-Learning in Engineering Education." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2458, token: "0671c7e006630e6a491a877747fafe3f", filmet_id: 20033092, title: "Smart Morning in an African Village: Diversifying Technologies within a Tanzanian Context." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2457, token: "a04c42f1fedbef70bf710996440b2d88", filmet_id: 20033087, title: "Visual Considerations in the Presentation of Mathematical Proofs." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2456, token: "58ea05f768d52f63664d1e286ee05891", filmet_id: 20033089, title: "Video Conferencing for Opening Classroom Doors in Initial Teacher Education: Sociocultural Processes of Mimicking and Improvisation." },
            { journal: "seminar", year: 2010, vol: 6, issue: 1, article_id: 2455, token: "317a4ea089a591e737c9eab6dbea6cc2", filmet_id: 20033099, title: "The Rhetoric of Multi-Display Learning Spaces: exploratory experiences in visual art disciplines." },
            { journal: "seminar", year: 2009, vol: 5, issue: 2, article_id: 2465, token: "c8ce49ba4978a8e2d028d1e0b7d95424", filmet_id: 20143345, title: "Using Competence Meetings as a Practical Reflective Method" },
            { journal: "seminar", year: 2009, vol: 5, issue: 2, article_id: 2465, token: "c3e67c6d25c34e272aa97fdafe559986", filmet_id: 20143342, title: "Using Competence Meetings as a Practical Reflective Method" },
            { journal: "seminar", year: 2009, vol: 5, issue: 2, article_id: 2464, token: "bd73f7433aa1eb4b19e936be5e6cd004", filmet_id: 20143340, title: "ICT - an ally and an alien The role of ICT in Swedish popular adult education organisations." },
            { journal: "seminar", year: 2009, vol: 5, issue: 2, article_id: 2357, token: "0cedde4f33f5260b75926d2fce1d8b61", filmet_id: 19719652, title: "Design of Customized Corporate E-Learning" },
            { journal: "seminar", year: 2009, vol: 5, issue: 1, article_id: 2470, token: "0c73c2b823f6c5d50e26207ec54b494a", filmet_id: 20143449, title: "Constraints in Film Making Processes Offer an Exercise to the Imagination." },
            { journal: "seminar", year: 2009, vol: 5, issue: 1, article_id: 2469, token: "8f4b5aa117ce30b6f6bcb0a1669f7126", filmet_id: 20143450, title: "Facilitating practical knowledge by using ECT" },
            { journal: "seminar", year: 2009, vol: 5, issue: 1, article_id: 2468, token: "0def130d02e8e7fb48f89be0beac6b3b", filmet_id: 20143442, title: "Life Long Education: A Conceptual Debate." },
            { journal: "seminar", year: 2008, vol: 4, issue: 3, article_id: 2481, token: "68d6292f1d2045554efb465b06c944d4", filmet_id: 20325134, title: "Dealing with pupils digital everyday life." },
            { journal: "seminar", year: 2008, vol: 4, issue: 3, article_id: 2477, token: "c82a83bea46565e99846dad7c09d86c6", filmet_id: 20143518, title: "Developing professional competence by internet-based reflection" },
            { journal: "seminar", year: 2008, vol: 4, issue: 3, article_id: 2476, token: "b6526ccdcfb2d757ad3a2241c7e9cc33", filmet_id: 20143549, title: "On the hidden curriculum of the mouse click: An anthropologically drama." },
            { journal: "seminar", year: 2008, vol: 4, issue: 3, article_id: 2475, token: "90fe86ca61b29f19ffa33892be01ba4b", filmet_id: 20143533, title: "Distance learning students in -communities of practice-" },
            { journal: "seminar", year: 2008, vol: 4, issue: 3, article_id: 2474, token: "f6444382a9f5f7e69c71bf889f4dc858", filmet_id: 20143530, title: "Gender Profiles of Internet and Mobile Phone Use among Norwegian Adolescents" },
            { journal: "seminar", year: 2008, vol: 4, issue: 2, article_id: 2482, token: "0945fd8da18810237d97828c37280b0a", filmet_id: 20325136, title: "Cooperative Online Education." },
            { journal: "seminar", year: 2008, vol: 4, issue: 2, article_id: 2479, token: "afe39a6f9d2a14fc73446918b4519799", filmet_id: 20325137, title: "urvival of the -net-est?" },
            { journal: "seminar", year: 2008, vol: 4, issue: 1, article_id: 2492, token: "042a6b1a7ff8e2b270233c5971c5d977", filmet_id: 20325185, title: "New teacher functions in cyberspace - on technology, mass media and education." },
            { journal: "seminar", year: 2008, vol: 4, issue: 1, article_id: 2490, token: "e8b2c59d33b4afdff5af38217a1386b8", filmet_id: 20325187, title: "Dimensions of flexibility - Students, communication technology and distributed education." },
            { journal: "seminar", year: 2008, vol: 4, issue: 1, article_id: 2488, token: "cc45e4daf39bd7d17d571941b53088ef", filmet_id: 20325186, title: "Identifying Needs: A Missing Part in Teacher Training Programs." },
            { journal: "seminar", year: 2007, vol: 3, issue: 3, article_id: 2503, token: "acd219f044ee48302804bc11b1d0a1c3", filmet_id: 20325241, title: "And twelve months later, we are still waiting-: Insights into teaching and use of ICT in rural and remote Australian schools" },
            { journal: "seminar", year: 2007, vol: 3, issue: 3, article_id: 2502, token: "78af6c4202cf71989d0350a800f6a8b5", filmet_id: 20325240, title: "Shaping or shaking the learning network? Insights into teaching practices using Virtual Learning Environments." },
            { journal: "seminar", year: 2007, vol: 3, issue: 3, article_id: 2501, token: "4303187952757259ee8e5a801c7e942b", filmet_id: 20325242, title: "Developing a Virtual Book - Material for Virtual Learning Environments." },
            { journal: "seminar", year: 2007, vol: 3, issue: 2, article_id: 2508, token: "4b053adee0756225d0570f356a0342dc", filmet_id: 20325274, title: "The Constant Transformation and Re-configuration of Educational Knowledge Through the Internet." },
            { journal: "seminar", year: 2007, vol: 3, issue: 2, article_id: 2506, token: "2c561e5930831e92a2b74222ff6f6260", filmet_id: 20325272, title: "How students interact when working with mathematics in an ICT context." },
            { journal: "seminar", year: 2007, vol: 3, issue: 2, article_id: 2505, token: "94fc7d1d3f8f7d632c9f3fd8eadbedeb", filmet_id: 20325270, title: "Tweens on the Internet - communication in virtual guest books" },
            { journal: "seminar", year: 2007, vol: 3, issue: 1, article_id: 2513, token: "7541f69e8195b87d094efdf5ea4485a0", filmet_id: 20325329, title: "Digitalized story-making in the classroom- A social semiotic perspective on gender, multimodality and learning." },
            { journal: "seminar", year: 2007, vol: 3, issue: 1, article_id: 2511, token: "03d11cb40d75e246c157e5008e63fb08", filmet_id: 20325326, title: "CT in Swedish Schools 1984 - 2004: How computers work in the teachers- world." },
            { journal: "seminar", year: 2007, vol: 3, issue: 1, article_id: 2510, token: "ba661098c161e2f73391d8717103d292", filmet_id: 20325331, title: "The Digital Culture and -Peda-Socio- Transformation." },
            { journal: "seminar", year: 2007, vol: 3, issue: 1, article_id: 2509, token: "54d787c66a83697bbe3991e1e0981639", filmet_id: 20325325, title: "University teaching staff as learners of the pedagogical use of ICT." },
            { journal: "seminar", year: 2006, vol: 2, issue: 2, article_id: 2517, token: "e6dd9293932a67d4303fea6015fd3e1e", filmet_id: 20407421, title: "Do students profit from feedback?." },
            { journal: "seminar", year: 2006, vol: 2, issue: 2, article_id: 2516, token: "59a5e78321d819d7a6c0312bd3e5f6f9", filmet_id: 20407419, title: "When means become ends: technology producing values." },
            { journal: "seminar", year: 2006, vol: 2, issue: 2, article_id: 2515, token: "4181f3e962dc58d6c42eb8a9d0a6baa6", filmet_id: 20407420, title: "Interactive and face-to-face communication:a perspective from philosophy of mind and language." },
            { journal: "seminar", year: 2006, vol: 2, issue: 1, article_id: 2527, token: "4edd1d10e6ee9e263f4aa09e6ca07bf0", filmet_id: 20407468, title: "Technocultural education." },
            { journal: "seminar", year: 2006, vol: 2, issue: 1, article_id: 2522, token: "aaf3160a8fe8321100304f1691131967", filmet_id: 20407469, title: "Making sense with multimedia: A text theoretical study of a digital format integrating writing and video." },
            { journal: "seminar", year: 2005, vol: 1, issue: 2, article_id: 2532, token: "c7b9df710bfd1040227178166133eefd", filmet_id: 20407522, title: "Information technology in schools: Should the product be marked hazardous?" },
            { journal: "seminar", year: 2005, vol: 1, issue: 2, article_id: 2531, token: "b70ee18f401f9c4783a30d93056011aa", filmet_id: 20407521, title: "Narrative Competence and the Enhancement of Literacy." },
            { journal: "seminar", year: 2005, vol: 1, issue: 2, article_id: 2530, token: "5c92e69d222eac263a9c0d1658849529", filmet_id: 20407524, title: "Stealing Our Smarts: Indigenous knowledge in On-Line Learning" },
            { journal: "seminar", year: 2005, vol: 1, issue: 2, article_id: 2529, token: "3e3fc44d3463fcded41a76b4a4c21cd5", filmet_id: 20407525, title: "The Digital Culture and Communication: More than just Classroom Learning." },
            { journal: "seminar", year: 2005, vol: 1, issue: 1, article_id: 2536, token: "c475aa11c78800e2bea03744ce815287", filmet_id: 20407580, title: "Reflexivity and technology in adult learning." },
            { journal: "seminar", year: 2005, vol: 1, issue: 1, article_id: 2535, token: "a3306fdc20b937c3ee72cc9fded0bcb7", filmet_id: 20407578, title: "Message posting Or dialogue?: On the dialectics of on-line practice in adult education." },
            { journal: "seminar", year: 2005, vol: 1, issue: 1, article_id: 2534, token: "12f864a4fd85e74b7df0e6afd9835666", filmet_id: 20407579, title: "Society's Educational System" }
        ];
    
        this.get_indexed_array_article_id = function(sourceArray) {
            // return a new array where the key is used as index
            // key should be integer! Str is also ok.
        
            var indexedArray = [];
        
            for (var i = 0; i < sourceArray.length; i++) {
                let index = sourceArray[i].article_id;
                indexedArray[index] = sourceArray[i];
            }
            return indexedArray;
        }
        
        this.get_indexed_array_filmet_id = function(sourceArray) {
            // return a new array where the key is used as index
            // key should be integer! Str is also ok.
        
            var indexedArray = [];
        
            for (var i = 0; i < sourceArray.length; i++) {
                let index = sourceArray[i].filmet_id;
                indexedArray[index] = sourceArray[i];
            }
            return indexedArray;
        }
    
        this.indexed_data_article_id = this.get_indexed_array_article_id(this.data);
        this.indexed_data_filmet_id = this.get_indexed_array_filmet_id(this.data);
    
        this.has_id = function(id) {
            var result = false;
            this.data.forEach(function(entry) {
                if (id == entry.article_id) {
                    result = true;
                }
            });
            return result;
        }
    
    
        this.get_token_from_article_id = function(id) {
            return this.indexed_data_article_id[id].token;
        }
    
        this.get_token_from_filmet_id = function(id) {
            return this.indexed_data_filmet_id[id].token;
        }
    
        this.get_filmet_id_from_article_id = function(id) {
            return this.indexed_data_article_id[id].filmet_id;
        }
    
    } // function Videoabstracts()
    
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
        var embedcode = '<div class="abstract_video_container" style="width:100%; height:0; position: relative; padding-bottom:56.25%">';
        //embedcode += '<iframe src="https://film.oslomet.no/v.ihtml?token=' + va.get_token_from_filmet_id(filmet_id) + '&source=embed&photo%5fid=' + filmet_id + '"';
        embedcode += '<iframe src="https://film.oslomet.no/v.ihtml?source=embed&photo%5fid=' + filmet_id + '"';
        embedcode += ' style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="fullscreen"></iframe></div>';
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
                var filmet_id = abstract_db.get_filmet_id_from_article_id(page_article_id);
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