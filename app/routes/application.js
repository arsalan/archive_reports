export default Ember.Route.extend({
	model: function() {
		return data.result;
	}
});

var data = {
	"status": "ok",
	"result" :
	[
		{
			"author": "Arsalan Ahmed",
			"publish_date": "2014-10-10",
			"location": "London, England",
			"archive_name": "The British National Archives",
			"directions": "Take the train to the Kew Gardens station and walk half a mile.",
			"operating_hours": "9 to 5 every day except holidays",
			"work_locations": "2nd floor and part of 3rd floor",
			"camera_allowed": "true",
			"phone_allowed": "true",
			"scanner_allowed": "false",
			"checkout_limit": "upto 4 boxes at a time",
			"prayer and meditation area": "true",
			"food_services": "true",
			"best_contact_person": undefined,
			"contact_info": undefined,
			"collection_notes": "Highly organized catalog",
			"other_notes": "Wonderful place",
			"comments": [
				{
					"author": "Hoda Yousef",
					"publish_date": "2014-10-13",
					"comment_text": "This is a great description but it is lacking in thoroughness.",
					"rating": 4
				},
				{
					"author": "Nadia Yousef",
					"publish_date": "2014-10-14",
					"comment_text": "This does not help me at all!",
					"rating": 2
				}
			]
		},
		{
			"author": "Hoda Yousef",
			"publish_date": "2014-10-09",
			"location": "London, England",
			"archive_name": "The British National Archives",
			"directions": "Take the train to the Kew Gardens station and walk half a mile.",
			"operating_hours": "9 to 5 every day except holidays",
			"work_locations": "2nd floor and part of 3rd floor",
			"camera_allowed": "true",
			"phone_allowed": "true",
			"scanner_allowed": "false",
			"checkout_limit": "upto 4 boxes at a time",
			"prayer and meditation area": "true",
			"food_services": "true",
			"best_contact_person": "Sally Mae",
			"contact_info": "+44 555-555-5555",
			"collection_notes": "Highly organized catalog",
			"other_notes": "Wonderful place",
			"comments": [
				{
					"author": "Nancy Drew",
					"publish_date": "2014-10-09",
					"comment_text": "Hey, this is great",
					"rating": 5
				},
				{
					"author": "Nadia Yousef",
					"publish_date": "2014-10-12",
					"comment_text": "Saved me!",
					"rating": 4
				}
			]
		}
	]
};

/*
var data = {
	"status": "ok",
	"result": [
		{
			"author": "Arsalan Ahmed",
			"publish_date": "2014-10-10",
			"location": "London, England",
			"archive_name": "The British National Archives",
			"directions": "Take the train to the Kew Gardens station and walk half a mile.",
			"operating_hours": "9 to 5 every day except holidays",
			"work_locations": "2nd floor and part of 3rd floor",
			"camera_allowed": "true",
			"phone_allowed": "true",
			"scanner_allowed": "false",
			"checkout_limit": "upto 4 boxes at a time",
			"prayer and meditation area": "true",
			"food_services": "true",
			"best_contact_person": undefined,
			"contact_info": undefined,
			"collection_notes": "Highly organized catalog",
			"other_notes": "Wonderful place",
			"comments": [
				{
					"author": "Hoda Yousef",
					"publish_date": "2014-10-13",
					"comment_text": "This is a great description but it is lacking in thoroughness.",
					"rating": 4
				},

					"author": "Nadia Yousef",
					"publish_date": "2014-10-14",
					"comment_text": "This does not help me at all!",
					"rating": 2
				}
			]
		}
	]
};
*/
