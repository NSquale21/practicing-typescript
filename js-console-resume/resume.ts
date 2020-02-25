displayAsWhiteText('Name: ' + 'Nicole Pasquale'.toUpperCase());
console.log('Career: Aspiring Full Stack Web Developer');
console.log('Description: Part-time Paramore Enthusiast');

// Function to print white text to console
function displayAsWhiteText(text: string) {
	console.log('%c' + text, 'color: white; font-weight: bold');
}

// Function to display a fire emoji is skill is cool
function displaySkill(skill: string, isCool: boolean) {
	if(isCool) {
		console.log(`* 🔥 ${skill}`);
	} else {
		console.log(`* ${skill}`);
	}
}

// Function to format work history & education
function displayPosition(companyName: string, jobTitle: string, dates: string) {
	console.log(`* ${companyName} - ${jobTitle} - ${dates}`);
}

console.log(' ');
displayAsWhiteText('My Skills:');

interface ISkill {
    name: string,
    coolness: boolean
}

const mySkills: ISkill[] = [
	{
		name: 'Web Development',
		coolness: true
	},
	{
		name: 'Guitar Player',
		coolness: true
	},
	{
		name: 'Australian Shepherd Wrangler',
		coolness: false
	}
];

mySkills.forEach((mySkills) => {
	displaySkill(mySkills.name, mySkills.coolness);
});

console.log(' ');
displayAsWhiteText('My Previous Experience:');

interface IJob {
    company: string,
    title: string,
    dates: string
}

let workHistory: IJob[] = [
	{
		company: 'Bonnie Management Corporation',
		title: 'Assistant Property Manager',
		dates: '08/18/2015 - 05/31/2019'
    },
	{
		company: 'Laser Spine Institute',
		title: 'Project Assistant',
		dates: '4/2014 - 5/2015'
	}
];

workHistory.forEach((workHistory) => {
	displayPosition(workHistory.company, workHistory.title, workHistory.dates);
});

console.log(' ');
displayAsWhiteText('Education:');

interface ISchool {
    school: string,
    major: string,
    dates: string
}

let education: ISchool[] = [
	{
		school: 'Queens University of Charlotte',
		major: 'Pre-Med/Business',
		dates:	'2007 - 2008',
	},
	{
		school: 'University of South Florida',
		major: 'Biomedical Science',
		dates: '2009 - 2013',
	},
	{
		school: 'Covalence',
		major: 'Full Stack Web Development',
		dates:  'Currently Enrolled',
	}
];

education.forEach((education) => {
	if (education.school === 'Covalence') {
		console.log(`* 🔥 ${education.school} - ${education.major} - ${education.dates}`);
	} else {
		displayPosition(education.school, education.major, education.dates);
	}	
});