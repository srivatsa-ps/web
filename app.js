var app = angular.module('mainApp', ['ngRoute']);

app.controller('JournalCtrl', function($scope){
	$scope.pageTitle = 'Journal';
	$scope.entries=[
		{
			"Title": "Reflective entry",
			"Date": "10/4/23",
			"Time": "10:00 pm",
			"Feeling": "Alright",
			"Why": "From now on, I would like to work a bit more to find my voice. Knowing who I am just a little bit better so that I can love myself more with each passing day. The thought is a little sad actually that we are so busy with our lives, we don't have enough time to grow."
		},
		{
			"Title": "Vent",
			"Date": "16/4/23",
			"Time": "4:00 pm",
			"Feeling": "Depressed",
			"Why": "The mind can be its own worst enemy sometimes. More so than angry comment, uncaring action, or thoughtless spewed words by other to you. You can say the worst things to yourself. You can make yourself cry why? Why are you so mean to yourself?"
		},
		{
			"Title": "Am I distant",
			"Date": "20/4/23",
			"Time": "12:00 am",
			"Feeling": "Depresed",
			"Why": "Am I always going to keep others at arm's length? You will never be able to make true, close friends like that. You must learn to give completely. Not be afraid freely love. Freely give love and affection to everyone."
		},
		{
			"Title": "Appearance",
			"Date": "22/4/23",
			"Time": "8:00 am",
			"Feeling": "Confident",
			"Why": "Why would I care about how I look? What's the purpose for it? So that I can be liked by others? I already know I am beautiful."
		}
	]
});

app.controller('CommunitiesCtrl', function($scope){
	$scope.pageTitle = 'Communities';
	$scope.communities= [
		{
			"Name": "Addiction",
			"img": "views/addiction.jpg"
		},
		{
			"Name": "ADHD",
			"img": "views/adhd1.jpg"
		},
		{
			"Name": "Anxiety",
			"img": "views/anxiety1.jpg",
			
		},
		{
			"Name": "Autism",
			"img": "views/autism.jpg"
		},
		{
			"Name": "Bipolar",
			"img": "views/bipolar1.jpg"
		},
		{
			"Name": "Depression",
			"img": "views/depression1.jpg"
		},
		{
			"Name": "Eating Disorder",
			"img": "views/eatingdisorder.jpg"
		},
		{
			"Name": "OCD",
			"img": "views/ocd.jpg"
		},
		{
			"Name": "Personality disorder",
			"img": "views/personality.jpg"
		},
		{
			"Name": "PTSD",
			"img": "views/ptsd.jpg"
		},
		{
			"Name": "Schizophrenia",
			"img": "views/schizo.jpg"
		}
	]
		});

		app.controller('MeditationCtrl', function($scope){
			$scope.pageTitle = 'Meditation';
			$scope.meditation = [
				{
					"Title": "Clear your mind",
					"audio": "views/med-clear-5-min.mp3",
					"display": true
				},
				{
					"Title": "Meditate anywhere",
					"audio": "views/med-anywhere.mp3",
					"display": false
				},
				{
					"Title": "Relaxation",
					"audio": "views/med-relax.mp3",
					"display": false
				},
				{
					"Title": "Anxiety",
					"audio": "views/med-anxiety.mp3",
					"display": false
				},
			]
			//$scope.display = function(index){
			//	for (var i = 0; i < $scope.meditation.length; i++) {
			//		$scope.meditation[i].display = false;
			//	}
			//	$scope.meditation[index].display = true;
			//};
			$scope.displayAudio = function(x){
				var new_audio = $scope.meditation.indexOf(x);
				for (var i = 0; i < $scope.meditation.length; i++) {
					$scope.meditation[i].display = false;
				}
				$scope.meditation[new_audio].display = true;

			}
		});

		app.controller('Ctrl', function($scope){
			$scope.links=['Journal', 'Meditation', 'Communities'];
		});

		app.controller('resourceCtrl', function($scope){
			$scope.img = 'views/findsupport.jpg';
		});

		app.config(function($routeProvider){

			$routeProvider
			.when('/', {
				templateUrl: 'main.html',
				controller: 'Ctrl'
			})
			.when('/journal', {
				templateUrl: 'views/journal.html',
				//template: "<h1>Journal</h1>",
				controller: 'JournalCtrl'
			})
			.when('/communities', {
				templateUrl: 'views/communities.html',
				//template: "<h1>Communities</h1>",
				controller: 'CommunitiesCtrl'
			})
			.when('/meditation', {
				templateUrl: 'views/meditation.html',
				//template:"<h1>Meditation</h1>",
				controller: 'MeditationCtrl'
			})
			.when('/resources', {
				templateUrl: 'views/resources.html',
				controller: 'resourceCtrl'
				//template:"<h1>Meditation</h1>",
				//controller: 'MeditationCtrl'
			}).otherwise({
				redirectTo: '/home'
			});

		});
