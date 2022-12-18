# ACTUALIZACIÓN: La Solución es verificar que cada "db.connect()" tenga su "await" 🤦🏻

elis@perezmusic ~/Dev/NextJS/05-teslo-shop-elis (main) $ yarn build
yarn run v1.22.19
$ next build
info  - Loaded env from /home/elis/Dev/NextJS/05-teslo-shop-elis/.env
info  - Linting and checking validity of types  
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data ..Connected to MongoDB: mongodb://localhost:27017/teslodb
Disconnected from MongoDB
info  - Collecting page data  
[  ==] info  - Generating static pages (12/66)Connected to MongoDB: mongodb://localhost:27017/teslodb
Connected to MongoDB: mongodb://localhost:27017/teslodb
Disconnected from MongoDB

Error occurred prerendering page "/product/men_raven_lightweight_zip_up_bomber_jacket". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database
Disconnected from MongoDB

Error occurred prerendering page "/product/men_turbine_short_sleeve_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
[   =] info  - Generating static pages (16/66)Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database
Disconnected from MongoDB
Disconnected from MongoDB

Error occurred prerendering page "/product/men_solar_roof_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/men_3d_large_wordmark_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/men_3d_t_logo_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/men_3d_small_wordmark_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/men_plaid_mode_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb

Error occurred prerendering page "/product/men_let_the_sun_shine_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database

Error occurred prerendering page "/product/men_battery_day_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database
We were already connected to the database

Error occurred prerendering page "/product/men_powerwall_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/men_cybertruck_bulletproof_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database
We were already connected to the database

Error occurred prerendering page "/product/men_s3xy_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/men_3d_wordmark_long_sleeve_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/men_3d_t_logo_long_sleeve_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database

Error occurred prerendering page "/product/chill_pullover_hoodie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Disconnected from MongoDB

Error occurred prerendering page "/product/men_chill_full_zip_hoodie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/men_chill_quarter_zip_pullover_-_white". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Disconnected from MongoDB

Error occurred prerendering page "/product/men_chill_quarter_zip_pullover_-_gray". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb

Error occurred prerendering page "/product/relaxed_t_logo_hat". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database
We were already connected to the database

Error occurred prerendering page "/product/3d_large_wordmark_pullover_hoodie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/cybertruck_graffiti_hoodie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/thermal_cuffed_beanie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/women_cropped_puffer_jacket". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database
We were already connected to the database

Error occurred prerendering page "/product/women_turbine_cropped_long_sleeve_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
[    ] info  - Generating static pages (43/66)
Error occurred prerendering page "/product/women_raven_slouchy_crew_sweatshirt". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/women_chill_half_zip_cropped_hoodie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database
We were already connected to the database

Error occurred prerendering page "/product/women_t_logo_long_sleeve_scoop_neck_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/women_turbine_cropped_short_sleeve_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb
Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database
Connected to MongoDB: mongodb://localhost:27017/teslodb

Error occurred prerendering page "/product/women_small_wordmark_short_sleeve_v-neck_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database
We were already connected to the database
We were already connected to the database

Error occurred prerendering page "/product/women_t_logo_short_sleeve_scoop_neck_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/women_plaid_mode_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database
Connected to MongoDB: mongodb://localhost:27017/teslodb

Error occurred prerendering page "/product/women_corp_jacket". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database
Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database
Disconnected from MongoDB

Error occurred prerendering page "/product/kids_cybertruck_long_sleeve_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/kids_scribble_t_logo_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Disconnected from MongoDB
We were already connected to the database

Error occurred prerendering page "/product/kids_cybertruck_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/kids_3d_t_logo_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Disconnected from MongoDB
We were already connected to the database

Error occurred prerendering page "/product/kids_racing_stripe_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/kids_checkered_tee". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/scribble_t_logo_onesie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/made_on_earth_by_humans_onesie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
We were already connected to the database

Error occurred prerendering page "/product/kids_corp_jacket". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)

Error occurred prerendering page "/product/zero_emissions_(almost)_onesie". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb
Connected to MongoDB: mongodb://localhost:27017/teslodb
We were already connected to the database

Error occurred prerendering page "/product/kids_cyberquad_bomber_jacket". Read more: https://nextjs.org/docs/messages/prerender-error
MongoNotConnectedError: Client must be connected before running operations
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:20:33
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at executeOperation (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/operations/execute_operation.js:16:37)
    at FindCursor._initialize (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/find_cursor.js:54:50)
    at FindCursor.[kInit] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:428:14)
    at next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:499:22)
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:192:13
    at maybePromise (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/utils.js:357:5)
    at FindCursor.next (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/cursor/abstract_cursor.js:188:41)
    at Collection.findOne (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/mongodb/lib/collection.js:234:76)
Connected to MongoDB: mongodb://localhost:27017/teslodb
Connected to MongoDB: mongodb://localhost:27017/teslodb
info  - Generating static pages (66/66)

> Build error occurred
Error: Export encountered errors on following paths:
	/product/[slug]: /product/3d_large_wordmark_pullover_hoodie
	/product/[slug]: /product/chill_pullover_hoodie
	/product/[slug]: /product/cybertruck_graffiti_hoodie
	/product/[slug]: /product/kids_3d_t_logo_tee
	/product/[slug]: /product/kids_checkered_tee
	/product/[slug]: /product/kids_corp_jacket
	/product/[slug]: /product/kids_cyberquad_bomber_jacket
	/product/[slug]: /product/kids_cybertruck_long_sleeve_tee
	/product/[slug]: /product/kids_cybertruck_tee
	/product/[slug]: /product/kids_racing_stripe_tee
	/product/[slug]: /product/kids_scribble_t_logo_tee
	/product/[slug]: /product/made_on_earth_by_humans_onesie
	/product/[slug]: /product/men_3d_large_wordmark_tee
	/product/[slug]: /product/men_3d_small_wordmark_tee
	/product/[slug]: /product/men_3d_t_logo_long_sleeve_tee
	/product/[slug]: /product/men_3d_t_logo_tee
	/product/[slug]: /product/men_3d_wordmark_long_sleeve_tee
	/product/[slug]: /product/men_battery_day_tee
	/product/[slug]: /product/men_chill_full_zip_hoodie
	/product/[slug]: /product/men_chill_quarter_zip_pullover_-_gray
	/product/[slug]: /product/men_chill_quarter_zip_pullover_-_white
	/product/[slug]: /product/men_cybertruck_bulletproof_tee
	/product/[slug]: /product/men_let_the_sun_shine_tee
	/product/[slug]: /product/men_plaid_mode_tee
	/product/[slug]: /product/men_powerwall_tee
	/product/[slug]: /product/men_raven_lightweight_zip_up_bomber_jacket
	/product/[slug]: /product/men_s3xy_tee
	/product/[slug]: /product/men_solar_roof_tee
	/product/[slug]: /product/men_turbine_short_sleeve_tee
	/product/[slug]: /product/relaxed_t_logo_hat
	/product/[slug]: /product/scribble_t_logo_onesie
	/product/[slug]: /product/thermal_cuffed_beanie
	/product/[slug]: /product/women_chill_half_zip_cropped_hoodie
	/product/[slug]: /product/women_corp_jacket
	/product/[slug]: /product/women_cropped_puffer_jacket
	/product/[slug]: /product/women_plaid_mode_tee
	/product/[slug]: /product/women_raven_slouchy_crew_sweatshirt
	/product/[slug]: /product/women_small_wordmark_short_sleeve_v-neck_tee
	/product/[slug]: /product/women_t_logo_long_sleeve_scoop_neck_tee
	/product/[slug]: /product/women_t_logo_short_sleeve_scoop_neck_tee
	/product/[slug]: /product/women_turbine_cropped_long_sleeve_tee
	/product/[slug]: /product/women_turbine_cropped_short_sleeve_tee
	/product/[slug]: /product/zero_emissions_(almost)_onesie
    at /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/next/dist/export/index.js:404:19
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Span.traceAsyncFn (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/next/dist/trace/trace.js:79:20)
    at async /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/next/dist/build/index.js:1229:21
    at async Span.traceAsyncFn (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/next/dist/trace/trace.js:79:20)
    at async /home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/next/dist/build/index.js:1091:17
    at async Span.traceAsyncFn (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/next/dist/trace/trace.js:79:20)
    at async Object.build [as default] (/home/elis/Dev/NextJS/05-teslo-shop-elis/node_modules/next/dist/build/index.js:65:29)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
elis@perezmusic ~/Dev/NextJS/05-teslo-shop-elis (main) $ 
