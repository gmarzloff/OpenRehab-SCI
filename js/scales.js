/* 	scales.js 
* 	In this file we define data as objects to populate the SCIM & PAIQI, scales
*	created by George Marzloff | george@marzloffmedia.com
*/

// FIM
// Based on https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/InpatientRehabFacPPS/downloads/irfpai-manualint.pdf

// SCIM
// Based on http://sci2.rickhanseninstitute.org/images/sci2/SCIM/toolkit/SCIM_Clinical_Form.pdf

//PAIQI 
// https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/IRF-Quality-Reporting/Downloads/DRAFT-IRF-PAI-FOR-OCT-2016.pdf

var FIM_Scale = function () {

	this.name = "FIM Instrument";

	this.dressingChoices = [
						new Choice("Complete Independence - safely dresses & undresses self obtaining clothes from drawers/closets, managing bra, front garment, zippers, buttons, snaps, dons prosthesis/orthosis.",7),
						new Choice("Modified Independence - requires special adaptive closure such as a Velcro fastener or assisitve device, or takes more than a reasonable amount of time.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (application of orthoses or assistive/adaptive devices, setting out clothes",5),
						new Choice("Minimal Contact Assistance - performs 75% or more of dressing tasks.",4),
						new Choice("Moderate Assistance - performs 50%-74% of dressing tasks.",3),
						new Choice("Maximal Assistance - performs 25-49% of dressing tasks.",2),
						new Choice("Total Assistance - performs <25% of dressing tasks",1),
						new Choice("Activity Does Not Occur - enter code 0 only for the admission assessment. The patient does not dress self and is not dressed by a helper.",0)
					];

	this.questions = [new Question(
					"39A. Eating (using suitable utensils to bring food to the mouth and the ability to chew and swallow the food once the meal is presented).",
					[
						new Choice("Complete Independence - eats from a dish while managing variety of food consistencies, and drinks from a cup/glass with meal presented on table/tray. Opens containers, butters bread, cuts meat, pours liquids, uses a spoon or fork to bring food to mouth where it is chewed and swallowed.",7),
						new Choice("Modified Independence - requires an adaptive or assistive device e.g. long straw spork or rocking knife, requires more than a reasonable time to eat, or requires modified food consistency. If s/he uses PPN/PEG, s/he self-feeds.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (application of orthoses or assistive/adaptive devices)  or another person is required to open containers, butter bread, cut meat, or pour liquids.",5),
						new Choice("Minimal Contact Assistance - performs 75% or more of eating tasks.",4),
						new Choice("Moderate Assistance - performs 50%-74% of eating tasks.",3),
						new Choice("Maximal Assistance - performs 25-49% of eating tasks.",2),
						new Choice("Total Assistance - performs <25% of eating tasks or fed via PPN/PEG and does not self-administer",1),
						new Choice("Activity Does Not Occur - enter code 0 only for the admission assessment. The patient does not eat and does not receive PPN/PEG feeds during the entire assessment time frame.",0)
					],
					"Self-Care"),

				new Question(
					"39B. Grooming (oral care, hair grooming, washing their hands face and either shaving their face or applying makeup).",
					[
						new Choice("Complete Independence - cleans teeth/dentures, combs/brushes hair, washes hands, face and either shaves the face or applies make-up. activity is performed safely.",7),
						new Choice("Modified Independence - requires specialized equipment (including prosthesis or orthosis) to groom or takes more than a reasonable time, or there are safety considerations.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (application of orthoses or assistive/adaptive devices, setting out grooming equipment or initial preparation such as applying toothpaste or opening make-up containers",5),
						new Choice("Minimal Contact Assistance - performs 75% or more of grooming tasks.",4),
						new Choice("Moderate Assistance - performs 50%-74% of grooming tasks.",3),
						new Choice("Maximal Assistance - performs 25-49% of grooming tasks.",2),
						new Choice("Total Assistance - performs <25% of grooming tasks",1),
						new Choice("Activity Does Not Occur - enter code 0 only for the admission assessment. The patient does not groom and is not groomed by a helper.",0)
					],
					"Self-Care"),

				new Question(
					"39C. Bathing (washing, rinsing and drying body from neck down in either tub/shower/sponge bath. Performs activity safely).",
					[
						new Choice("Complete Independence - safely bathes (washes, rinses and dries) the body.",7),
						new Choice("Modified Independence - requires specialized equipment (including prosthesis or orthosis) to bathe or takes more than a reasonable time, or there are safety considerations.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (application of orthoses or assistive/adaptive devices, setting out bathing equipment or initial preparation of water and washing materials",5),
						new Choice("Minimal Contact Assistance - performs 75% or more of bathing tasks.",4),
						new Choice("Moderate Assistance - performs 50%-74% of bathing tasks.",3),
						new Choice("Maximal Assistance - performs 25-49% of bathing tasks.",2),
						new Choice("Total Assistance - performs <25% of bathing tasks",1),
						new Choice("Activity Does Not Occur - enter code 0 only for the admission assessment. The patient does not bathe self and is not bathed by a helper.",0)
					],
					"Self-Care"),

				new Question(
					"39D. Dressing - Upper (safely dressing and applying/removing prosthesis/orthosis).",
					this.dressingChoices,
					"Self-Care"),

				new Question(
					"39E. Dressing - Lower (safely dressing and applying/removing prosthesis/orthosis).",
					this.dressingChoices,
					"Self-Care"),

				new Question(
					"39F. Toileting (safely maintaining perineal hygiene and adjusting clothing before and after using a toilet, commode, bedpan, or urinal.)",
					[
						new Choice("Complete Independence - safely cleanses self after voiding and bowel movements, safely adjusts clothing before/after using toilet commode, bedpan or urinal",7),
						new Choice("Modified Independence - requires specialized equipment (including prosthesis or orthosis) during toileting or takes more than a reasonable time, or there are safety considerations.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (application of adaptive devices or opening packages",5),
						new Choice("Minimal Contact Assistance - performs 75% or more of toileting tasks.",4),
						new Choice("Moderate Assistance - performs 50%-74% of toileting tasks.",3),
						new Choice("Maximal Assistance - performs 25-49% of toileting tasks.",2),
						new Choice("Total Assistance - performs <25% of toileting tasks",1),
						new Choice("Activity Does Not Occur - enter code 0 only for the admission assessment. The patient or helper does not perform toileting tasks.",0)
					],
					"Self-Care"),

				new Question(
					"39G. Bladder Management (safe use of equipment or agents)",
					[
						new Choice("Complete Independence - controls bladder completely and intentionally without equipment or devices and is never incontinent",7),
						new Choice("Modified Independence - requires urinal, bedpan, catheter, absorbent pad, diaper, urinary collecting device or diversion, or uses meds for control. " +
									"If cath, pt cleans, sterilizes and sets up equipment for irrigation without assistance. If device used, (s)he assembles/applies external catheter "+
									"with drainage bags or an ileal appliance without help. also empties, puts on, removes, cleans leg bag or ileal bag. Has no accidents. ",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (placing or emptying) equipment to maintain satisfactory voiding pattern or external device in the past 3 days.",5),
						new Choice("Minimal Contact Assistance - to maintain external device, and performs >75% of bladder tasks in past 3 days.",4),
						new Choice("Moderate Assistance - to maintain external device, and performs 50-74% of bladder tasks in past 3 days.",3),
						new Choice("Maximal Assistance - performs 25-49% of bladder management tasks.",2),
						new Choice("Total Assistance - performs <25% of bladder management tasks",1)
					],
					"Self-Care"),

				new Question(
					"39H. Bowel Management (safe use of equipment or agents)",
					[
						new Choice("Complete Independence - controls bowel completely and intentionally without equipment or devices and is never incontinent",7),
						new Choice("Modified Independence - requires bedpad, dig stim, stool softener, suppositories, laxatives, enemas or other meds on a regular basis. Never incontinent.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup of equipment to maintain satisfactory excretory pattern or ostomy in the past 3 days.",5),
						new Choice("Minimal Contact Assistance - to maintain satisfactory excretory pattern by suppositories, enemas or an external device, performs >75% tasks in past 3 days.",4),
						new Choice("Moderate Assistance - to maintain satisfactory excretory pattern by suppositories, enemas or an external device, and performs 50-74% of tasks in past 3 days.",3),
						new Choice("Maximal Assistance - performs 25-49% of bowel management tasks in past 3 days.",2),
						new Choice("Total Assistance - performs <25% of bowel management tasks in past 3 days",1)
					],
					"Self-Care"),

				new Question(
					"39I. Transfers: Bed, Chair, Wheelchair (includes all aspects transferring to/from items, or sit-to-stand if patient is ambulatory)",
					[
						new Choice("Complete Independence - if walking - safely sits/stands from regular chair. if in wheelchair, aproaches bed/chair, locks brakes, lifts foot rests, removes arm rest, standing pivots or sliding transfer w/o board and returns.",7),
						new Choice("Modified Independence - requires adaptive or assistive device such as a sliding board, lift, grab bars, or special seat/chair/brace/crutches, or it takes a long time, or is done unsafely.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (positioning sliding board, moving foot rests, etc)",5),
						new Choice("Minimal Contact Assistance - requires no more help than touching and performs >75% transferring tasks",4),
						new Choice("Moderate Assistance - requires more help than touching and performs 50-74% transferring tasks",3),
						new Choice("Maximal Assistance - performs 25-49% of transferring tasks.",2),
						new Choice("Total Assistance - performs <25% of transferring tasks",1)
					],
					"Mobility"),

				new Question(
					"39J. Transfers: Toilet (includes all aspects transferring to/from items, or sit-to-stand if patient is ambulatory)",
					[
						new Choice("Complete Independence - if walking - safely sits/stands from standard toilet. if in wheelchair, approaches toilet, locks brakes, lifts foot rests, removes arm rest, standing pivots or sliding transfer w/o board and returns.",7),
						new Choice("Modified Independence - requires adaptive or assistive device such as a sliding board, lift, grab bars, or special seat, or it takes a long time, or is done unsafely.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (positioning sliding board, moving foot rests, etc)",5),
						new Choice("Minimal Contact Assistance - requires no more help than touching and performs >75% transferring tasks",4),
						new Choice("Moderate Assistance - requires more help than touching and performs 50-74% transferring tasks",3),
						new Choice("Maximal Assistance - performs 25-49% of transferring tasks.",2),
						new Choice("Total Assistance - performs <25% of transferring tasks",1),
						new Choice("Activity Does Not Occur - only for admission, and patient or helper does not transfer to toilet (e.g. bedpan or urinal use only)",1)
					],
					"Mobility"),

				new Question(
					"39K. Transfers: Tub (getting into and out of tub safely)",
					[
						new Choice("Complete Independence - if walking - safely approaches tub, gets into and out of it. if in wheelchair, approaches tub, locks brakes, lifts foot rests, removes arm rest, standing pivots or sliding transfer w/o board and returns.",7),
						new Choice("Modified Independence - requires adaptive or assistive device such as a sliding board, lift, grab bars, or special seat, or it takes a long time, or is done unsafely.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (positioning sliding board, moving foot rests, etc)",5),
						new Choice("Minimal Contact Assistance - requires no more help than touching and performs >75% transferring tasks",4),
						new Choice("Moderate Assistance - requires more help than touching and performs 50-74% transferring tasks",3),
						new Choice("Maximal Assistance - performs 25-49% of transferring tasks.",2),
						new Choice("Total Assistance - performs <25% of transferring tasks",1),
						new Choice("Activity Does Not Occur - patient or helper does not transfer to tub",1)
					],
					"Mobility"),

				new Question(
					"39L. Transfers: Shower (getting into and out of shower safely)",
					[
						new Choice("Complete Independence - if walking - safely approaches shower stall, gets into and out of it. if in wheelchair, approaches shower stall, locks brakes, lifts foot rests, removes arm rest, standing pivots or sliding transfer w/o board and returns.",7),
						new Choice("Modified Independence - requires adaptive or assistive device such as a sliding board, lift, grab bars, or special seat, or it takes a long time, or is done unsafely.",6),
						new Choice("Supervision or Setup - requires supervision (standing by, cuing or coaxing) or setup (positioning sliding board, moving foot rests, etc)",5),
						new Choice("Minimal Contact Assistance - requires no more help than touching and performs >75% transferring tasks",4),
						new Choice("Moderate Assistance - requires more help than touching and performs 50-74% transferring tasks",3),
						new Choice("Maximal Assistance - performs 25-49% of transferring tasks.",2),
						new Choice("Total Assistance - performs <25% of transferring tasks",1),
						new Choice("Activity Does Not Occur - patient or helper does not transfer in/out of shower",1)
					],
					"Mobility"),

				new Question(
					"39K. Locomotion: Walk (safely walking on level surface once in a standing position)",
					[
						new Choice("Complete Independence - safely walks minimum of 150 feet without assistive devices.",7),
						new Choice("Modified Independence - walks min 150 ft, but uses brace (orthosis) or prosthesis, adaptive shoes, cane crutches, or walkerette, or is done slowly, or unsafely",6),
						new Choice("Exception (Household Locomotion) - walks 50-150 ft independently with/without device. done slowly or unsafely",5),
						new Choice("Supervision - requires standby supervision, cuing, coaxing to min 150ft",5),
						new Choice("Minimal Contact Assistance - performs >75% walking effort to go minimum of 150ft",4),
						new Choice("Moderate Assistance - performs 50-74% to go minimum 150ft",3),
						new Choice("Maximal Assistance - performs 25-49%  of walking effort to go minimum 50 ft, requires 1 person assist.",2),
						new Choice("Total Assistance - performs <25% of walking effort or requires two person assist, or walks to less than 50 ft",1),
						new Choice("Activity Does Not Occur - patient does not walk, only used for admission",1)
					],
					"Mobility"),

				new Question(
					"39L. Locomotion: Wheelchair (safely won a level surface, once in a seated position)",
					[
						new Choice("Do not use if patient uses a wheelchair.",7),
						new Choice("Modified Independence - operates manual/motorized wheelchair independently for 150+ ft, turns around, maneuvers chair to a table, bed toilet, negotiates 3% grade, maneuvers on rugs and over door sills.",6),
						new Choice("Exception (Household Locomotion) - operates a manual or motorized wheelchair independently only short distances",5),
						new Choice("Supervision - requires standby supervision, cuing, coaxing to min 150ft",5),
						new Choice("Minimal Contact Assistance - performs >75% walking effort to go minimum of 150ft",4),
						new Choice("Moderate Assistance - performs 50-74% to go minimum 150ft",3),
						new Choice("Maximal Assistance - performs 25-49%  of walking effort to go minimum 50 ft, requires 1 person assist.",2),
						new Choice("Total Assistance - performs <25% of walking effort or requires two person assist, or walks to less than 50 ft",1),
						new Choice("Activity Does Not Occur - patient does not use a wheelchair or not pushed in a wheelchair by helper. only used for admission",1)
					],
					"Mobility"),

				new Question(
					"39M. Locomotion: Stairs",
					[
						new Choice("Independence - Safely goes up and down at least 1 flight of stairs without depending on handrail or support",7),
						new Choice("Modified Independence - Goes up and down at least 1 flight of stairs but requires side support, handrail, cane or portable supports, or takes long time, or safety issue",6),
						new Choice("Exception (Household Ambulation) - Goes up/down 4-6 stairs independently w or w/o device. takes long time or safety issue", 5),
						new Choice("Minimal Contact Assistance - patient performs >75% effort to go up and down one flight of stairs",4),
						new Choice("Moderate Assistance - patient performs 50-74% effort to go up and down one flight of stairs",3),
						new Choice("Maximal Assistance - patient performs 25-49% effort to go up and down 4-6 stairs, requires 1-person assistance",2),
						new Choice("Total Assistance - patient performs <25% of effort or requires 2-person assist or goes up/down <4 stairs",1),
						new Choice("Activity does not occur (does not go up/down stairs or helper does not carry subject up/down stairs.",0)
					],
					"Mobility"),

				new Question(
					"39N. Comprehension",
					[
						new Choice("Complete Independence - understands complex or abstract directions and coversation, and understands either spoken or written language (not necessarily English)",7),
						new Choice("Modified Independence - understands readily or with only mild difficulty complex or abstract directions and conversation. does not require prompting, though s/he may require hearing/visual aid or other assistive device or extra time.",6),
						new Choice("Standby Prompting - understands directions and conversation about basic daily needs >90% of the time, requires prompting (slowed speech, use of repetition, stressing particular words/phrases, pauses, visual or gestural cues <10% time",5),
						new Choice("Minimal Prompting - understands directions and conversation about daily neesd 75-90% of the time",4),
						new Choice("Moderate Prompting - understands directions and conversation about basic daily needs 50-74% of the time",3),
						new Choice("Maximal Prompting - understands directions and conversation about basic daily needs 25-49% of the time. understands only simple commonly used spoken expressions (hello, how are you) or gestures (waving good-bye). requires prompting >1/2 the time",2),
						new Choice("Total Assistance - understands directions and conversation about basic daily needs <25% of the time or does not understand simple commonly used spoken expressions (hello, how are you) or gestures (waving good-bye) or does not respond appropriately despite prompting",1)
					],
					"Cognition"),

				new Question(
					"39O. Expression",
					[
						new Choice("Complete Independence - Expresses complex or abstract ideas clearly and fluently (not necessarily in English)",7),
						new Choice("Modified Independence - usually expresses complex or abstract ideas clearly or with mild difficulty. no prompting needed but may require augmentative communication system.",6),
						new Choice("Standby Prompting - expresses basic daily needs and ideas >90% of the time. requires prompting <10% of time to be understood.",5),
						new Choice("Minimal Prompting - expresses basic daily needs and ideas 75-90% of the time.",4),
						new Choice("Moderate Prompting - expresses basic daily needs and ideas 50-74% of the time.",3),
						new Choice("Maximal Prompting - expresses basic daily needs and ideas 25-49% of the time. uses single words or gestures and needs prompting >50% time",2),
						new Choice("Total Assistance - expresses basic daily needs <25% of the time, or does not express basic daily needs appropriately despite prompting.",1)
						],
					"Cognition"),

				new Question(
					"39P. Social Interaction",
					[
						new Choice("Complete Independence - interacts appropriately with staff, other patients and family members, no medication for control.",7),
						new Choice("Modified Independence - usually interacts appropriately with staff, other patients and family members, rarely loses control. does not require supervision but may require more reasonable amonut of time to adjust to social situations or medication for control.",6),
						new Choice("Supervision - requires supervision only under stressful or unfamiliar conditions < 10% time. may require encouragement to initiate participation.",5),
						new Choice("Minimal Direction - interacts appropriately 75-90% of the time.",4),
						new Choice("Moderate Direction - interacts appropriately 50-74% of the time.",3),
						new Choice("Maximal Direction - interacts appropriately 25-49% of the time, but may need restraint due to socially inappropriate behaviors.",2),
						new Choice("Total Assistance - interacts appropriately <25% of time and may need restraint due to socially inappropriate behaviors",1)
						
						],
					"Cognition"),

				new Question(
					"39Q. Problem Solving",
					[
						new Choice("Complete Independence - consistently recognizes problems when present, makes appropriate decisions, initiates and carries out sequence of steps to solve complex problems until the task is completed, and self-corrects if errors are made.",7),
						new Choice("Modified Independence - usually recognizes present probme, with only mild difficulty makes appropriate decisions, initiates and carries out sequence of steps to solve complex problems, or requires more than a reasonable time to make appropriate decisions or complex probmlems.",6),
						new Choice("Supervision - requires supervision (E.g. cuing or coaxing) to solve less routine problems only under stressful or unfamiliar conditions but <10% of the time",5),
						new Choice("Minimal Direction - solves routine problems 75-90% of the time",4),
						new Choice("Moderate Direction - solves routine problems 50-74% of the time",3),
						new Choice("Maximal Direction - solves routine problems 25-49% of the time. needs direction more than half time to initiate, plan, or complete simple daily activities and may need restraint for safety.",2),	
						new Choice("Total Assistance - solves routine problems <25% of the time. needs direction nearly all the time, or does not effectively solve problems, and may require constant 1-to-1 direction to complete simple daily tasks. may need safety restraint.",1)
					],
					"Cognition"),

				new Question(
					"39R. Memory",
					[
						new Choice("Complete Independence - recognizes people frequently encountered, remembers daily routines, and executes requests of others without need for repetition",7),
						new Choice("Modified Independence - appears to have only mild difficulty  recognizing people frequently encountered, remembering daily routines, and responding to requests of others. May use self-initiated or environmental cues, prompts or aids.",6),
						new Choice("Supervision - requires prompting (cuing, repetition, reminders) only under stressful or unfamiliar conditions, but no more than 10% of the time",5),
						new Choice("Minimal Prompting - recognizes 75-90% of the time",4),
						new Choice("Moderate Prompting - recognizes 50-74% of the time",3),
						new Choice("Maximal Prompting - recognizes 25-49% of the time, needs prompting more than half the time",2),
						new Choice("Total Assistance - recognizes <25% of the time, or does not effectively recognize and remember",1)
						],
					"Cognition")

	];

	this.userScores = Array(this.questions.length).fill(7); // initializes array to keep track of score for each question. 26 total questions	
}

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

	this.questions = [
				new Question(
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
					"3A. Dressing Upper Body (clothes, shoes, permanent orthoses; dressing, wearing, undressing)",
					[
						new Choice("Requires total assistance", 0),
						new Choice("Requires partial assistance with clothes without buttons, zippers or laces (cwobzl)", 1),
							new Choice("Independent with cwobzl; requires adaptive devices and/or specific settings (adss)", 2),
							new Choice("Independent with cwobzl; does not require adss; needs assistance or adss only for bzl.", 3),
						new Choice("Dresses (any clothes) independently; does not require adaptive devices or specific setting", 4)
					],
					"Self-Care"),

				new Question(
					"3B. Dressing Lower Body (clothes, shoes, permanent orthoses; dressing, wearing, undressing)",
					[
						new Choice("Requires total assistance", 0),
						new Choice("Requires partial assistance with clothes without buttons, zippers or laces (cwobzl)", 1),
							new Choice("Independent with cwobzl; requires adaptive devices and/or specific settings (adss)", 2),
							new Choice("Independent with (cwobzl) without adss; needs assistance or adss only for bzl.", 3), 							  
						new Choice("Dresses (any clothes) independently; does not require adaptive devices or specific setting", 4)
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
					"16. Transfers - wheelchair-car (approach car, lock w/c, remove arm and footrests, transfers to/from car, brings w/c in/out of car)",
					[
						new Choice("Requires total assistance", 0),	
						new Choice("Needs partial assistance and/or supervision and/or adaptive devices", 1),
						new Choice("Transfers independent; does not require adaptive devices (or does not require wheelchair)", 2)
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

	this.sendReportByEmail = function(){

		var bodyText = "";
		for(i=0; i< this.questions.length; i++){
			var q = this.questions[i];
			var choice = q.choiceFromScore(this.userScores[i]);
			bodyText += q.title + "\n" + "(" + choice.value + ") " + choice.description + "\n\n";
		}

		prepareEmailandSend({
			id_text: $$('#case_id').val(),
			reportTitle: "SCIM III Report",
			assessmentType: $$('input[name="timePoint"]:checked').val(),
			totalScore: $$('#scimScore span').html(),
			bodyText: bodyText
		});

	};

}

var Question = function(title,choices,category){
		this.title = title;
		this.choices = choices;
		this.category = category;
};

Question.prototype.choiceFromScore = function(score){
	if(score != null){
		for(k=0; k<this.choices.length; k++){
			var c = this.choices[k];
			if(c.value == score){
				return c;
			}
		}
	}else{
		return {description: "error: score is null.", value: null};
	}
};

var Choice = function(desc,value){
	this.description = desc;
	this.value = value;
};


// *******************	******************  *******************  *******************  *******************
// *******************	******************  *******************  *******************  *******************

// CMS PAI QI Assessment Class
// Reference: https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/IRF-Quality-Reporting/Downloads/DRAFT-IRF-PAI-FOR-OCT-2016.pdf

var PAIQI_Scale = function () {

	this.categories = [
		{
			name: "Self-care",
			items: [
				new Activity("A. Eating", "The ability to use suitable utensils to bring food to the mouth and swallow food once the meal is presented on a table/tray. Includes modified food consistency."),
				new Activity("B. Oral hygiene", "The ability to use suitable items to clean teeth. [Dentures (if applicable): The ability to remove and replace dentures from and to the mouth, and manage equipment for soaking and rinsing them.]"),
				new Activity("C. Toileting hygiene", "The ability to maintain perineal hygiene, adjust clothes before and after using the toilet, commode, bedpan or urinal. If managing an ostomy, include wiping the opening but not managing equipment. "),
				new Activity("E. Shower/bathe self", "The ability to bathe self in shower or tub, including washing, rinsing, and drying self. Does not include transferring in/out of tub/shower."),
				new Activity("F. Upper body dressing", " The ability to put on and remove shirt or pajama top; includes buttoning, if applicable."),
				new Activity("G. Lower body dressing", "The ability to dress and undress below the waist, including fasteners; does not include footwear."),
				new Activity("H. Putting on/taking off footwear", "The ability to put on and take off socks and shoes or other footwear that is appropriate for safe mobility.")
			]
		},

		{
			name: "Mobility",
			items: [	
				new Activity("A. Roll left and right", "The ability to roll from lying on back to left and right side, and return to lying on back."),
				new Activity("B. Sit to lying", "The ability to move from sitting on side of bed to lying flat on the bed."),
				new Activity("C. Lying to sitting on side of bed", "The ability to safely move from lying on the back to sitting on the side of the bed with feet flat on the floor, and with no back support."),
				new Activity("D. Sit to stand", "The ability to safely come to a standing position from sitting in a chair or on the side of the bed."),
				new Activity("E. Chair/bed-to-chair transfer", "The ability to safely transfer to and from a bed to a chair (or wheelchair)."),
				new Activity("F. Toilet transfer", "The ability to safely get on and off a toilet or commode."),
				new Activity("G. Car transfer", "The ability to transfer in and out of a car or van on the passenger side. Does not include the ability to open/close door or fasten seat belt."),
				new Activity("I. Walk 10 feet", "Once standing, the ability to walk at least 10 feet in a room, corridor or similar space."),
				new Activity("J. Walk 50 feet with two turns", "Once standing, the ability to walk at least 50 feet and make two turns. "),
				new Activity("K. Walk 150 feet", "Once standing, the ability to walk at least 150 feet in a corridor or similar space."),
				new Activity("L. Walking 10 feet on uneven surfaces", "The ability to walk 10 feet on uneven or sloping surfaces, such as grass or gravel."),
				new Activity("M. 1 step (curb)", "The ability to step over a curb or up and down one step"),
				new Activity("N. 4 steps", "The ability to go up and down four steps with or without a rail."),
				new Activity("O. 12 steps", "The ability to go up and down 12 steps with or without a rail."),
				new Activity("P. Picking up object", "The ability to bend/stoop from a standing position to pick up a small object, such as a spoon, from the floor."),
				new Activity("R. Wheel 50 feet with two turns", "Once seated in wheelchair/scooter, the ability to wheel at least 50 feet and make two turns."),
				new Activity("S. Wheel 150 feet", "Once seated in wheelchair/scooter, the ability to wheel at least 150 feet in a corridor or similar space.")
			]
		}
	];

	this.choices = [
    new Choice("Independent - Patient completes the activity by him/herself with no assistance from a helper.",6),
    new Choice("Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity.",5),
    new Choice("Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently.",4),
    new Choice("Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort.",3),
    new Choice("Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort.",2),
    new Choice("Dependent - Helper does ALL of the effort to complete activity. Or, requires 2-person assistance to complete",1)
	];

	const self = this; // cache workaround for 'this' scope conflict
	this.totalItems = function(){
		var n = 0;
		for(i=0;i<self.categories.length;i++){
			for(j=0;j<self.categories[i].items.length;j++){ n++; }
		}
		return n;
	}();

	// initializes array to keep track of score for each question.
	this.userScores = [];
	for(i=0;i<this.totalItems;i++){
		this.userScores[i] = 6;	
	}

	this.sendReportByEmail = function(){

		var bodyText = "";
		var totalItemCounter = 0;

		for(i=0; i<this.categories.length; i++){
			bodyText += this.categories[i].name + "\n\n";

			for(j=0;j<this.categories[i].items.length;j++){
				var activity = this.categories[i].items[j];
				var choice = activity.choiceFromScore(this.userScores[totalItemCounter],this.choices);
				bodyText += activity.title + "\n" + "(" + choice.value + ") " + choice.description + "\n\n";
				totalItemCounter++;
			}
		}

		prepareEmailandSend({
			id_text: $$('#case_id').val(),
			reportTitle: "PAI QI Report",
			assessmentType: $$('input[name="timePoint"]:checked').val(),
			totalScore: $$('#paiqiScore span').html(),
			bodyText: bodyText
		});

	};

};

var Activity = function(title,description){
	this.title = title;
	this.description = description;
};

Activity.prototype.choiceFromScore = function(score,choices){
	if(score != null){
		for(k=0; k<choices.length; k++){
			var c = choices[k];
			if(c.value == score){
				return c;
			}
		}
	}else{
		return {description: "error: score is null.", value: null};
	}
};

// Generic Email function used for all scales.
// Receives expected data points as a params object 
function prepareEmailandSend(params) {

	// replaces any undefined values with empty strings
	var data = {
		id_text: params.id_text || "",
		reportTitle: params.reportTitle || "",
		assessmentType: params.assessmentType || "",
		totalScore: params.totalScore || "",
		bodyText: params.bodyText || ""
	};

	var now = new Date();
	var timestampString = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear(); 
	var subj = data.id_text + " " + data.reportTitle;

	var reportText = data.reportTitle + "\nDate: " + timestampString + "\n" +
	"Case ID: " + data.id_text + "\n" +
	"Assessment Type: " + data.assessmentType + "\n" +
	"Total Score: " + data.totalScore + "\n\n";
	reportText += data.bodyText;

	location.href = encodeURI('mailto:?&subject='+subj+'&body='+reportText);
}