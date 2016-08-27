// Instagram
var feed = new Instafeed({
    get: 'user',
    accessToken: '674909336.e4fca26.7906b0e36f3e41f58a6b17ee12e179b6',
    userId: 674909336,
    sortBy: 'most-recent',
    links: true,
    limit: 6,
    resolution: 'standard_resolution',
    clientId: 'e4fca26f6ec747c185a98e84db533f49',
    template: '<a class="image overlay-btn col-md-2 col-sm-4 no-gutter" href="{{link}}" target="_blank" onclick="ga(\'send\', \'event\', \'external click\', \'click\', \'instagram\');"><img src="{{image}}" /></a>'
});
feed.run();