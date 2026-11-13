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
];
