    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path');
    const userRoutes = require('./routes/user_routes'); 
    const app = express();
    const { sequelize } = require('./config/db'); 
    const bannerRoutes = require('./routes/banner_route');
    const notificationRoutes = require('./routes/notification_route');
    const buisnessTypeRoutes = require('./routes/buisness_type_route');
    const buisnessCategoryRoutes = require('./routes/buisness_category_route');

    app.use(cors());
    app.use(bodyParser.json());

    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


    app.use('/api/skypey/users', userRoutes);
    app.use('/api/banners', bannerRoutes);
    app.use('/api/notifications', notificationRoutes);
    app.use('/api/buisness-types', buisnessTypeRoutes);
    app.use('/api/buisness-categories', buisnessCategoryRoutes);
    const PORT = process.env.PORT || 4001;

    sequelize.sync().then(() => {
        console.log('Database synced');
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    }).catch(err => console.error('Database connection error:', err));
