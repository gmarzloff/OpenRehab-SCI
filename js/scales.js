/* 	scales.js 
* 	In this file we define data as objects to populate the SCIM, CARE, etc. scales
*	created by George Marzloff | george@marzloffmedia.com
*/

// SCIM
// Based on http://sci2.rickhanseninstitute.org/images/sci2/SCIM/toolkit/SCIM_Clinical_Form.pdf

var SCIM_Scale = function () {

	this.name = "Spinal Cord Independence Measure";

	this.mobilityChoices = [
						new Choice("Requires total assistance", 0),	
						new Choice("Needs electric wheelchair or partial assistance to operate manual wheelchair", 1),	
						new Choice("Moves independently in manual wheelchair", 2),
						new Choice("Requires supervision while walking (with or without devices)", 3),	
						new Choice("Walks with a walking frame or crutches (swing)", 4),	
						new Choice("Walks with crutches or two canes (reciprocal walking)", 5),
						new Choice("Walks with one cane", 6),
						new Choice("Needs leg orthosis only", 7),
						new Choice("Walks without walking aids", 8)
					];	

		this.questions = [new Question(
						"1. Feeding (cutting, opening containers, pouring, bringing food to mouth, holding cup with fluid)",
						[
							new Choice("Needs parenteral, gastrostomy or fully assisted oral feeding", 0),
							new Choice("Needs partial assistance for eating and/or drinking, or for wearing adaptive devices", 1),
 							new Choice("Eats independently; needs adaptive devices or assistance only for cutting food and/or pouring and/or opening containers", 2),
							new Choice("Eats and drinks independently; does not require assistance or adaptive device", 3)
						],
						"Self-Care"),

					new Question(
						"2A. Bathing Upper Body (soaping, washing, drying body and head, manipulating water tap)",
						[
							new Choice("Requires total assistance", 0),
							new Choice("Requires partial assistance", 1),
 							new Choice("Washes independently with adaptive devices or in a specific setting (e.g., bars, chair", 2),
							new Choice("Washes independently; does not require adaptive devices or specific setting", 3)
						],
						"Self-Care"),

					new Question(
						"2B. Bathing Lower Body (soaping, washing, drying, manipulating water tap)",
						[
							new Choice("Requires total assistance", 0),
							new Choice("Requires partial assistance", 1),
 							new Choice("Washes independently with adaptive devices or in a specific setting (e.g., bars, chair", 2),
							new Choice("Washes independently; does not require adaptive devices or specific setting", 3)
						],
						"Self-Care"),

					new Question(
						"3A. Bathing Upper Body (soaping, washing, drying, manipulating water tap)",
						[
							new Choice("Requires total assistance", 0),
							new Choice("Requires partial assistance", 1),
 							new Choice("Washes independently with adaptive devices or in a specific setting (e.g., bars, chair", 2),
							new Choice("Washes independently; does not require adaptive devices or specific setting", 3)
						],
						"Self-Care"),

					new Question(
						"3B. Dressing Lower Body (clothes, shoes, permanent orthoses; dressing, wearing, undressing)",
						[
							new Choice("Requires total assistance", 0),
							new Choice("Requires partial assistance with clothes without buttons, zippers or laces (cwobzl)", 1),
 							new Choice("Independent with cwobzl; requires adaptive devices and/or specific settings (adss)", 2),
							new Choice("Dresses (any clothes) independently; does not require adaptive devices or specific setting", 3)
						],
						"Self-Care"),

					new Question(
						"4. Grooming (washing hands and face, brushing teeth, combing hair, shaving, applying makeup)",
						[
							new Choice("Requires total assistance", 0),
							new Choice("Requires partial assistance", 1),
 							new Choice("Grooms independently with adaptive devices", 2),
							new Choice("Grooms independently without adaptive devices", 3)
						],
						"Self-Care"),

					new Question(
						"5. Respiration",
						[
							new Choice("Requires tracheal tube (TT) and permanent or intermittent assisted ventilation (IAV)", 0),
							new Choice("Breathes independently with TT; requires oxygen, much assistance in coughing or TT management", 2),
 							new Choice("Breathes independently with TT; requires little assistance in coughing or TT management", 4),
							new Choice("Breathes independently without TT; requires oxygen, much assistance in coughing, a mask (e.g., peep) or IAV (bipap)", 6),
							new Choice("Breathes independently without TT; requires little assistance or stimulation for coughing", 8),
							new Choice("Breathes independently without assistance or device", 10),

						],
						"Respiration and Sphincter Management"),

					new Question(
						"6. Sphincter Management - Bladder",
						[
							new Choice("Indwelling catheter", 0),
							new Choice("Residual urine volume (RUV) > 100cc; no regular catheterization or assisted intermittent catheterization", 3),
 							new Choice("RUV < 100cc or intermittent self-catheterization; needs assistance for applying drainage instrument", 6),
							new Choice("Intermittent self-catheterization; uses external drainage instrument; does not need assistance for applying", 9),
							new Choice("Intermittent self-catheterization; continent between catheterizations; does not use external drainage instrument", 11),
							new Choice("RUV &lt;100cc; needs only external urine drainage; no assistance is required for drainage", 13),
							new Choice("RUV &lt;100cc; continent; does not use external drainage instrument", 15),
						],
						"Respiration and Sphincter Management"),

					new Question(
						"7. Sphincter Management - Bowel",
						[
							new Choice("Irregular timing or very low frequency (less than once in 3 days) of bowel movements", 0),
							new Choice("Regular timing, but requires assistance (e.g., for applying suppository); rare accidents (less than twice a month)", 5),
 							new Choice("Regular bowel movements, without assistance; rare accidents (less than twice a month)", 8),
							new Choice("Regular bowel movements, without assistance; no accidents", 10)
						],
						"Respiration and Sphincter Management"),

					new Question(
						"8. Use of Toilet (perineal hygiene, adjustment of clothes before/after, use of napkins or diapers)",
						[
							new Choice("Requires total assistance", 0),	
							new Choice("Requires partial assistance; does not clean self", 1),	
							new Choice("Requires partial assistance; cleans self independently", 2),	
							new Choice("Uses toilet independently in all tasks but needs adaptive devices or special setting (e.g., bars)", 4),	
							new Choice("Uses toilet independently; does not require adaptive devices or special setting", 5)
						],
						"Respiration and Sphincter Management"),

					new Question(
						"9. Mobility in Bed and Action to Prevent Pressure Sores",
						[
							new Choice("Needs assistance in all activities: turning upper body in bed, turning lower body in bed, sitting up in bed, doing push-ups in wheelchair, with or without adaptive devices, but not with electric aids", 0),	
							new Choice("Performs one of the activities without assistance", 2),	
							new Choice("Performs two or three of the activities without assistance", 4),	
							new Choice("Performs all the bed mobility and pressure release activities independently", 6)
						],
						"Mobility (room and toilet)"),

					new Question(
						"10. Transfers: bed-wheelchair (locking wheelchair, lifting footrests, removing and adjusting arm rests, transferring, lifting feet)",
						[
							new Choice("Requires total assistance", 0),	
							new Choice("Needs partial assistance and/or supervision, and/or adaptive devices (e.g., sliding board)", 1),	
							new Choice("Independent (or does not require wheelchair)", 2)	
						],
						"Mobility (room and toilet)"),
 
 					new Question(
						"11. Transfers: wheelchair-toilet-tub (if uses toilet wheelchair: transfers to and from; if uses regular wheelchair: locking wheelchair, lifting footrests, removing and adjusting armrests, transferring, lifting feet)",
						[
							new Choice("Requires total assistance", 0),	
							new Choice("Needs partial assistance and/or supervision, and/or adaptive devices (e.g., grab-bars)", 1),	
							new Choice("Independent (or does not require wheelchair)", 2)	
						],
						"Mobility (room and toilet)"),

 					new Question(
						"12. Mobility Indoors",
						this.mobilityChoices,
						"Mobility (indoors and outdoors)"),

 					new Question(
						"13. Mobility for Moderate Distances (10-100 meters)",
						this.mobilityChoices,
						"Mobility (indoors and outdoors)"),

 					new Question(
						"14. Mobility Outdoors (more than 100 meters)",
						this.mobilityChoices,
						"Mobility (indoors and outdoors)"),

					new Question(
						"15. Stair Management",
						[
							new Choice("Unable to ascend or descend stairs", 0),
							new Choice("Ascends and descends at least 3 steps with support or supervision of another person", 1),
							new Choice("Ascends and descends at least 3 steps with support of handrail and/or crutch or cane", 2),
							new Choice("Ascends and descends at least 3 steps without any support or supervision", 3)
						],
						"Mobility (indoors and outdoors)"),

					new Question(
						"16. Transfers - wheelchair-car (approach car, lock w/c, remove arm &amp' footrests, transfers to/from car, brings w/c in/out of car)",
						[
							new Choice("Requires total assistance", 0),	
							new Choice("Needs partial assistance and/or supervision and/or adaptive devices", 1)
						],
						"Mobility (indoors and outdoors)"),

					new Question(
						"17. Transfers - ground-wheelchair",
						[
							new Choice("Requires total assistance", 0),	
							new Choice("Transfers independent with or without adaptive devices (or does not require wheelchair)", 1)
						],
						"Mobility (indoors and outdoors)")
					];

	this.userScores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // initializes array to keep track of score for each question. 19 total questions
	
	

}

var Question = function(title,choices,category){
	this.title = title;
	this.choices = choices;
	this.category = category;
};

var Choice = function(desc,value){
	this.description = desc;
	this.value = value;
}