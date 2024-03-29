//@DataStarted
allData = {'JUP 69': {'Name': 'Earphone Case ', 'Price': {'default': 399.0}, 'Catagory': ['men', 'women', 'New Arrivals'], 'Media': ['1.jpeg', '2.jpeg']}, 'JUP 70': {'Name': 'Mens Black Combo 2.0', 'Price': {'default': 1899.0}, 'Catagory': ['Men', 'Combos'], 'Media': ['1.jpeg']}, 'JUP 71': {'Name': 'Mens Black Combo 3.0', 'Price': {'default': 1599.0}, 'Catagory': ['Men', 'Combos'], 'Media': ['1.jpeg']}, 'JUP 72': {'Name': 'Christmas Steel Bottle', 'Price': {'default': 399.0}, 'Catagory': ['Men', 'Women', 'New Arrivals', 'Couples', 'Festivals', 'Kids', 'Bottles'], 'Media': ['1.jpeg', '2.jpeg']}, 'JUP 73': {'Name': 'Christmas Mens Essential Things', 'Price': {'default': 1699.0}, 'Catagory': ['Men', 'combo', 'Festivals'], 'Media': ['1.jpeg', '2.jpeg']}, 'JUP 74': {'Name': 'Holi T-Shirts', 'Price': {'default': 250.0}, 'Catagory': ['Men', 'Women', 'New Arrivals', 'Couples', 'Festival', 'Kids', 'Bestsellers', 'T-shirts'], 'Media': ['1.jpeg', '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.mp4', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg']}, 'JUP 75': {'Name': 'Hot & Cold Glitter Bottle', 'Price': {'default': 680.0}, 'Catagory': ['Men', 'Women', 'New Arrival', 'Couples', ' Kids', 'Bottles'], 'Media': ['1.jpeg', '2.mp4', '3.jpeg', '4.jpeg']}, 'JUP 76': {'Name': 'Customised Laser Cut Pillow', 'Price': {'default': 650.0}, 'Catagory': ['Men', 'Women', 'Couples', 'Kids', 'Valentine', 'Best Sellers', 'Cushions'], 'Media': ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']}, 'JUP 77': {'Name': 'customised Magic Cushion (one side)', 'Price': {'default': 650.0}, 'Catagory': ['Men', 'Women', 'Couples', 'Kids', 'Valentine', 'Best Sellers', 'Cushions'], 'Media': ['1.mp4']}, 'JUP 78': {'Name': 'customised Magic Cushion (two side)', 'Price': {'default': 720.0}, 'Catagory': ['Men', 'Women', 'Couples', 'Kids', 'Valentine', 'Best Sellers', 'Cushions'], 'Media': ['1.mp4']}, 'JUP 79': {'Name': 'customised Magic Cushion (Three side)', 'Price': {'default': 750.0}, 'Catagory': ['Men', 'Women', 'Couples', 'Kids', 'Valentine', 'Best Sellers', 'Cushions'], 'Media': ['1.mp4']}, 'JUP 80': {'Name': 'Ladies Wallet 2.0', 'Price': {'default': 599.0}, 'Catagory': ['Women', 'Valentines', 'Wallets'], 'Media': ['1.jpeg', '2.jpeg', '3.jpeg']}, 'JUP 81': {'Name': 'Panda Theme Kids Flask', 'Price': {'default': 580.0}, 'Catagory': ['Kids', 'Bottles'], 'Media': ['1.jpeg', '2.jpeg']}, 'JUP 82': {'Name': 'Professional Keychain', 'Price': {'default': 350.0}, 'Catagory': ['Men', 'Women', 'Couple', 'kids', 'Keychains', 'Bestsellers', 'Bulk Gifts'], 'Media': ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg']}, 'JUP 83': {'Name': 'Customised Bluetooth Speaker', 'Price': {'default': 599.0}, 'Catagory': ['Men', 'Women', 'Couple', 'Kids', 'Best Sellers', 'Festival'], 'Media': ['1.jpeg', '2.mp4']}, 'JUP 84': {'Name': 'Calender Mug', 'Price': {'default': 350.0}, 'Catagory': ['Men', 'Women', 'Couple', 'Kids', 'Valentine', 'Best Sellers', 'Mugs', 'Bulk Gifts'], 'Media': ['1.jpeg', '2.mp4', '3.jpeg']}, 'JUP 85': {'Name': 'Calender Keychain for 50 years', 'Price': {'default': 399.0}, 'Catagory': ['Men', 'Women', 'Couple', 'kids', 'Keychains', 'Bestsellers', 'Bulk Gifts'], 'Media': ['1.jpeg', '2.jpeg', '3.jpeg']}, 'JUP 86': {'Name': 'Christmas Rompers', 'Price': {'default': 499.0}, 'Catagory': ['kids', 'T-shirts', 'Festivals'], 'Media': ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg']}, 'JUP 87': {'Name': 'High quality digital print with mat MFD frame(2023 New Year Special)', 'Price': {'default': 599.0}, 'Catagory': ['Men', 'Women', 'Couple', 'Kids', 'Frames'], 'Media': ['1.jpeg', '2.mp4']}, 'JUP 88': {'Name': 'Touch Lamp', 'Price': {'default': 799.0}, 'Catagory': ['Men', 'Women', 'Kids', 'Best Sellers', 'Valentine', 'Couple'], 'Media': ['1.jpeg', '2.mp4', '3.mp4']}, 'JUP 89': {'Name': 'LED Cushion', 'Price': {'default': 599.0}, 'Catagory': ['men', 'women', 'Couple', 'Valentine', 'Best sellers', 'Cushions', 'Kids'], 'Media': ['1.jpeg', '2.jpeg', '3.jpeg', '4.mp4', '5.jpeg']}}
//@

function name(jup) {
    return allData[jup]['Name'];
}


function Price(jup) {
    ps = allData[jup]['Price'];
    return ps['default'];
}

// allData = {
//     'JUP 01': {
//         'Name': 'wallet', 'Catagory': ['Mens'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
//         'Price': { 'default': 680 }
//     },
//     'JUP 02': { 'Name': 'Phone cover', 'Catagory': ['phone cover'], 'Media': ['1.jpg', '2.jpg', '3.jpg'], 'Price': { 'default': 200 } },
//     'JUP 03': { 'Name': 'Rainbow steel Water Bottle', 'Catagory': ['Bottle'], 'Media': ['1.jpg'], 'Price': { 'default': 540 } },
//     'JUP 04': { 'Name': 'kada', 'Catagory': ['Men'], 'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.mp4'], 'Price': { 'default': 350 } },
//     'JUP 05': {
//         'Name': 'Steel Water Bottles', 'Catagory': ['Bottle'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
//         'Price': { 'default': 550 }
//     },
//     'JUP 06': { 'Name': 'Apple Cut Pen Stand', 'Catagory': ['Gift'], 'Media': ['1.jpg'], 'Price': { 'default': 550 } },
//     'JUP 07': {
//         'Name': 'Temperature Rainbow Flask', 'Catagory': ['Gift'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
//         'Price': { 'default': 650 }
//     },
//     'JUP 08': { 'Name': 'Hot Cold Flask', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 760 } },
//     'JUP 09': { 'Name': 'Metal Pen', 'Catagory': ['Gift'], 'Media': ['1.jpg'], 'Price': { 'default': 200 } },
//     'JUP 10': { 'Name': 'Vintage Watches', 'Catagory': ['Watches'], 'Media': ['1.jpg', '2.mp4'], 'Price': { 'default': 450 } },
//     'JUP 11': { 'Name': 'Mini Album', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.mp4'], 'Price': { 'default': 450 } },
//     'JUP 12': { 'Name': 'Customized Pen Stand', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 650 } },
//     'JUP 13': { 'Name': 'Couple Bottle Set', 'Catagory': ['Couple'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 1100 } },
//     'JUP 14': { 'Name': 'Metal Strip wallet', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.jpg', '3.jpg'], 'Price': { 'default': 650 } },
//     'JUP 15': { 'Name': 'Leather Ladies Wallet', 'Catagory': ['Ladies'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 560 } },
//     'JUP 16': { 'Name': 'Dancing Cactus', 'Catagory': ['Toy'], 'Media': ['1.mp4', '2.mp4', '3.mp4'], 'Price': { 'default': 1000 } },
//     'JUP 17': { 'Name': 'Temperature steel flask', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 1180 } },
//     'JUP 18': { 'Name': 'Rainbow Thermo Bottle', 'Catagory': ['Bottle'], 'Media': ['1.jpg', '2.jpg', '3.jpg'], 'Price': { 'default': 960 } },
//     'JUP 19': { 'Name': 'Steel Air  Tight Lunch Box', 'Catagory': ['Kids'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 1000 } },
//     'JUP 20': { 'Name': 'customized rotating shadow box', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.mp4', '3.mp4'], 'Price': { 'default': 1100 } },
//     'JUP 21': { 'Name': 'customized Hexa Revolving Lamp', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.jpg', '3.mp4'], 'Price': { 'default': 1100 } },
//     'JUP 22': { 'Name': 'Cubical Revolving lamp with bightest led', 'Catagory': ['Lamps'], 'Media': ['1.mp4'], 'Price': { 'default': 700 } },
//     'JUP 23': {
//         'Name': 'hot and cold couple combo flask', 'Catagory': ['Couple'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//         'Price': { 'default': 1450 }
//     },
//     'JUP 24': { 'Name': 'Customized LED frame', 'Catagory': ['Frame'], 'Media': ['1.jpg', '2.mp4'], 'Price': { 'default': 960 } },
//     'JUP 25': { 'Name': 'Customized luggage tag', 'Catagory': ['Traveling'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 300 } },
//     'JUP 26': { 'Name': 'LED Photo clips', 'Catagory': ['gift'], 'Media': ['1.jpg', '2.jpg', '3.jpg'], 'Price': { 'default': 540 } },
//     'JUP 27': { 'Name': '7in 1 mens combo', 'Catagory': ['Men'], 'Media': ['1.mp4'], 'Price': { 'default': 2240 } },
//     'JUP 28': { 'Name': 'kitkat combo', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.mp4'], 'Price': { 'default': 860 } },
//     'JUP 29': {
//         'Name': 'Pen and wallet combo', 'Catagory': ['Gift'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
//         'Price': { 'default': 599 }
//     },
//     'JUP 30': { 'Name': 'customized magic mug', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.jpg', '3.mp4', '4.mp4'], 'Price': { 'default': 350 } },
//     'JUP 31': { 'Name': 'Unisex zip wallet', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.mp4'], 'Price': { 'default': 550 } },
//     'JUP 32': { 'Name': 'Customized rotating shadow Box', 'Catagory': ['Gift'], 'Media': ['1.mp4'], 'Price': { 'default': 900 } },
//     'JUP 33': {
//         'Name': 'Special caricature', 'Catagory': ['Caricature'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.mp4',
//             'WhatsApp Video 2022-09-08 at 6.45.05 PM.mp4'],
//         'Price': { 'default': 380 }
//     },
//     'JUP 34': { 'Name': 'Customized calender theme mug', 'Catagory': ['Gift'], 'Media': [], 'Price': { 'default': 200 } },
//     'JUP 35': {
//         'Name': 'Customized LED keychain and led pen combo', 'Catagory': ['Gift'],
//         'Media': ['1.jpg', '2.mp4'],
//         'Price': { 'default': 350 }
//     }, 'JUP 36': { 'Name': 'MDF frame with 3 layer', 'Catagory': [], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 960 } },
//     'JUP 37': {
//         'Name': 'Mobile photo stand', 'Catagory': ['Frame'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.mp4'],
//         'Price': { 'default': 199 }
//     },
//     'JUP 38': { 'Name': 'Customized wallet pen and keychain combo', 'Catagory': ['Gift'], 'Media': ['1.mp4'], 'Price': { 'default': 760 } },
//     'JUP 39': { 'Name': 'Rotating lamp with 21 pics', 'Catagory': ['Keychain'], 'Media': ['1.mp4'], 'Price': { 'default': 1400 } },
//     'JUP 40': {
//         'Name': 'Customized wallet pen and keychain combo', 'Catagory': ['Lamp'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//         'Price': { 'default': 760 }
//     },
//     'JUP 41': {
//         'Name': 'customized LED keychain', 'Catagory': ['gift'],
//         'Media': ['1.mp4', '2.mp4'],
//         'Price': { 'default': 160 }
//     }, 'JUP 42': {
//         'Name': 'wallet + pen combo', 'Catagory': ['Gift'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
//             '6.jpg', '7.jpg'],
//         'Price': { 'default': 760 }
//     },
//     'JUP 43': { 'Name': 'steel Bottle', 'Catagory': ['Gift'], 'Media': ['1.jpg', '2.jpg', '3.jpg'], 'Price': { 'default': 460 } },
//     'JUP 44': { 'Name': 'customized steel bottle', 'Catagory': ['Bottle'], 'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'], 'Price': { 'default': 520 } },
//     'JUP 45': { 'Name': 'Customized alarm clock', 'Catagory': ['Bottle'], 'Media': ['1.mp4', '2.jpg'], 'Price': { 'default': 499 } },
//     'JUP 46': { 'Name': 'card holder now with premium pen', 'Catagory': ['Clock'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 350 } },
//     'JUP 47': {
//         'Name': 'leather keychain', 'Catagory': ['Gift'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//         'Price': { 'default': 399 }
//     },
//     'JUP 48': {
//         'Name': 'customized pen and keychain', 'Catagory': ['Keychain'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
//         'Price': { 'default': 199 }
//     },
//     'JUP 49': {
//         'Name': 'Customised pen and keychain combo', 'Catagory': ['Keychain'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//         'Price': { 'default': 360 }
//     },
//     'JUP 50': {
//         'Name': 'matt steel sipper bottle', 'Catagory': ['Bottle'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//         'Price': { 'default': 480 }
//     },
//     'JUP 51': { 'Name': 'Customized electric lighter', 'Catagory': ['Lighter'], 'Media': ['1.jpg', '2.mp4', '3.mp4'], 'Price': { 'default': 570 } },
//     'JUP 52': {
//         'Name': 'customized premium sling bag', 'Catagory': ['Bag'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
//         'Price': { 'default': 780 }
//     },
//     'JUP 53': { 'Name': 'round magic mirror', 'Catagory': ['Mirror'], 'Media': ['1.jpg', '2.mp4'], 'Price': { 'default': 660 } },
//     'JUP 54': { 'Name': 'Customized magic speaker', 'Catagory': ['speaker'], 'Media': ['2.jpg', '2.mp4'], 'Price': { 'default': 599 } },
//     'JUP 55': { 'Name': 'temperature indicator bottle ', 'Catagory': ['Bottle'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 550 } },
//     'JUP 56': {
//         'Name': 'Mens daily essential combo', 'Catagory': ['Men'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],
//         'Price': { 'default': 1640 }
//     },
//     'JUP 57': { 'Name': 'High quality digital print with mat MFD frame', 'Catagory': ['Gift'], 'Media': ['1.jpg'], 'Price': { 'default': 399 } },
//     'JUP 58': {
//         'Name': 'Pen and wallet combo', 'Catagory': ['Men'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
//         'Price': { 'default': 599 }
//     },
//     'JUP 59': { 'Name': 'CROCODILE wallet', 'Catagory': ['Men'], 'Media': ['1.jpg', '2.jpg'], 'Price': { 'default': 599 } },
//     'JUP 60': { 'Name': 'Customized magic cushion', 'Catagory': ['Cushion'], 'Media': ['1.mp4', '2.mp4', '3.mp4'], 'Price': { 'default': 599 } },
//     'JUP 61': {
//         'Name': 'Classic musical led box', 'Catagory': ['Musical'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.mp4'],
//         'Price': { 'default': 640 }
//     },
//     'JUP 62': {
//         'Name': 'customized pen and keychain combo', 'Catagory': ['Keychain'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//         'Price': { 'default': 360 }
//     },
//     'JUP 63': {
//         'Name': ' High quality digital print with mat MFD frame', 'Catagory': ['gift'],
//         'Media': ['1.jpg', '2.jpg'],
//         'Price': { 'default': 340 }
//     },
//     'JUP 64': {
//         'Name': 'High quality digital print with mat MFD frame', 'Catagory': ['Gift'],
//         'Media': ['1.jpg', '2.jpg'],
//         'Price': { 'default': 440 }
//     },
//     'JUP 65': {
//         'Name': 'High quality digital print with mat MFD frame', 'Catagory': ['Gift'],
//         'Media': ['1.jpg', '2.jpg'],
//         'Price': { 'default': 540 }
//     },
//     'JUP 66': {
//         'Name': 'Leather eyewear case', 'Catagory': ['Case'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
//         'Price': { 'default': 440 }
//     },
//     'JUP 67': {
//         'Name': 'Faux leather ladies wallet 2.0 ', 'Catagory': ['Ladies'],
//         'Media': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//         'Price': { 'default': 560 }
//     },
//     'JUP 68': { 'Name': 'Kids lunch box', 'Catagory': ['Kids'], 'Media': ['1.jpg', '2.jpg', '3.jpg'], 'Price': { 'default': 899 } }
// }