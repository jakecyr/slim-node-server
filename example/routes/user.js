const Slim = require('../../dist/slim.class');

const router = Slim.createRouter();

router
    .get('/', async (_req, res) => {
        
        res.cookie('token', '123456')
        res.json([
            { name: 'User 1' },
            { name: 'User 2' },
            { name: 'User 3' },
        ]);

    });

module.exports = router;
