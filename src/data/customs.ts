// 习俗知识文章。以 Elvis 的原文为底，改动处都已跟他标明。
export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  body: string[];
  en?: { title: string; summary: string; body: string[] };
};

export const articles: Article[] = [
  {
    slug: 'hand-money',
    title: '逝者手边的钱，是留给谁的？',
    summary: '那不是给逝者带走的，是留给子孙的「手尾钱」。入棺前拿出来分给家人。',
    date: '2026-11-06',
    body: [
      '逝者手边放的那些钱，不是给他带走的。老一辈讲，那是留给子孙的「手尾钱」。',
      '以前帮逝者洗好身、穿好衣、化好妆之后，家属会把钱放在他手边。早年放的是铜钱，铜钱哗啦啦的声音，代表逝者留下很多家产。',
      '入棺之前，一定要把钱拿出来，平均分给家里的亲人，表示一家人公平对待，谁都不偏。',
      '老一辈讲，手尾钱分给子孙，是把家产传下去，希望子孙日后富贵。',
      '放多少钱？没有硬性规定。民间多数放双数，或者挑吉利的数字，像 200、600、800。重要的不是数目大小，是这份心意。',
      '现在亲人离世，家属可以把钱装进红包，由我们或自己家人放到逝者手里。入棺之前再拿出来，分到手尾钱的家人，要好好收着，也能是一种纪念。',
      '拿到手尾钱，要怎么收？老一辈的讲法是，用红包或红布包好，放在钱包、衣柜，或者神台的抽屉里。最好不要拿去花掉；就算要存进银行，也是一次存进去，不要一点一点拿出来用。',
      '也有家属把手尾钱捐给慈善团体，当作替先人积福。留在身边是纪念，捐出去也是一份心，怎样处理都可以。',
      '各地习俗略有不同，以上讲法供大家参考，不必迷信。家里怎么做，跟长辈商量就好。',
    ],
    en: {
      "title": "What Is “Hand Money” at a Chinese Funeral?",
      "summary": "The money placed by the hand of the deceased is not for them to take away. It is “hand money” (手尾钱), left for the children and grandchildren, and shared out before the casket is closed.",
      "body": [
        "If you have seen money or red packets placed by the hand of the deceased at a Chinese funeral, you may have wondered what it is for. It is not money for the journey. The older generation call it “hand money” (手尾钱, shou wei qian): the last money passed down from the deceased to the family.",
        "In the past, after the deceased had been washed, dressed and made up, the family placed money by their hand. Long ago it was copper coins, and the jingling sound stood for the wealth the deceased was leaving behind.",
        "Before the casket is closed, the money must be taken back out and shared equally among the family, a sign that everyone is treated fairly and no one is favoured.",
        "The elders say that sharing hand money with the children and grandchildren passes the family's fortune on to them, in the hope that they will do well in life.",
        "How much should you put? There is no fixed amount. Most families choose an even number or a lucky figure such as RM200, RM600 or RM800. What matters is the thought, not the size.",
        "Today, the family can put the money in a red packet, and either our team or a family member places it in the hand of the deceased. It is taken out again before the casket is closed. Whoever receives a share should keep it well, as a keepsake.",
        "How do you keep hand money? Traditionally it is wrapped in a red packet or red cloth and kept in a wallet, a wardrobe or the drawer of the family altar. It is best not to spend it. If you bank it, deposit it all at once rather than taking it out bit by bit.",
        "Some families donate their hand money to charity, as a way of earning merit for the deceased. Keeping it is a way of remembering; giving it away is a kindness too. Either is fine.",
        "Customs differ from place to place and between dialect groups. This is shared for reference only, with no need to be superstitious. How your family does it is best decided together with your elders."
      ]
    },
  },
  {
    slug: 'wedding-during-mourning',
    title: '家里办丧事，婚事怎么办？',
    summary: '以前要守孝三年才能完婚，老一辈也讲婚事谈好的可以在百日内办。',
    date: '2026-11-09',
    body: [
      '家里有人走了，偏偏子孙的婚事已经在谈，这时候怎么办？这是很多家属会问我们的问题。',
      '以前父母走了，子女要守孝三年。有一个讲法是，孩子出世的头三年，都离不开妈妈的怀抱，所以子女守孝三年，是报答父母的恩。',
      '这个讲法很早就有。《论语》里，孔子的学生宰我嫌守孝三年太长，孔子回他：「子生三年，然后免于父母之怀。」意思是孩子生下来，要三年才离得开父母的怀抱。',
      '守孝的时候，家里不办喜事，要等三年满了，才可以完婚。',
      '百日也有讲究。人走后的一百天，家人照样给逝者上茶、送饭，好像逝者还在家里陪着大家。',
      '老一辈讲，婚事已经谈好的子孙，可以赶在这一百天里嫁娶；过了百日，就要再等一年。',
      '守孝期间，还有其他讲究。以潮州人为例，有些家庭一年内穿素色衣服，不吃肉、不喝酒；一年内不去别人的婚礼、满月酒，也不去庙里答谢神恩，要送礼金可以托人带去；三年内，家门不贴红对联。',
      '现在，守孝不用守到三年，百日也没有硬性规定。福建、潮州、客家、广东，每个籍贯的讲究都不一样。',
      '各地习俗略有不同，以上讲法供大家参考，不必迷信。家里怎么做，可以问问家里的师父，或者跟长辈商量。',
    ],
    en: {
      "title": "Getting Married During the Mourning Period: What Chinese Custom Says",
      "summary": "In the past, children mourned their parents for three years before marrying. The older generation also say that a wedding already agreed on can be held within the first 100 days.",
      "body": [
        "A family member has passed away, but a wedding in the family is already being planned. What now? It is one of the questions families ask us most.",
        "In the past, when a parent died, the children mourned for three years. One explanation is that for the first three years of life, a child is almost always in its mother's arms, so three years of mourning repays that care.",
        "The idea is very old. In the Analects, Confucius's student Zai Wo complained that three years of mourning was too long. Confucius replied: “A child is three years old before it leaves its parents' arms.”",
        "During mourning, the family did not hold celebrations. A wedding had to wait until the three years were over.",
        "The first 100 days also matter. For 100 days after the death, the family still offers tea and meals to the deceased, as if they were still at home with everyone.",
        "The older generation say that if a wedding has already been agreed, it can be held within these 100 days. If it misses the 100 days, the couple should wait another year.",
        "There are other mourning customs too. In some Teochew families, for example, the family wears plain colours for a year and avoids meat and alcohol; does not attend other people's weddings, full-month celebrations or temple thanksgiving events for a year, though gift money can be sent through someone else; and does not put up red couplets on the door for three years.",
        "Today, few families observe the full three years, and there is no strict rule about the 100 days either. Hokkien, Teochew, Hakka and Cantonese families each have their own practices.",
        "Customs differ from place to place and between dialect groups. This is shared for reference only, with no need to be superstitious. Ask the master conducting the rites, or decide together with your elders."
      ]
    },
  },
  {
    slug: 'mourning-staff',
    title: '孝子手上那支孝杖，是怎么来的？',
    summary: '很早以前，孝杖是一根真的拐杖。父亲的丧事用竹，母亲的丧事用木。',
    date: '2026-11-12',
    body: [
      '孝子手上拿的那支孝杖，有一个讲法是，很早以前，它是一根真的拐杖。',
      '以前家里有长辈走了，孝子守在灵前，哭到吃不下、睡不好，身体一天比一天虚。守丧、办丧事又忙，很多孝子忙到累倒，要靠一根拐杖才撑得住。',
      '《礼记·问丧》里也有这样的说法：「孝子丧亲，哭泣无数，服勤三年，身病体羸，以杖扶病也。」意思是孝子失去父母，哭了不知道多少回，守丧又辛苦，身体病了、瘦了，所以要拿杖扶着。',
      '孝杖也有讲究。父亲的丧事用竹，母亲的丧事用木。',
      '《礼记》写的是「苴杖，竹也；削杖，桐也」：父亲的丧事拿竹杖，母亲的丧事拿削过的桐木杖。为什么是竹和桐？汉代的《白虎通》有一个解释：竹，是「蹙」，心里揪着；桐，是「痛」。两样材料，都是借名字讲孝子的心情。',
      '这根拐杖一代一代传下来，慢慢变短、变小，演变成丧礼上孝子拿在手上的一支小棍，成了一个礼数。',
      '到了现在，有些家庭连这支小棍也不拿了。台湾客家的礼俗资料就提到，现代告别式穿黑色丧服的家属，很多不戴孝帽、不拿孝杖，只在手臂上别一块麻做的孝章。拿不拿，各家照自己的习惯。',
      '各地习俗略有不同，以上讲法供大家参考，不必迷信。家里怎么做，跟长辈商量就好。',
    ],
    en: {
      "title": "Why Does the Son Carry a Mourning Staff at a Chinese Funeral?",
      "summary": "Long ago, the mourning staff was a real walking stick. Bamboo is used when a father dies, and wood when a mother dies.",
      "body": [
        "The short staff the son holds at a Chinese funeral is called the mourning staff (孝杖, xiao zhang). One explanation is that, long ago, it was a real walking stick.",
        "When a parent died, the son kept vigil by the coffin, crying until he could not eat or sleep, and grew weaker by the day. Between mourning and arranging the funeral, many sons were worn out and needed a stick just to stay on their feet.",
        "The Book of Rites (礼记) says the same: a son who loses a parent cries without end, and when his body grows ill and thin, he leans on a staff to support himself.",
        "There are rules for the staff too. Bamboo is used for a father's funeral and wood for a mother's.",
        "The Book of Rites specifies a bamboo staff for a father and a trimmed staff of paulownia wood for a mother. Why these two? One explanation from the Han dynasty text Bai Hu Tong is that the words sound like feelings: bamboo (竹) like “heart-wrenching” (蹙), and paulownia (桐) like “pain” (痛).",
        "Passed down over generations, the walking stick became shorter and smaller, until it turned into the small stick the son holds today, a gesture of respect rather than a support.",
        "Today some families no longer use it at all. At many modern farewell services, mourners in black wear only a hemp mourning band on the arm, without a mourning hat or staff. Each family follows its own practice.",
        "Customs differ from place to place and between dialect groups. This is shared for reference only, with no need to be superstitious. How your family does it is best decided together with your elders."
      ]
    },
  },
  {
    slug: 'mourning-clothes-colours',
    title: '丧礼上有人穿红，是什么意思？',
    summary: '披麻戴孝的麻布故意不舒服；孙辈、曾孙、玄孙各穿不同颜色，玄孙穿红代表五代同堂。',
    date: '2026-11-12',
    body: [
      '「披麻戴孝」，子女身上那块麻布穿起来不舒服，是故意的。最亲的人，本来就该受最多的苦。',
      '古时候的丧服分五等，叫「五服」。跟逝者越亲，穿的麻越粗，守的孝也越久。最重的一等叫「斩衰」，是子女为父母穿的，布边不缝，守孝三年。',
      '台湾客家的礼俗资料也写：直系的儿子、媳妇和还没出嫁的女儿，穿粗麻布，领口下面不缝边，腰上绑麻带；已经出嫁的女儿，穿白麻布。',
      '孙辈穿蓝。隔了一代，就不需要穿得太重。曾孙穿绿，再往下，颜色又淡一点。到了玄孙，穿红。',
      '所以你在丧礼上看到有人穿红，那代表往生者活到看见第五代。五代同堂，老人家叫这个喜丧。走的时候是带着福气走的，所以最小的那一辈可以穿红。',
      '不过颜色各地不一样。新加坡有同行写的是孙辈戴绿、曾孙戴蓝；台湾客家的资料是曾孙穿蓝、玄孙穿红。玄孙穿红这一点，几个地方都一样。',
      '我们这行做久了会发现一件事：老祖宗设计这套东西的时候，想得很细。很多规矩现在的人不懂了，但懂了之后你会发现，每一条背后都有道理。',
      '各地习俗略有不同，以上讲法供大家参考，不必迷信。家里怎么做，跟长辈商量就好。',
    ],
    en: {
      "title": "Why Do Some Mourners Wear Red? Chinese Funeral Clothing Colours by Generation",
      "summary": "The coarse hemp worn by the children is meant to be uncomfortable. Grandchildren, great-grandchildren and great-great-grandchildren wear different colours, and red means the deceased lived to see five generations.",
      "body": [
        "The rough hemp cloth worn by the children at a Chinese funeral (披麻戴孝) is uncomfortable on purpose. Those closest to the deceased are meant to bear the most.",
        "In ancient times, mourning dress was divided into five grades (五服). The closer you were to the deceased, the coarser the hemp and the longer the mourning. The heaviest grade, worn by children for their parents, used unhemmed cloth and meant three years of mourning.",
        "Records of Hakka customs in Taiwan describe the same: sons, daughters-in-law and unmarried daughters wear coarse hemp with the collar left unhemmed and a hemp belt at the waist, while married daughters wear white hemp.",
        "Grandchildren wear blue. One generation further away, there is no need to dress as heavily. Great-grandchildren wear green, a lighter colour again. Great-great-grandchildren wear red.",
        "So if you see someone in red at a funeral, it means the deceased lived to see a fifth generation. Five generations under one roof is what the elders call a “happy funeral” (喜丧). The deceased left with blessings, so the youngest generation may wear red.",
        "The colours do vary. One Singapore funeral company describes grandchildren in green and great-grandchildren in blue, while Hakka records from Taiwan give great-grandchildren blue and great-great-grandchildren red. Red for the great-great-grandchildren is the same in all of them.",
        "After years in this work, one thing stands out: our ancestors thought these customs through very carefully. Many rules are no longer understood today, but once you know the reason, each one makes sense.",
        "Customs differ from place to place and between dialect groups. This is shared for reference only, with no need to be superstitious. How your family does it is best decided together with your elders."
      ]
    },
  },
  {
    slug: 'foot-end-rice',
    title: '脚尾饭是什么？为什么筷子要直插？',
    summary: '人刚走时在脚边摆的那碗饭，筷子直插，是给他路上带着的。',
    date: '2026-11-12',
    body: [
      '人刚走的时候，我们会在脚边摆一碗饭，上面插一双筷子，有些人还会放一粒蛋。这碗叫脚尾饭。',
      '这是闽南一带传下来的习俗。闽南的丧葬资料就写：在逝者脚边摆一碗插着竹筷的干饭，叫「拜脚尾饭」。',
      '筷子要直插，不能平放。意思是这碗饭不是给活人吃的，是给他路上带着的。',
      '老人家讲，人走的那段路不好走，吃一口、穿好鞋，才上路。',
      '脚尾不只有饭。闽南习俗里，逝者脚下还会点一盏长明灯，照他要走的路；家人也会在脚边烧纸钱，叫「烧脚尾纸」。饭、灯、纸，都是怕他一个人上路，饿着、摸黑、缺了什么。',
      '所以你小时候在餐桌上把筷子插进饭里，被阿嬷骂，不是因为没礼貌，是因为那个动作，只有送人的时候才做。',
      '直插的筷子，看起来就像香插在香炉里。平常吃饭这样插，等于是在拜过世的人，难怪长辈会生气。',
      '以前没有人特地跟你解释。各地习俗略有不同，以上讲法供大家参考，不必迷信。以后你想知道什么，可以问我们。',
    ],
    en: {
      "title": "Foot-End Rice: Why Chopsticks Stand Upright in Rice at a Chinese Funeral",
      "summary": "The bowl of rice placed at the feet of the deceased, with chopsticks standing upright, is food for the journey ahead.",
      "body": [
        "When someone has just passed away, we place a bowl of rice at their feet with a pair of chopsticks standing upright in it. Some families add an egg. This is called foot-end rice (脚尾饭).",
        "It is a custom handed down from southern Fujian (Minnan). Records of Minnan funeral customs describe a bowl of plain rice with bamboo chopsticks standing in it, placed by the feet of the deceased, called “offering the foot-end rice”.",
        "The chopsticks must stand upright, never lie flat. It shows that this rice is not for the living. It is for the deceased to take on the road.",
        "The elders say the road after death is not easy. Have a bite to eat and put on good shoes before setting off.",
        "It is not only rice at the feet. In Minnan custom, a lamp is also lit by the feet to light the way, and the family burns paper money there, called “burning foot-end paper”. Rice, light and paper: all so the deceased does not set off alone, hungry, in the dark or lacking anything.",
        "So if your grandmother scolded you as a child for sticking your chopsticks upright in your rice, it was not about manners. That gesture is only made when sending someone off.",
        "Chopsticks standing in rice look just like joss sticks in an incense burner. Doing it at the dinner table is like making an offering to the dead, which is why elders get upset.",
        "No one may ever have explained this to you. Customs differ from place to place and between dialect groups, and this is shared for reference only, with no need to be superstitious. If there is anything else you would like to know, just ask us."
      ]
    },
  },
  {
    slug: "condolence-money",
    title: "去吊唁，白金要怎么包？",
    summary: "白金包单数，用白信封或直接交给家属都可以。离开时丧家给的红线和糖，一个保平安，一个扫去心头苦。",
    date: "2026-11-14",
    body: [
      "朋友家里有人走了，要去灵堂吊唁，很多人第一个问题是：白金要包多少？怎么给才不失礼？",
      "白金，有人叫帛金，福建话讲 pek kim，就是送给丧家的慰问金，帮忙分担丧事的开销。给不给、给多少，没有硬性规定，看交情和心意就好。",
      "数目方面，华人习惯包单数，例如 RM31、RM51、RM101。老一辈的讲法是，双数是喜事用的，坏事不要成双，所以白事包单数。",
      "信封用白色，不用红色，因为红色代表喜庆。没有白信封也没关系，直接把钱交给家属也可以。",
      "什么时候给？一般是上香、鞠躬之后，或者离开前，交给家属，或者放进接待处的白金箱。很多灵堂会有人帮忙登记名字和数目，丧家事后才知道要谢谁。",
      "吊唁时穿素色衣服，上一支香或者向往生者三鞠躬，家属回礼时，我们也稍微鞠躬回礼。",
      "离开的时候，丧家通常会给一条红线和几粒糖。红线代表吉祥、保平安，有人系在身上，有人放进口袋；糖是让你吃一点甜，扫去心头的苦。人家给的，好好收下就是了。",
      "走的时候，不要讲「再见」或「下次见」。老一辈觉得这种场合讲再见不吉利，点个头、轻声道别就够了。",
      "有的长辈还会提醒，吊唁回来先用花水洗脸、洗手，去去晦气，以前用石榴花，没有的话用别的花代替也可以。",
      "各地习俗略有不同，以上讲法供大家参考，不必迷信。最要紧的是那份心意，家里怎么做，跟长辈商量就好。",
    ],
    en: {
      title: "Condolence Money at a Chinese Funeral: How Much and How to Give",
      summary: "Give an odd amount, in a white envelope or handed over directly. The red thread and sweets you receive when leaving are for good luck and to sweeten away the bitterness.",
      body: [
        "When someone you know loses a family member and you go to the wake, the first question is often: how much condolence money should I give, and how do I give it properly?",
        "Condolence money, called 白金 or 帛金 (pek kim in Hokkien), is a gift to the bereaved family to help with the cost of the funeral. There is no fixed rule on whether or how much to give. It depends on your relationship and what feels right.",
        "Chinese families usually give an odd amount, such as RM31, RM51 or RM101. The elders say even numbers are for happy occasions, and misfortune should not come in pairs.",
        "Use a white envelope, not a red one, because red is for celebrations. If you do not have a white envelope, handing the money directly to the family is fine.",
        "When do you give it? Usually after offering incense or bowing, or just before you leave. Hand it to a family member or put it in the condolence box at the reception table, where someone often records your name and the amount so the family knows whom to thank.",
        "Wear plain, muted colours. Offer a stick of incense or bow three times to the deceased, and when the family bows in thanks, bow slightly in return.",
        "As you leave, the family will often give you a red thread and a few sweets. The red thread stands for good luck and protection; some people tie it on, others keep it in a pocket. The sweet is to taste something sweet and wash away the bitterness. Simply accept them politely.",
        "When leaving, avoid saying “goodbye” or “see you again”. The elders believe it is unlucky at a funeral. A nod or a quiet farewell is enough.",
        "Some elders also suggest washing your face and hands with flower water when you get home, to wash off bad luck. Pomegranate flowers were used in the past; other flowers will do.",
        "Customs differ from place to place and between dialect groups. This is shared for reference only, with no need to be superstitious. What matters most is the thought, and how your family does it is best decided with your elders.",
      ],
    },
  },
  {
    slug: "first-seventh-day",
    title: "头七是哪一天？那一晚家里要做什么？",
    summary: "人走后每七天做一次，共七次、四十九天。头七传说是亡魂最后一次回家，家人准备饭菜，晚上早点睡。",
    date: "2026-11-14",
    body: [
      "办完丧事，长辈常会提醒：「头七记得要做。」头七到底是哪一天？那一晚又要做什么？",
      "先讲「做七」。老一辈的做法是，人走后每七天做一次法事或拜祭，一共七次，合起来四十九天，叫「七七」。一般的说法跟佛教「中阴」的观念有关，认为人走后四十九天里，魂魄还在等待去处。不过也有法师说，佛教本身并没有做七的制度，这是后来民间的习俗。",
      "头七就是第一个七，民间多数从过世那天算起的第七天。不过各地算法不一样，有的会请师父或道长帮忙算日子，跟长辈确认最稳当。",
      "为什么头七特别重要？传说这一天，亡魂会最后一次回到家里看看家人，所以也有人叫「回魂夜」。",
      "那一晚，家里会摆好祭台，点香、点蜡烛，烧一些纸钱，再准备一桌饭菜，让他回来吃一顿。",
      "到了晚上，老一辈会叫家人早点睡，半夜不要起身走动。讲法是，怕他回来看见家人，舍不得走，耽误了投胎。",
      "之后的几个七，各籍贯做法都不一样，谁负责哪一个七也不同。例如客家人有的由子女一起办头七，有的由儿子办。马来西亚很多家庭现在只做单数的头七、三七、五七、七七，比较简单。",
      "其实做七，说到底是给家人一个机会，在头一个多月里，好好想念、好好送别。",
      "各地习俗略有不同，以上讲法供大家参考，不必迷信。家里怎么做，跟长辈商量就好。",
    ],
    en: {
      title: "The First Seventh Day (头七) After a Death: When It Is and What Families Do",
      summary: "Rites are held every seven days, seven times, for 49 days. On the first seventh day, the spirit is said to come home one last time, so the family prepares a meal and goes to bed early.",
      body: [
        "After a funeral, the elders often remind the family: “Remember the first seventh day.” Which day is it, and what should you do that night?",
        "First, the “sevens” (做七). Traditionally, a rite or prayer is held every seven days after a death, seven times in all, making 49 days, called the “seven sevens”. The usual explanation links it to the Buddhist idea of the intermediate state, in which the soul waits 49 days for its next destination. Some monks point out, however, that Buddhism itself has no such system, and that it grew out of folk custom.",
        "The first seventh day (头七, tou qi) is the first of these. Most families count it as the seventh day from the day of death, but the method differs from place to place. Some ask a monk or Taoist priest to work out the date, and checking with your elders is the safest way.",
        "Why is it so important? Tradition says that on this day the spirit returns home one last time to see the family, which is why it is also called the “night of the returning soul”.",
        "That evening, the family sets up an altar with incense and candles, burns some paper money and prepares a meal so the deceased can have one more dinner at home.",
        "At night, the elders tell everyone to go to bed early and not to get up and walk around. The belief is that if the spirit sees the family, it may not want to leave, delaying its rebirth.",
        "For the later sevens, practices differ by dialect group, and so does who is responsible for each one. Among Hakka families, for example, some hold the first seven together as siblings while others leave it to the sons. Many Malaysian families now hold only the odd ones, the 1st, 3rd, 5th and 7th, to keep things simple.",
        "In the end, the sevens give the family time in those first weeks to remember and to say goodbye properly.",
        "Customs differ from place to place and between dialect groups. This is shared for reference only, with no need to be superstitious. How your family does it is best decided with your elders.",
      ],
    },
  },
  {
    slug: "new-year-in-mourning",
    title: "家里有人走了，今年过年怎么过？",
    summary: "守孝的头一年，传统上不贴红春联、不去亲友家拜年、不派红包。现在很多家庭会简化，跟长辈商量就好。",
    date: "2026-11-14",
    body: [
      "家里今年有人走了，转眼就到农历新年。很多人心里会问：今年还可以过年吗？要注意什么？",
      "传统上，家里办丧事时，门口的春联要先取下来。老一辈讲究的，三年内不贴红色春联，因为红色是喜庆的颜色。以前守孝，父母过世要守三年。",
      "现在多数家庭会简化成第一年。头一个新年，很多传统家庭不贴红春联、不挂灯笼，家里不做喜庆的布置；也有人简单摆一点，或者完全不摆。",
      "拜年方面，守孝的家庭传统上不去别人家拜年作客，怕把丧气带到别人家。有的只去最亲近、不介意的家人那里，去之前先问一声比较好。",
      "红包呢？传统上守孝一年内，丧家不派红包。不过别人给的可以收下。也有家庭还是会给家里的小孩，图个开心。",
      "穿着方面，老一辈会叫守孝的人新年也穿素一点，少穿大红。",
      "反过来，如果你是亲友，知道对方家里今年有丧事，一般不会特地上门拜年。想表示关心，打个电话问候，或者过了元宵再去探望，对方都会明白。",
      "守孝这一年里家里的婚事要怎么安排，可以看我们另一篇《家里办丧事，婚事怎么办？》。",
      "虽然不热闹，团圆饭还是可以一家人一起吃。很多家庭会在这个时候，多想念一下走了的那位亲人。",
      "这些都是家里的习俗，不是硬性规定。各地习俗略有不同，以上讲法供大家参考，不必迷信。家里怎么做，跟长辈商量就好。",
    ],
    en: {
      title: "Chinese New Year During Mourning: What Bereaved Families Traditionally Do",
      summary: "In the first year of mourning, families traditionally avoid red couplets, do not visit others to pay New Year calls and do not give red packets. Many families now simplify; decide with your elders.",
      body: [
        "Someone in the family has passed away this year, and Chinese New Year is coming. Many people wonder: can we still celebrate, and what should we be careful about?",
        "Traditionally, when a family holds a funeral, the couplets at the door are taken down. Stricter families do not put up red couplets for three years, because red is the colour of celebration. In the past, children mourned their parents for three years.",
        "Most families today keep these customs for the first year. At the first New Year, many traditional families put up no red couplets or lanterns and skip festive decorations. Some put up a little; others none at all.",
        "As for visiting, families in mourning traditionally do not visit other homes to pay New Year calls, so as not to bring the shadow of death with them. Some visit only close family who do not mind, and it is best to ask first.",
        "Red packets? Traditionally, a family in mourning does not give red packets for a year, but may still receive them. Some families still give to young children, to keep things happy.",
        "For clothing, elders advise those in mourning to dress more plainly at New Year and avoid bright red.",
        "If you are a friend or relative and know the family is in mourning, you would usually not drop by to pay a New Year call. A phone call, or a visit after the fifteenth day of the New Year, shows you care, and the family will understand.",
        "For how weddings are handled during the mourning year, see our article on getting married during the mourning period.",
        "Even if it is quieter, the family can still sit down together for the reunion dinner. Many families use this time to remember the loved one they have lost.",
        "These are family customs, not fixed rules. Customs differ from place to place and between dialect groups. This is shared for reference only, with no need to be superstitious. How your family does it is best decided with your elders.",
      ],
    },
  },
];
