

	app.controller('AboutCtrl', function ($scope) {
			
             $scope.descriptions = [
              {
              content: 'We are a network of people who believe that network transparency is possible to build and we want to have an important impact on doing that. That is why we have prepared a great tool to help everyone make his or her Wifi details open and clear to everyone.',
              title: 'What we do'
        

            },
            {
              
              content: 'We provide you with a great tool to make a wifi network transparent, become an important member of community and work with us for our common goal.',
              title:   'What we can do for you'
          
            }
            ]
         
              
                $scope.maintitle1 = 'We are a team of Wifi enthusiasts',
                $scope.maintitle2 = 'Across the world there are different legal settings and requirements for sharing of Internet connections. CommonsNet is a webiste which reflects these details and make them transparent to users.',
                $scope.maintitle3 = 'We want people to be provided with clear data about wireless connection they use' 
                $scope.maintitle4 = 'Our system enables to collect all Wifi details in a easy-to-follow wizrd form, and then based on that details generate a human readable pdf file and a machine readeable link'
            
            
            
    		    $scope.sections = [
    
            
        		{
        			subtitle: 'BASIC DETAILS',
        			content: 'We want people to know what are the basic settings of wireless connection like SSID, password, authentication, standard, provided service etc.',
        			icon: ''

        		},
        		{
        			subtitle: 'PAYMENT & TIME LIMIT',
        			content: 'We believe people should get clear information if the wifi they want to use is paid or limited. This section helps you to provide users with clear information about your fee and other limits like data usage and time.',
        			icon: ''
        		},
        
              {
              subtitle: 'CONDITIONS',
              content: 'We want also to make people aware of conditions to use wireless connection and let them know what do they need to do in order to connect to offered wifi.',
              icon: ''
            },
        		{
        			subtitle: 'LEGAL RESTRICTIONS',
        			content: 'We don’t want legal restrictions to be a boundary. We want people to be aware of things they are not allowed to do while connecting to Internet using a wireless connection in a specific place to protect them from the negative consequences.',
        			icon: ''
        		}
        		]

    })
    