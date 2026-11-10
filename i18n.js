/* ============================================================
   BUS 16 - languages (English / العربية / Français).
   Every page loads this file as a normal <script> inside <head>, BEFORE anything else:
       <script src="i18n.js"></script>
   The choice is remembered on the phone (localStorage, and a cookie as backup).
   To change a sentence, edit it below in all three blocks (en, ar, fr).
   In HTML:  data-i18n="key"  data-i18n-html="key"  data-i18n-ph="key" (placeholder)
             data-i18n-aria="key" (aria-label)  data-i18n-title="key" (title)
   In JS:    I18N.t('key', { n: 5 })      ({n} in the sentence is replaced)
   ============================================================ */
(function () {
  'use strict';
  var LANGS = ['en', 'ar', 'fr'], KEY = 'bus16_lang';

  var en = {
    'lang.name': 'English', 'lang.label': 'Language',
    /* ----- login ----- */
    'l.tagline': 'Know exactly when your bus arrives',
    'l.notcfg': "Sign-in isn't connected yet. Open <b>firebase-config.js</b> and paste your Firebase settings.",
    'l.signin': 'Sign in',
    'l.google': 'Continue with Google',
    'l.name': 'Full name', 'l.name.ph': 'Your full name',
    'l.username': 'Username', 'l.username.ph': 'e.g. mike_16',
    'l.username.help': 'Username: 3 to 20 letters (a-z), numbers or _, starting with a letter.',
    'l.wait': 'Please wait…',
    'l.other': 'Use a different account',
    'l.u.title': 'Choose a username', 'l.u.sub': 'This is how you appear in Bus 16.',
    'l.si.title': 'Sign in to play', 'l.si.sub': 'Bus 16 works without an account. You only need one to play games and collect Bus Points.', 'l.later': 'Not now',
    'l.continue': 'Continue', 'l.saving': 'Saving…',
    'l.err.name': 'Enter your full name.',
    'l.err.taken': 'That username is taken. Try another one.', 'l.err.taken2': 'That username was just taken. Try another one.',
    'l.err.load': 'We couldn’t load your account.', 'l.err.reload': 'Reload the page and try again.',
    'e.perm': 'The database isn’t ready yet (Firebase > Realtime Database > Rules).',
    'e.net': 'No connection. Check your internet and try again.',
    'e.popup': 'Your browser blocked the Google window. Allow pop-ups for this site and try again.',
    'e.exists': 'This email is already registered with a different sign-in method.',
    'e.disabled': 'This account has been disabled.',
    'e.notallowed': 'This sign-in method isn’t switched on yet in Firebase (Authentication > Sign-in method).',
    'e.domain': 'This website address isn’t approved in Firebase yet (Authentication > Settings > Authorized domains).',
    'e.generic': 'Something went wrong. Please try again.',
    'g.fail': 'Can’t reach the sign-in service.\nCheck your connection and reload the page.',
    /* ----- profile ----- */
    'p.doc': 'Complete your profile · Bus 16',
    'p.back': 'Back', 'p.title': 'Complete your profile',
    'p.lead': 'Everything here is optional. It helps tailor your Bus 16 experience to you.',
    'p.photo': 'Profile photo', 'p.optional': 'Optional', 'p.add': 'Add photo', 'p.change': 'Change photo', 'p.remove': 'Remove',
    'p.dob': 'Date of birth',
    'p.country': 'Country', 'p.lebanon': 'Lebanon', 'p.other': 'Other country',
    'p.countryname': 'Country name', 'p.countryname.ph': 'Your country',
    'p.district': 'District', 'p.district.sel': 'Select your district',
    'p.districttxt': 'District / region', 'p.districttxt.ph': 'Your district or region',
    'p.city': 'City / town', 'p.city.ph': 'e.g. Kornayel',
    'p.phone': 'Phone number', 'p.phone.ph': '03 123 456',
    'p.phone.help': 'Optional. Outside Lebanon, start with + and your country code.',
    'p.save': 'Save profile', 'p.saving': 'Saving…', 'p.saved': 'Saved.',
    'p.err.photo': 'We couldn’t use that picture. Try a JPG or PNG.',
    'p.err.dob': 'Enter your date of birth (you must be at least 13).', 'p.err.country': 'Enter your country.',
    'p.err.districttxt': 'Enter your district or region.', 'p.err.district': 'Choose your district.',
    'p.err.city': 'Enter your city or town.', 'p.err.phone': 'Enter a valid phone number, for example 03 123 456.',
    'p.err.perm': 'We couldn’t save. The database rules may not be published yet.',
    /* ----- home ----- */
    'h.doc': 'Bus 16', 'h.brand': 'Bus 16', 'h.beta': 'Demo version',
    'h.account': 'My account', 'h.cp': 'Complete your profile', 'h.cp.sub': 'To tailor your app experience',
    'h.ad': 'Ad', 'h.ad.aria': 'Shops on the line: offers',
    'h.breaking': 'Alert', 'h.news.aria': 'Latest news on the route',
    'h.game': 'Game 16', 'h.game.sub': 'Collect points and win', 'h.game.aria': 'Game 16: all games',
    'h.bp.aria': 'Bus Points: {n} BP. Open', 'h.bp.title': 'Bus Points', 'h.bp.bal': 'Your balance', 'h.bp.lead': 'BP are your Bus 16 points. Spin the daily wheel in Game 16 to win more. Other ways to earn and spend them are coming soon.', 'h.bp.go': 'Go to the daily spin',
    'h.where': 'Where is it?', 'h.where.aria': 'Where is the bus? Open the map',
    'h.spin.label': 'Daily spin', 'h.spin.aria': 'Daily spin: spin the wheel for free Bus Points', 'sp.pull': 'Pull the handbrake to stop the wheel', 'sp.brake': 'Pull the handbrake', 'sp.brake.aria': 'Handbrake. Press or drag up to stop the wheel', 'sp.try': 'Try again', 'sp.try.msg': 'No prize this time. Spin again, it is free.', 'sp.again': 'Spin again', 'sp.won': 'You won', 'sp.collect': 'Collect', 'sp.next': 'Next spin in {t}', 'sp.back': 'Come back tomorrow', 'sp.back.lead': 'The wheel resets every day at midnight, Beirut time.', 'sp.err': 'Could not save your spin. Check your connection and try again.', 'sp.sound': 'Sound', 'sp.close': 'Close', 'sp.wheel.aria': 'Prize wheel on the front tyre of the bus',
    'h.spin.sub': 'Win up to 100 BP', 'gm.lead': 'All the Bus 16 games in one place. Play and collect Bus Points.', 'gm.sub': 'Spin for free BP', 'gm.go': 'Spin', 'u.h': 'h', 'u.m': 'min', 'u.s': 's', 'gm.wait': 'Done today', 'gm.more': 'More games are coming soon.',
    'h.under.aria': 'Next bus',
    'h.cardA.aria': 'Bus times from Kornayel to Bhamdoun', 'h.cardB.aria': 'Bus times from Bhamdoun to Kornayel',
    'h.next': 'Next bus in',
    'h.price': 'Price list', 'h.price.from': 'From {p} LBP',
    'h.shops': 'Shops on the line', 'h.village': 'Our village', 'h.nav.aria': 'Sections', 'h.close': 'Close',
    'h.demo.offer': 'Sample offer to explain the idea.', 'h.allshops': 'All shops on the line',
    'h.shops.lead': 'Shops along the Bus 16 road from Kornayel to Bhamdoun.',
    'h.shops.join': 'Have a shop on the line? Soon you’ll be able to join and appear on the bus screen.',
    'h.news.title': 'Route news', 'h.news.lead': 'Road news from Bus 16 drivers.',
    'h.news.soon': 'Coming soon: drivers will send news from the app and it will appear here instantly.',
    'h.ago.min': '{n} min ago', 'h.ago.hr': '{n} h ago',
    'h.soon': 'Coming soon',
    'h.g1': 'Collect points every time you ride the bus.', 'h.g2': 'Swap your points for a free ride.', 'h.g3': 'The game is being prepared.',
    'h.v.count': '{n} towns', 'h.v.search': 'Search for your town', 'h.v.empty': 'More towns coming soon',
    'h.v.info': 'Info and events for {name} are coming soon.', 'h.v.back': 'Back to towns',
    'h.starts': 'Departs {t}', 'h.tomorrow': 'tomorrow', 'h.then': 'then {t}',
    'h.times.lead': 'Bus 16 departure times. Upcoming times in yellow.',
    'h.times.note': 'Sample times to explain the idea. They will be replaced with the real times after we talk to the bus manager.',
    'h.price.lead': 'The fare depends on where you get off.', 'h.price.note': 'Prices are in Lebanese pounds (LBP).', 'h.cur': 'LBP',
    'h.service': 'Service',
    'h.me': 'My account', 'h.guest.lead': 'Sign in with Google and pick a username to spin the daily wheel and collect Bus Points. Everything else works without an account.', 'h.bp.guest': 'BP are your Bus 16 points. Sign in to start collecting them with the daily wheel.', 'h.edit': 'Edit profile', 'h.signout': 'Sign out',
    /* ----- places ----- */
    'place.kornayel': 'Kornayel', 'place.bhamdoun': 'Bhamdoun', 'place.kola': 'Kola',
    /* ----- map ----- */
    'm.doc': 'Map · Bus 16', 'm.back': 'Back',
    'm.rider': 'Rider', 'm.setup': 'Setup',
    'm.toKola': 'To Kola', 'm.toKorn': 'To Kornayel',
    'm.iam': 'I am at', 'm.myloc': '📍 My location', 'm.nostopsopt': 'No stops yet',
    'm.demo': 'Demo mode', 'm.demo.desc': '(fast-forward time to show the buses moving)',
    'm.startat': 'Start at', 'm.speed': 'Speed',
    'm.sample': 'Prototype: times shown are sample times, not the real timetable.',
    'm.how1': 'Find Kornayel on the map (or type it below).',
    'm.how2': 'Tap <b>Draw route</b>, then click along the bus road <b>from Kornayel to Kola</b>. Zoom in and click often on curves.',
    'm.how3': 'Tap <b>Add stop</b>, click on the route where a stop is, type its name.',
    'm.how4': 'Tap <b>Copy route code</b> and paste it in <b>map.html</b>, replacing the line that starts with <b>const SAVED_ROUTE</b>.',
    'm.search.ph': 'Search a place, e.g. Bhamdoun', 'm.go': 'Go',
    'm.draw': '✏️ Draw route', 'm.addstop': '📌 Add stop', 'm.undo': '↩️ Undo last', 'm.clear': '🗑 Clear all', 'm.copy': 'Copy route code',
    'm.info': '{p} route points, {s} stops, {k} km',
    'm.noroute.t': 'No route yet.', 'm.noroute.s': 'Open the <b>Setup</b> tab and draw the route first.',
    'm.nostops.t': 'No stops yet.', 'm.nostops.s': 'Open the <b>Setup</b> tab and add a few stops.',
    'm.nomore.t': 'No more buses today', 'm.nomore.s': 'Last bus to {dest} has passed {stop}.',
    'm.next': 'Next bus to {dest}', 'm.now': 'Arriving now', 'm.min': '{n} min',
    'm.onroad': '🟢 On the road, {km} km away · reaches {stop} at {t}',
    'm.notleft': '⏳ Not left yet · departs at {t} · reaches {stop} at {t2}',
    'm.bustip': 'Bus {t} · to {dest}', 'm.demo.clock': 'DEMO',
    'm.a.drawfirst': 'Draw the route and add stops first.', 'm.a.noloc': 'Location is not available on this device.',
    'm.a.locfail': 'Could not get your location.', 'm.a.routefirst': 'Draw the route first.',
    'm.prompt.stop': 'Stop name?', 'm.confirm.clear': 'Delete the whole route and all stops?',
    'm.copied': 'Copied! Now paste it in map.html, replacing the line that starts with const SAVED_ROUTE.',
    'm.copy.manual': 'Select the text in the box below and copy it manually.',
    'm.nf': 'Not found. Try another spelling.', 'm.sfail': 'Search failed. Check your internet.'
  };

  var ar = {
    'lang.name': 'العربية', 'lang.label': 'اللغة',
    'l.tagline': 'اعرف بالضبط متى بيوصل الباص',
    'l.notcfg': 'تسجيل الدخول مش مربوط بعد. افتح <b>firebase-config.js</b> والصق إعدادات Firebase.',
    'l.signin': 'تسجيل الدخول',
    'l.google': 'المتابعة مع Google',
    'l.name': 'الاسم الكامل', 'l.name.ph': 'اسمك الكامل',
    'l.username': 'اسم المستخدم', 'l.username.ph': 'مثال: mike_16',
    'l.username.help': 'اسم المستخدم: من 3 إلى 20 حرفاً لاتينياً (a-z) أو رقماً أو _ ويبدأ بحرف.',
    'l.wait': 'الرجاء الانتظار…',
    'l.other': 'استعمل حساباً آخر',
    'l.u.title': 'اختر اسم مستخدم', 'l.u.sub': 'هيك بتظهر ببـاص 16.',
    'l.si.title': 'سجّل دخولك لتلعب', 'l.si.sub': 'باص 16 بيشتغل بدون حساب. بتحتاج حساب بس لتلعب وتجمع نقاط الباص.', 'l.later': 'مش هلّق',
    'l.continue': 'متابعة', 'l.saving': 'جاري الحفظ…',
    'l.err.name': 'اكتب اسمك الكامل.',
    'l.err.taken': 'اسم المستخدم مأخوذ. جرّب اسماً آخر.', 'l.err.taken2': 'اسم المستخدم انأخد هلّق. جرّب اسماً آخر.',
    'l.err.load': 'ما قدرنا نحمّل حسابك.', 'l.err.reload': 'أعد تحميل الصفحة وجرّب مرة ثانية.',
    'e.perm': 'قاعدة البيانات مش جاهزة بعد (Firebase > Realtime Database > Rules).',
    'e.net': 'ما في اتصال. تأكّد من الإنترنت وجرّب مرة ثانية.',
    'e.popup': 'المتصفح منع نافذة Google. اسمح بالنوافذ المنبثقة لهالموقع وجرّب مرة ثانية.',
    'e.exists': 'هالبريد الإلكتروني مسجّل بطريقة دخول مختلفة.',
    'e.disabled': 'هالحساب معطّل.',
    'e.notallowed': 'طريقة الدخول هاي مش مفعّلة بعد بـ Firebase (Authentication > Sign-in method).',
    'e.domain': 'عنوان هالموقع مش معتمد بعد بـ Firebase (Authentication > Settings > Authorized domains).',
    'e.generic': 'صار خطأ. جرّب مرة ثانية.',
    'g.fail': 'ما قدرنا نوصل لخدمة تسجيل الدخول.\nتأكّد من الاتصال وأعد تحميل الصفحة.',
    'p.doc': 'أكمل ملفك الشخصي · باص 16',
    'p.back': 'رجوع', 'p.title': 'أكمل ملفك الشخصي',
    'p.lead': 'كل شي هون اختياري. بيساعدنا نخصّص تجربتك ببـاص 16 على ذوقك.',
    'p.photo': 'الصورة الشخصية', 'p.optional': 'اختياري', 'p.add': 'إضافة صورة', 'p.change': 'تغيير الصورة', 'p.remove': 'إزالة',
    'p.dob': 'تاريخ الميلاد',
    'p.country': 'البلد', 'p.lebanon': 'لبنان', 'p.other': 'بلد آخر',
    'p.countryname': 'اسم البلد', 'p.countryname.ph': 'بلدك',
    'p.district': 'القضاء', 'p.district.sel': 'اختر قضاءك',
    'p.districttxt': 'القضاء / المنطقة', 'p.districttxt.ph': 'قضاؤك أو منطقتك',
    'p.city': 'المدينة / البلدة', 'p.city.ph': 'مثال: قرنايل',
    'p.phone': 'رقم الهاتف', 'p.phone.ph': '03 123 456',
    'p.phone.help': 'اختياري. برّا لبنان، ابدأ بـ + ورمز بلدك.',
    'p.save': 'حفظ الملف الشخصي', 'p.saving': 'جاري الحفظ…', 'p.saved': 'تم الحفظ.',
    'p.err.photo': 'ما قدرنا نستعمل هالصورة. جرّب صورة JPG أو PNG.',
    'p.err.dob': 'اكتب تاريخ ميلادك (لازم يكون عمرك 13 سنة أو أكثر).', 'p.err.country': 'اكتب بلدك.',
    'p.err.districttxt': 'اكتب قضاءك أو منطقتك.', 'p.err.district': 'اختر قضاءك.',
    'p.err.city': 'اكتب مدينتك أو بلدتك.', 'p.err.phone': 'اكتب رقم هاتف صحيح، مثلاً 03 123 456.',
    'p.err.perm': 'ما قدرنا نحفظ. يمكن قواعد قاعدة البيانات لسا ما اننشرت.',
    'h.doc': 'باص 16', 'h.brand': 'باص 16', 'h.beta': 'نسخة تجريبية',
    'h.account': 'حسابي', 'h.cp': 'أكمل ملفك الشخصي', 'h.cp.sub': 'لتناسب تجربتك بالتطبيق',
    'h.ad': 'إعلان', 'h.ad.aria': 'محلات على الخط: عروض',
    'h.breaking': 'خبر عاجل', 'h.news.aria': 'آخر الأخبار على الخط',
    'h.game': 'لعبة 16', 'h.game.sub': 'اجمع النقاط واربح', 'h.game.aria': 'لعبة 16: كل الألعاب',
    'h.bp.aria': 'نقاط الباص: {n} BP. افتح', 'h.bp.title': 'نقاط الباص', 'h.bp.bal': 'رصيدك', 'h.bp.lead': 'BP هي نقاطك على باص 16. لفّ دولاب اليوم بلعبة 16 لتربح أكتر. في طرق تانية لتربح وتصرف النقاط جاية قريباً.', 'h.bp.go': 'روح على دولاب اليوم',
    'h.where': 'وين صار؟', 'h.where.aria': 'وين صار؟ افتح الخريطة',
    'h.spin.label': 'دولاب اليوم', 'h.spin.aria': 'دولاب اليوم: لفّ الدولاب واربح نقاط الباص', 'sp.pull': 'ارفع فرام الإيد لتوقف الدولاب', 'sp.brake': 'ارفع فرام الإيد', 'sp.brake.aria': 'فرام الإيد. اضغط أو اسحب لفوق لتوقف الدولاب', 'sp.try': 'جرّب مرة تانية', 'sp.try.msg': 'ما في جايزة هالمرة. لفّ مرة تانية، ببلاش.', 'sp.again': 'لفّ مرة تانية', 'sp.won': 'ربحت', 'sp.collect': 'استلم', 'sp.next': 'اللفّة الجاية بعد {t}', 'sp.back': 'ارجع بكرا', 'sp.back.lead': 'الدولاب بيرجع يشتغل كل يوم عند منتصف الليل، بتوقيت بيروت.', 'sp.err': 'ما قدرنا نحفظ لفّتك. تأكد من الاتصال وجرّب مرة تانية.', 'sp.sound': 'الصوت', 'sp.close': 'سكّر', 'sp.wheel.aria': 'دولاب الجوائز على الدولاب الأمامي للباص',
    'h.spin.sub': 'اربح لحد 100 BP', 'gm.lead': 'كل ألعاب باص 16 بمكان واحد. العب واجمع نقاط الباص.', 'gm.sub': 'لفّ واربح نقاط ببلاش', 'gm.go': 'لفّ', 'u.h': 'س', 'u.m': 'د', 'u.s': 'ث', 'gm.wait': 'خلصت لليوم', 'gm.more': 'ألعاب تانية جاية قريباً.',
    'h.under.aria': 'الباص الجاي',
    'h.cardA.aria': 'أوقات الباص من قرنايل إلى بحمدون', 'h.cardB.aria': 'أوقات الباص من بحمدون إلى قرنايل',
    'h.next': 'الباص الجاي بعد',
    'h.price': 'قائمة الأسعار', 'h.price.from': 'من {p} ل.ل',
    'h.shops': 'محلات عالخط', 'h.village': 'ضيعتنا', 'h.nav.aria': 'أقسام', 'h.close': 'إغلاق',
    'h.demo.offer': 'عرض تجريبي لشرح الفكرة.', 'h.allshops': 'كل المحلات على الخط',
    'h.shops.lead': 'المحلات اللي على طريق باص 16 من قرنايل لبحمدون.',
    'h.shops.join': 'عندك محل على الخط؟ قريباً بتقدر تنضم وتطلع على شاشة الباص.',
    'h.news.title': 'أخبار الخط', 'h.news.lead': 'أخبار الطريق من سواقين باص 16.',
    'h.news.soon': 'قريباً: السواقين بيبعتوا الخبر من التطبيق وبيطلع هون مباشرة.',
    'h.ago.min': 'قبل {n} دقيقة', 'h.ago.hr': 'قبل {n} ساعة',
    'h.soon': 'قريباً',
    'h.g1': 'اجمع نقاط كل ما تركب الباص.', 'h.g2': 'بدّل نقاطك وفوز بمشوار مجاني.', 'h.g3': 'اللعبة قيد التحضير.',
    'h.v.count': '{n} ضيعة', 'h.v.search': 'ابحث عن ضيعتك', 'h.v.empty': 'المزيد من الضيع قريباً',
    'h.v.info': 'معلومات وفعاليات {name} قريباً.', 'h.v.back': 'رجوع للضيع',
    'h.starts': 'ينطلق {t}', 'h.tomorrow': 'بكرا', 'h.then': 'وبعده {t}',
    'h.times.lead': 'أوقات انطلاق باص 16. الأوقات الجاية بالأصفر.',
    'h.times.note': 'أوقات تجريبية لشرح الفكرة. بتتبدّل بالأوقات الحقيقية بعد ما نحكي مع المسؤول عن الباصات.',
    'h.price.lead': 'الأجرة بتختلف حسب وين بتنزل.', 'h.price.note': 'الأسعار بالليرة اللبنانية.', 'h.cur': 'ل.ل',
    'h.service': 'سرفيس',
    'h.me': 'حسابي', 'h.guest.lead': 'سجّل دخولك بحساب Google واختر اسم مستخدم لتلفّ دولاب اليوم وتجمع نقاط الباص. باقي التطبيق بيشتغل بدون حساب.', 'h.bp.guest': 'BP هي نقاطك على باص 16. سجّل دخولك لتبلّش تجمعها من دولاب اليوم.', 'h.edit': 'تعديل الملف الشخصي', 'h.signout': 'تسجيل الخروج',
    'place.kornayel': 'قرنايل', 'place.bhamdoun': 'بحمدون', 'place.kola': 'كولا',
    'm.doc': 'الخريطة · باص 16', 'm.back': 'رجوع',
    'm.rider': 'راكب', 'm.setup': 'الإعداد',
    'm.toKola': 'إلى كولا', 'm.toKorn': 'إلى قرنايل',
    'm.iam': 'أنا عند', 'm.myloc': '📍 موقعي', 'm.nostopsopt': 'ما في محطات بعد',
    'm.demo': 'وضع العرض', 'm.demo.desc': '(تسريع الوقت لعرض حركة الباصات)',
    'm.startat': 'ابدأ عند', 'm.speed': 'السرعة',
    'm.sample': 'نسخة تجريبية: الأوقات المعروضة تجريبية وليست الجدول الحقيقي.',
    'm.how1': 'دوّر على قرنايل بالخريطة (أو اكتبها تحت).',
    'm.how2': 'اضغط <b>رسم المسار</b> وبعدين اضغط على طول طريق الباص <b>من قرنايل إلى كولا</b>. قرّب الخريطة واضغط كتير عالمنعطفات.',
    'm.how3': 'اضغط <b>إضافة محطة</b>، اضغط على المسار مطرح المحطة، واكتب اسمها.',
    'm.how4': 'اضغط <b>نسخ كود المسار</b> والصقه بالملف <b>map.html</b> مكان السطر اللي بيبلش بـ <b>const SAVED_ROUTE</b>.',
    'm.search.ph': 'ابحث عن مكان، مثلاً بحمدون', 'm.go': 'اذهب',
    'm.draw': '✏️ رسم المسار', 'm.addstop': '📌 إضافة محطة', 'm.undo': '↩️ تراجع', 'm.clear': '🗑 مسح الكل', 'm.copy': 'نسخ كود المسار',
    'm.info': '{p} نقطة مسار، {s} محطات، {k} كم',
    'm.noroute.t': 'ما في مسار بعد.', 'm.noroute.s': 'افتح تبويب <b>الإعداد</b> وارسم المسار أولاً.',
    'm.nostops.t': 'ما في محطات بعد.', 'm.nostops.s': 'افتح تبويب <b>الإعداد</b> وأضف كم محطة.',
    'm.nomore.t': 'ما في باصات بعد اليوم', 'm.nomore.s': 'آخر باص إلى {dest} فات على {stop}.',
    'm.next': 'الباص الجاي إلى {dest}', 'm.now': 'واصل هلّق', 'm.min': '{n} دقيقة',
    'm.onroad': '🟢 عالطريق، على بعد {km} كم · بيوصل {stop} الساعة {t}',
    'm.notleft': '⏳ لسا ما طلع · بينطلق الساعة {t} · بيوصل {stop} الساعة {t2}',
    'm.bustip': 'باص {t} · إلى {dest}', 'm.demo.clock': 'عرض',
    'm.a.drawfirst': 'ارسم المسار وأضف المحطات أولاً.', 'm.a.noloc': 'خدمة الموقع مش متوفرة عهالجهاز.',
    'm.a.locfail': 'ما قدرنا نحدد موقعك.', 'm.a.routefirst': 'ارسم المسار أولاً.',
    'm.prompt.stop': 'اسم المحطة؟', 'm.confirm.clear': 'بدك تمسح المسار كله وكل المحطات؟',
    'm.copied': 'تم النسخ! هلّق الصقه بالملف map.html مكان السطر اللي بيبلش بـ const SAVED_ROUTE.',
    'm.copy.manual': 'حدّد النص بالمربع تحت وانسخه يدوياً.',
    'm.nf': 'ما انلقى. جرّب إملاء تاني.', 'm.sfail': 'فشل البحث. تأكّد من الإنترنت.'
  };

  var fr = {
    'lang.name': 'Français', 'lang.label': 'Langue',
    'l.tagline': 'Sachez exactement quand votre bus arrive',
    'l.notcfg': 'La connexion n’est pas encore configurée. Ouvrez <b>firebase-config.js</b> et collez vos paramètres Firebase.',
    'l.signin': 'Se connecter',
    'l.google': 'Continuer avec Google',
    'l.name': 'Nom complet', 'l.name.ph': 'Votre nom complet',
    'l.username': 'Nom d’utilisateur', 'l.username.ph': 'ex. mike_16',
    'l.username.help': 'Nom d’utilisateur : de 3 à 20 lettres (a-z), chiffres ou _, commençant par une lettre.',
    'l.wait': 'Veuillez patienter…',
    'l.other': 'Utiliser un autre compte',
    'l.u.title': 'Choisissez un nom d’utilisateur', 'l.u.sub': 'C’est ainsi que vous apparaîtrez dans Bus 16.',
    'l.si.title': 'Connectez-vous pour jouer', 'l.si.sub': 'Bus 16 fonctionne sans compte. Il n’en faut un que pour jouer et gagner des Bus Points.', 'l.later': 'Pas maintenant',
    'l.continue': 'Continuer', 'l.saving': 'Enregistrement…',
    'l.err.name': 'Saisissez votre nom complet.',
    'l.err.taken': 'Ce nom d’utilisateur est déjà pris. Essayez-en un autre.', 'l.err.taken2': 'Ce nom d’utilisateur vient d’être pris. Essayez-en un autre.',
    'l.err.load': 'Nous n’avons pas pu charger votre compte.', 'l.err.reload': 'Rechargez la page et réessayez.',
    'e.perm': 'La base de données n’est pas encore prête (Firebase > Realtime Database > Rules).',
    'e.net': 'Pas de connexion. Vérifiez votre internet puis réessayez.',
    'e.popup': 'Votre navigateur a bloqué la fenêtre Google. Autorisez les pop-ups pour ce site puis réessayez.',
    'e.exists': 'Cet e-mail est déjà enregistré avec une autre méthode de connexion.',
    'e.disabled': 'Ce compte a été désactivé.',
    'e.notallowed': 'Cette méthode de connexion n’est pas encore activée dans Firebase (Authentication > Sign-in method).',
    'e.domain': 'L’adresse de ce site n’est pas encore autorisée dans Firebase (Authentication > Settings > Authorized domains).',
    'e.generic': 'Une erreur s’est produite. Veuillez réessayer.',
    'g.fail': 'Impossible de joindre le service de connexion.\nVérifiez votre connexion et rechargez la page.',
    'p.doc': 'Complétez votre profil · Bus 16',
    'p.back': 'Retour', 'p.title': 'Complétez votre profil',
    'p.lead': 'Tout est facultatif. Cela nous aide à personnaliser votre expérience Bus 16.',
    'p.photo': 'Photo de profil', 'p.optional': 'Facultatif', 'p.add': 'Ajouter une photo', 'p.change': 'Changer la photo', 'p.remove': 'Supprimer',
    'p.dob': 'Date de naissance',
    'p.country': 'Pays', 'p.lebanon': 'Liban', 'p.other': 'Autre pays',
    'p.countryname': 'Nom du pays', 'p.countryname.ph': 'Votre pays',
    'p.district': 'District', 'p.district.sel': 'Choisissez votre district',
    'p.districttxt': 'District / région', 'p.districttxt.ph': 'Votre district ou région',
    'p.city': 'Ville / village', 'p.city.ph': 'ex. Kornayel',
    'p.phone': 'Numéro de téléphone', 'p.phone.ph': '03 123 456',
    'p.phone.help': 'Facultatif. Hors du Liban, commencez par + et l’indicatif de votre pays.',
    'p.save': 'Enregistrer le profil', 'p.saving': 'Enregistrement…', 'p.saved': 'Enregistré.',
    'p.err.photo': 'Nous n’avons pas pu utiliser cette image. Essayez un JPG ou un PNG.',
    'p.err.dob': 'Saisissez votre date de naissance (13 ans minimum).', 'p.err.country': 'Saisissez votre pays.',
    'p.err.districttxt': 'Saisissez votre district ou région.', 'p.err.district': 'Choisissez votre district.',
    'p.err.city': 'Saisissez votre ville ou village.', 'p.err.phone': 'Saisissez un numéro de téléphone valide, par exemple 03 123 456.',
    'p.err.perm': 'Enregistrement impossible. Les règles de la base de données ne sont peut-être pas encore publiées.',
    'h.doc': 'Bus 16', 'h.brand': 'Bus 16', 'h.beta': 'Version démo',
    'h.account': 'Mon compte', 'h.cp': 'Complétez votre profil', 'h.cp.sub': 'Pour personnaliser votre expérience',
    'h.ad': 'Pub', 'h.ad.aria': 'Commerces sur la ligne : offres',
    'h.breaking': 'Alerte', 'h.news.aria': 'Dernières infos sur la ligne',
    'h.game': 'Jeu 16', 'h.game.sub': 'Cumulez et gagnez', 'h.game.aria': 'Jeu 16 : tous les jeux',
    'h.bp.aria': 'Points Bus : {n} BP. Ouvrir', 'h.bp.title': 'Points Bus', 'h.bp.bal': 'Votre solde', 'h.bp.lead': 'Les BP sont vos points Bus 16. Tournez la roue du jour dans Jeu 16 pour en gagner. D’autres façons d’en gagner et d’en dépenser arrivent bientôt.', 'h.bp.go': 'Aller à la roue du jour',
    'h.where': 'Il est où\u00a0?', 'h.where.aria': 'Où est le bus ? Ouvrir la carte',
    'h.spin.label': 'Roue du jour', 'h.spin.aria': 'Roue du jour : tournez la roue pour gagner des Points Bus', 'sp.pull': 'Tirez le frein à main pour arrêter la roue', 'sp.brake': 'Tirez le frein à main', 'sp.brake.aria': 'Frein à main. Appuyez ou glissez vers le haut pour arrêter la roue', 'sp.try': 'Réessayer', 'sp.try.msg': 'Pas de prix cette fois. Relancez, c’est gratuit.', 'sp.again': 'Relancer', 'sp.won': 'Vous gagnez', 'sp.collect': 'Récupérer', 'sp.next': 'Prochain tour dans {t}', 'sp.back': 'Revenez demain', 'sp.back.lead': 'La roue se remet à zéro chaque jour à minuit, heure de Beyrouth.', 'sp.err': 'Impossible d’enregistrer votre tour. Vérifiez la connexion et réessayez.', 'sp.sound': 'Son', 'sp.close': 'Fermer', 'sp.wheel.aria': 'Roue des prix sur le pneu avant du bus',
    'h.spin.sub': 'Gagnez jusqu’à 100 BP', 'gm.lead': 'Tous les jeux Bus 16 au même endroit. Jouez et cumulez des Points Bus.', 'gm.sub': 'Tournez pour des BP gratuits', 'gm.go': 'Tourner', 'u.h': 'h', 'u.m': 'min', 'u.s': 's', 'gm.wait': 'Fait aujourd’hui', 'gm.more': 'D’autres jeux arrivent bientôt.',
    'h.under.aria': 'Prochain bus',
    'h.cardA.aria': 'Horaires du bus de Kornayel à Bhamdoun', 'h.cardB.aria': 'Horaires du bus de Bhamdoun à Kornayel',
    'h.next': 'Prochain bus dans',
    'h.price': 'Tarifs', 'h.price.from': 'À partir de {p} LBP',
    'h.shops': 'Commerces sur la ligne', 'h.village': 'Notre village', 'h.nav.aria': 'Sections', 'h.close': 'Fermer',
    'h.demo.offer': 'Offre d’exemple pour expliquer l’idée.', 'h.allshops': 'Tous les commerces de la ligne',
    'h.shops.lead': 'Les commerces sur le trajet du bus 16, de Kornayel à Bhamdoun.',
    'h.shops.join': 'Vous avez un commerce sur la ligne ? Bientôt, vous pourrez nous rejoindre et apparaître sur l’écran du bus.',
    'h.news.title': 'Infos de la ligne', 'h.news.lead': 'Les infos de la route par les conducteurs du bus 16.',
    'h.news.soon': 'Bientôt : les conducteurs enverront les infos depuis l’application et elles apparaîtront ici instantanément.',
    'h.ago.min': 'il y a {n} min', 'h.ago.hr': 'il y a {n} h',
    'h.soon': 'Bientôt',
    'h.g1': 'Cumulez des points à chaque trajet en bus.', 'h.g2': 'Échangez vos points contre un trajet gratuit.', 'h.g3': 'Le jeu est en préparation.',
    'h.v.count': '{n} villages', 'h.v.search': 'Rechercher votre village', 'h.v.empty': 'D’autres villages arrivent bientôt',
    'h.v.info': 'Les infos et événements de {name} arrivent bientôt.', 'h.v.back': 'Retour aux villages',
    'h.starts': 'Départ {t}', 'h.tomorrow': 'demain', 'h.then': 'puis {t}',
    'h.times.lead': 'Horaires de départ du bus 16. Les prochains sont en jaune.',
    'h.times.note': 'Horaires d’exemple pour expliquer l’idée. Ils seront remplacés par les vrais horaires après discussion avec le responsable des bus.',
    'h.price.lead': 'Le tarif dépend de l’endroit où vous descendez.', 'h.price.note': 'Les prix sont en livres libanaises (LBP).', 'h.cur': 'LBP',
    'h.service': 'Service',
    'h.me': 'Mon compte', 'h.guest.lead': 'Connectez-vous avec Google et choisissez un nom d’utilisateur pour tourner la roue du jour et gagner des Bus Points. Tout le reste fonctionne sans compte.', 'h.bp.guest': 'Les BP sont vos points Bus 16. Connectez-vous pour commencer à en gagner avec la roue du jour.', 'h.edit': 'Modifier le profil', 'h.signout': 'Se déconnecter',
    'place.kornayel': 'Kornayel', 'place.bhamdoun': 'Bhamdoun', 'place.kola': 'Kola',
    'm.doc': 'Carte · Bus 16', 'm.back': 'Retour',
    'm.rider': 'Passager', 'm.setup': 'Configuration',
    'm.toKola': 'Vers Kola', 'm.toKorn': 'Vers Kornayel',
    'm.iam': 'Je suis à', 'm.myloc': '📍 Ma position', 'm.nostopsopt': 'Aucun arrêt pour l’instant',
    'm.demo': 'Mode démo', 'm.demo.desc': '(accélère le temps pour montrer les bus en mouvement)',
    'm.startat': 'Début à', 'm.speed': 'Vitesse',
    'm.sample': 'Prototype : les horaires affichés sont des exemples, pas l’horaire réel.',
    'm.how1': 'Trouvez Kornayel sur la carte (ou tapez-le ci-dessous).',
    'm.how2': 'Touchez <b>Tracer le trajet</b>, puis cliquez le long de la route du bus <b>de Kornayel à Kola</b>. Zoomez et cliquez souvent dans les virages.',
    'm.how3': 'Touchez <b>Ajouter un arrêt</b>, cliquez sur le trajet à l’endroit de l’arrêt et tapez son nom.',
    'm.how4': 'Touchez <b>Copier le code du trajet</b> et collez-le dans <b>map.html</b>, à la place de la ligne qui commence par <b>const SAVED_ROUTE</b>.',
    'm.search.ph': 'Chercher un lieu, ex. Bhamdoun', 'm.go': 'OK',
    'm.draw': '✏️ Tracer le trajet', 'm.addstop': '📌 Ajouter un arrêt', 'm.undo': '↩️ Annuler', 'm.clear': '🗑 Tout effacer', 'm.copy': 'Copier le code du trajet',
    'm.info': '{p} points de trajet, {s} arrêts, {k} km',
    'm.noroute.t': 'Pas encore de trajet.', 'm.noroute.s': 'Ouvrez l’onglet <b>Configuration</b> et tracez d’abord le trajet.',
    'm.nostops.t': 'Pas encore d’arrêts.', 'm.nostops.s': 'Ouvrez l’onglet <b>Configuration</b> et ajoutez quelques arrêts.',
    'm.nomore.t': 'Plus de bus aujourd’hui', 'm.nomore.s': 'Le dernier bus vers {dest} est déjà passé à {stop}.',
    'm.next': 'Prochain bus vers {dest}', 'm.now': 'Arrive maintenant', 'm.min': '{n} min',
    'm.onroad': '🟢 En route, à {km} km · arrive à {stop} à {t}',
    'm.notleft': '⏳ Pas encore parti · départ à {t} · arrive à {stop} à {t2}',
    'm.bustip': 'Bus {t} · vers {dest}', 'm.demo.clock': 'DÉMO',
    'm.a.drawfirst': 'Tracez d’abord le trajet et ajoutez des arrêts.', 'm.a.noloc': 'La localisation n’est pas disponible sur cet appareil.',
    'm.a.locfail': 'Impossible d’obtenir votre position.', 'm.a.routefirst': 'Tracez d’abord le trajet.',
    'm.prompt.stop': 'Nom de l’arrêt ?', 'm.confirm.clear': 'Supprimer tout le trajet et tous les arrêts ?',
    'm.copied': 'Copié ! Collez-le maintenant dans map.html, à la place de la ligne qui commence par const SAVED_ROUTE.',
    'm.copy.manual': 'Sélectionnez le texte dans la case ci-dessous et copiez-le manuellement.',
    'm.nf': 'Introuvable. Essayez une autre orthographe.', 'm.sfail': 'La recherche a échoué. Vérifiez votre internet.'
  };

  var D = { en: en, ar: ar, fr: fr };
  /* ---------- remembered choice ---------- */
  function readStored() {
    var v = null;
    try { v = localStorage.getItem(KEY); } catch (e) {}
    if (LANGS.indexOf(v) < 0) { var m = /(?:^|;\s*)bus16_lang=(en|ar|fr)/.exec(document.cookie || ''); v = m ? m[1] : null; }
    return LANGS.indexOf(v) >= 0 ? v : null;
  }
  var chosen = readStored();
  var lang = chosen || 'en';
  var root = document.documentElement;
  function setDir() { root.setAttribute('lang', lang); root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr'); }
  setDir();

  function t(k, v) {
    var s = D[lang] && D[lang][k];
    if (s == null) s = en[k];
    if (s == null) return k;
    if (v) s = s.replace(/\{(\w+)\}/g, function (m, n) { return v[n] != null ? v[n] : m; });
    return s;
  }

  function apply(scope) {
    scope = scope || document;
    var q = function (attr, fn) {
      var list = scope.querySelectorAll('[' + attr + ']');
      for (var i = 0; i < list.length; i++) fn(list[i], t(list[i].getAttribute(attr)));
    };
    q('data-i18n', function (e, s) { e.textContent = s; });
    q('data-i18n-html', function (e, s) { e.innerHTML = s; });
    q('data-i18n-ph', function (e, s) { e.setAttribute('placeholder', s); });
    q('data-i18n-aria', function (e, s) { e.setAttribute('aria-label', s); });
    q('data-i18n-title', function (e, s) { e.setAttribute('title', s); });
    var tt = document.querySelector('title[data-i18n-doc]');
    if (tt) document.title = t(tt.getAttribute('data-i18n-doc'));
  }

  function set(l) {
    if (LANGS.indexOf(l) < 0) return;
    lang = chosen = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    try { document.cookie = 'bus16_lang=' + l + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {}
    setDir();
    apply(document);
    try { window.dispatchEvent(new CustomEvent('bus16:lang', { detail: l })); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () { apply(document); });

  window.I18N = {
    LANGS: LANGS, D: D, t: t, apply: apply, set: set,
    get lang() { return lang; },
    get chosen() { return !!chosen; },
    get rtl() { return lang === 'ar'; },
    place: function (k) { return t('place.' + k); },
    // "Kornayel → Bhamdoun" (and "قرنايل ← بحمدون" in Arabic, where the arrow points the other way)
    route: function (a, b) { return t('place.' + a) + (lang === 'ar' ? ' ← ' : ' → ') + t('place.' + b); },
    num: function (n) { return Number(n).toLocaleString('en-US'); },
    // pick the right text from { ar:'..', en:'..', fr:'..' }
    pick: function (o) { return o == null ? '' : (typeof o === 'string' ? o : (o[lang] != null ? o[lang] : o.en)); }
  };
})();
