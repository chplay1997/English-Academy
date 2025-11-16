import { EExerciseType, ETestCategory } from '@/models/assessment.model'

export const grammarTest = [
  {
    testName: 'MINI TEST 1',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1. Chọn đáp án đúng để hoàn thành câu.',
        questions: [
          {
            questionNumber: 1,
            stem: '___ say that the environment is threatened by pollution.',
            options: [
              { key: 'A', value: 'Scientists' },
              { key: 'B', value: 'Scientist' },
              { key: 'C', value: 'A scientist' },
              { key: 'D', value: 'An scientist' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Scientists',
          },
          {
            questionNumber: 2,
            stem: 'Some ___ are organizing road traffic to avoid any accidents.',
            options: [
              { key: 'A', value: 'policemans' },
              { key: 'B', value: 'policeman' },
              { key: 'C', value: 'policemens' },
              { key: 'D', value: 'policemen' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'policemen',
          },
          {
            questionNumber: 3,
            stem: 'The local authority has announced that PREPVN is going to be built in the area.',
            options: [
              { key: 'A', value: 'new librarys' },
              { key: 'B', value: 'new library' },
              { key: 'C', value: 'a new library' },
              { key: 'D', value: 'new libraries' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'a new library',
          },
          {
            questionNumber: 4,
            stem: '___ school is old.',
            options: [
              { key: 'A', value: "Susan's and Steve'" },
              { key: 'B', value: "Susan' and Steve's" },
              { key: 'C', value: "Susan and Steve's" },
              { key: 'D', value: "Susan's and Steve" },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: "Susan and Steve's",
          },
          {
            questionNumber: 5,
            stem: 'After the storm, the ___ toys were soaked from the rain.',
            options: [
              { key: 'A', value: "childrens'" },
              { key: 'B', value: "children's" },
              { key: 'C', value: "children'" },
              { key: 'D', value: 'children' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: "children's",
          },
          {
            questionNumber: 6,
            stem: 'Do you know ___ person over there by the post office?',
            options: [
              { key: 'A', value: 'this' },
              { key: 'B', value: 'that' },
              { key: 'C', value: 'these' },
              { key: 'D', value: 'those' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'that',
          },
          {
            questionNumber: 7,
            stem: '___ is my mobile phone and ___ is your mobile phone on the shelf over there.',
            options: [
              { key: 'A', value: 'these - those' },
              { key: 'B', value: 'that - this' },
              { key: 'C', value: 'those - these' },
              { key: 'D', value: 'this - that' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'this - that',
          },
          {
            questionNumber: 8,
            stem: "___ are my grandparents, and ___ people over there are my friend's grandparents.",
            options: [
              { key: 'A', value: 'those - these' },
              { key: 'B', value: 'these - those' },
              { key: 'C', value: 'this - that' },
              { key: 'D', value: 'that - this' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'these - those',
          },
        ],
      },
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 2. Xác định xem các từ được in đậm là đúng hay sai về mặt ngữ pháp.',
        questions: [
          {
            questionNumber: 9,
            stem: 'How many **womans** work in the restaurant?',
            options: [
              { key: 'A', value: 'Đúng' },
              { key: 'B', value: 'Sai' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Sai',
            correctForm: 'women',
          },
          {
            questionNumber: 10,
            stem: 'They have five children, three girls and two boys.',
            options: [
              { key: 'A', value: 'Đúng' },
              { key: 'B', value: 'Sai' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Đúng',
          },
          {
            questionNumber: 11,
            stem: 'We saw some **deers** on our way to the beach.',
            options: [
              { key: 'A', value: 'Đúng' },
              { key: 'B', value: 'Sai' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Sai',
            correctForm: 'deer',
          },
          {
            questionNumber: 12,
            stem: '**Thiefs** broke into their house and stole some paintings.',
            options: [
              { key: 'A', value: 'Đúng' },
              { key: 'B', value: 'Sai' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Sai',
            correctForm: 'Thieves',
          },
          {
            questionNumber: 13,
            stem: 'At how many parties have you been to this year?',
            options: [
              { key: 'A', value: 'Đúng' },
              { key: 'B', value: 'Sai' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Sai',
            correctForm: 'How many parties have you been to this year?',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 3. Xác định lỗi sai trong các phần được gạch chân trong các câu sau.',
        questions: [
          {
            questionNumber: 14,
            stem: 'There are **a** few **shop** near the university.',
            options: [
              { key: 'A', value: 'a' },
              { key: 'B', value: 'few' },
              { key: 'C', value: 'shop' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'shop',
            errorType: 'Danh từ số ít',
            correctForm: 'shops',
          },
          {
            questionNumber: 15,
            stem: 'Hurry up! We only have **a few** time before the coach leaves.',
            options: [
              { key: 'A', value: 'only' },
              { key: 'B', value: 'a few' },
              { key: 'C', value: 'time' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'a few',
            errorType: 'Từ hạn định dùng cho danh từ không đếm được',
            correctForm: 'a little',
          },
          {
            questionNumber: 16,
            stem: 'How **much** **times** do you need to finish the work?',
            options: [
              { key: 'A', value: 'much' },
              { key: 'B', value: 'times' },
              { key: 'C', value: 'work' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'much',
            errorType: 'Từ hạn định dùng cho danh từ đếm được',
            correctForm: 'many',
          },
          {
            questionNumber: 17,
            stem: 'They have had **lot of** homework in mathematics recently.',
            options: [
              { key: 'A', value: 'lot of' },
              { key: 'B', value: 'homework' },
              { key: 'C', value: 'mathematics' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'lot of',
            errorType: 'Thiếu mạo từ/Sử dụng sai cụm từ số lượng',
            correctForm: 'a lot of',
          },
          {
            questionNumber: 18,
            stem: "Although he was very ill, he didn't take **some** medicine.",
            options: [
              { key: 'A', value: 'take' },
              { key: 'B', value: 'some' },
              { key: 'C', value: 'medicine' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'some',
            errorType: "Sử dụng 'some' trong câu phủ định",
            correctForm: 'any',
          },
          {
            questionNumber: 19,
            stem: 'We saw some beautiful **sceneries** when we went to Austria.',
            options: [
              { key: 'A', value: 'some' },
              { key: 'B', value: 'sceneries' },
              { key: 'C', value: 'when' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'sceneries',
            errorType: 'Danh từ không đếm được bị chia số nhiều',
            correctForm: 'scenery',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 4. Đọc đoạn văn sau và chọn đáp án đúng cho mỗi câu hỏi.',
        exerciseStem:
          'This is a (20) ______, you can play at parties. First, you must prepare a tray with many different things on it. For example, a toy car, a paper (21) ______, a box of matches, two pencils, (22) ______, three marbles, two watches and a lot of other things. Everyone at the party can look at the tray for two minutes and must try to remember everything that is on it. Then you (23) ______ the tray with a (23) ______ and the (24) ______ is the person who can remember everything that was on the (25) ______.',
        questions: [
          {
            questionNumber: 20,
            stem: "Dạng số nhiều của **'game'**",
            options: [
              { key: 'A', value: 'game' },
              { key: 'B', value: 'games' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'games',
          },
          {
            questionNumber: 21,
            stem: "Dạng số nhiều của **'handkerchief'**",
            options: [
              { key: 'A', value: 'handkerchief' },
              { key: 'B', value: 'handkerchiefs' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'handkerchiefs',
          },
          {
            questionNumber: 22,
            stem: "Dạng số nhiều của **'glass'**",
            options: [
              { key: 'A', value: 'glass' },
              { key: 'B', value: 'glasses' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'glasses',
          },
          {
            questionNumber: 23,
            stem: "Dạng số nhiều của **'cloth'**",
            options: [
              { key: 'A', value: 'cloth' },
              { key: 'B', value: 'cloths' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'cloths',
          },
          {
            questionNumber: 24,
            stem: "Dạng số nhiều của **'winner'**",
            options: [
              { key: 'A', value: 'winners' },
              { key: 'B', value: 'winner' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'winners',
          },
          {
            questionNumber: 25,
            stem: "Dạng số nhiều của **'tray'**",
            options: [
              { key: 'A', value: 'tray' },
              { key: 'B', value: 'trays' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'trays',
          },
        ],
      },
    ],
  },
  {
    testName: 'MINI TEST 2',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1. Chọn đáp án đúng để hoàn thành câu.',
        questions: [
          {
            questionNumber: 1,
            stem: "He is having a shower _______. You can't disturb him.",
            options: [
              { key: 'A', value: 'always' },
              { key: 'B', value: 'at the moment' },
              { key: 'C', value: 'already' },
              { key: 'D', value: 'sometimes' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'at the moment',
          },
          {
            questionNumber: 2,
            stem: `At nine o'clock in every English lesson, our teacher _______ us about an interesting part of English culture.`,
            options: [
              { key: 'A', value: 'is telling' },
              { key: 'B', value: 'tell' },
              { key: 'C', value: 'has told' },
              { key: 'D', value: 'tells' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'tells',
          },
          {
            questionNumber: 3,
            stem: "Jane _______ always _______ her room untidy. I have reminded her several times but she hasn't changed.",
            options: [
              { key: 'A', value: 'was / leaving' },
              { key: 'B', value: 'has / leaves' },
              { key: 'C', value: 'is / leaving' },
              { key: 'D', value: 'were / left' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'is / leaving',
          },
          {
            questionNumber: 4,
            stem: "Please be very quiet. Mary _______. We don't want her to wake up.",
            options: [
              { key: 'A', value: 'sleeps' },
              { key: 'B', value: 'is sleep' },
              { key: 'C', value: 'slept' },
              { key: 'D', value: 'is sleeping' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'is sleeping',
          },
          {
            questionNumber: 5,
            stem: 'Julian was a young student when his father _______ in an accident.',
            options: [
              { key: 'A', value: 'dies' },
              { key: 'B', value: 'died' },
              { key: 'C', value: 'was dying' },
              { key: 'D', value: 'is dying' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'died',
          },
          {
            questionNumber: 6,
            stem: 'Is your cousin _______ move to another apartment?',
            options: [
              { key: 'A', value: 'going' },
              { key: 'B', value: 'going to' },
              { key: 'C', value: 'will' },
              { key: 'D', value: 'has gone' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'going to',
          },
          {
            questionNumber: 7,
            stem: 'Some years ago, people _______ living in the city centers but now they _______ to live in the suburbs.',
            options: [
              { key: 'A', value: 'had preferred / prefer' },
              { key: 'B', value: 'have preferred / prefer' },
              { key: 'C', value: 'were preferring / preferring' },
              { key: 'D', value: 'preferred / prefer' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'preferred / prefer',
          },
          {
            questionNumber: 8,
            stem: "The mayor _______ for office again next term. He's already made plans.",
            options: [
              { key: 'A', value: 'was running' },
              { key: 'B', value: 'will run' },
              { key: 'C', value: 'is going to run' },
              { key: 'D', value: 'runs' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'is going to run',
          },
          {
            questionNumber: 9,
            stem: 'Look at those dark clouds. It _______.',
            options: [
              { key: 'A', value: 'rains' },
              { key: 'B', value: 'is rain' },
              { key: 'C', value: 'is going to rain' },
              { key: 'D', value: 'will rain' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'is going to rain',
          },
          {
            questionNumber: 10,
            stem: 'Last year, I _______ camping with my friends for the first time.',
            options: [
              { key: 'A', value: 'went' },
              { key: 'B', value: 'go' },
              { key: 'C', value: 'am going' },
              { key: 'D', value: 'was going' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'went',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 2. Chọn đáp án đúng để hoàn thành câu.',
        questions: [
          {
            questionNumber: 11,
            stem: 'My wife wants _______ at an Italian restaurant tonight.',
            options: [
              { key: 'A', value: 'to eat' },
              { key: 'B', value: 'eating' },
              { key: 'C', value: 'to eat / eating' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'to eat',
          },
          {
            questionNumber: 12,
            stem: 'Mr. Lewis is finally going to finish _______ his house next week.',
            options: [
              { key: 'A', value: 'to paint' },
              { key: 'B', value: 'painting' },
              { key: 'C', value: 'to paint / painting' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'painting',
          },
          {
            questionNumber: 13,
            stem: "Emiko hopes _______ her Master's degree in Biology by the end of this year.",
            options: [
              { key: 'A', value: 'to finish' },
              { key: 'B', value: 'finishing' },
              { key: 'C', value: 'to finish / finishing' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'to finish',
          },
          {
            questionNumber: 14,
            stem: 'Jessica loves _______ ice cream, but it makes her fat!',
            options: [
              { key: 'A', value: 'to eat' },
              { key: 'B', value: 'eating' },
              { key: 'C', value: 'to eat / eating' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'to eat / eating',
          },
          {
            questionNumber: 15,
            stem: 'Robin practices _______ English with her host mother every evening.',
            options: [
              { key: 'A', value: 'to speak' },
              { key: 'B', value: 'speaking' },
              { key: 'C', value: 'to speak / speaking' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'speaking',
          },
          {
            questionNumber: 16,
            stem: 'We have run out of milk. Remember _______ some at the supermarket on your way home.',
            options: [
              { key: 'A', value: 'to buy' },
              { key: 'B', value: 'buying' },
              { key: 'C', value: 'to buy / buying' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'to buy',
          },
          {
            questionNumber: 17,
            stem: 'Would you please stop _______ so much noise?',
            options: [
              { key: 'A', value: 'to make' },
              { key: 'B', value: 'making' },
              { key: 'C', value: 'to make/ making' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'making',
          },
          {
            questionNumber: 18,
            stem: "Our favorite restaurant has _______ its prices again. It's getting very expensive.",
            options: [
              { key: 'A', value: 'raised' },
              { key: 'B', value: 'risen' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'raised',
          },
          {
            questionNumber: 19,
            stem: 'We _______ the flag when the sun _______, and we lower it when the sun goes down.',
            options: [
              { key: 'A', value: 'rise - raises' },
              { key: 'B', value: 'raise - rises' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'raise - rises',
          },
          {
            questionNumber: 20,
            stem: `If it doesn't stop raining, the river will _______ and overflow.`,
            options: [
              { key: 'A', value: 'raise' },
              { key: 'B', value: 'rise' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'rise',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 3. Chọn đáp án đúng để hoàn thành câu.',
        questions: [
          {
            questionNumber: 21,
            stem: 'In order _______ happiness, there are five methods people can use.',
            options: [
              { key: 'A', value: 'to boost' },
              { key: 'B', value: 'boosting' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'to boost',
          },
          {
            questionNumber: 22,
            stem: 'First, _______ grateful can improve our sense of well-being.',
            options: [
              { key: 'A', value: 'to be' },
              { key: 'B', value: 'being' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'being',
          },
          {
            questionNumber: 23,
            stem: 'Some people also express gratitude by _______ or meditating.',
            options: [
              { key: 'A', value: 'to pray' },
              { key: 'B', value: 'praying' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'praying',
          },
          {
            questionNumber: 24,
            stem: "Second, it's important _______ the good things in life.",
            options: [
              { key: 'A', value: 'to notice' },
              { key: 'B', value: 'noticing' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'to notice',
          },
          {
            questionNumber: 25,
            stem: 'Finally, _______ acts of kindness is one of the most important methods of increasing happiness.',
            options: [
              { key: 'A', value: 'to commit' },
              { key: 'B', value: 'committing' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'committing',
          },
        ],
      },
    ],
  },
  {
    testName: 'MINI TEST 3',
    testCategory: 'Grammar',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1. Chọn đáp án đúng để hoàn thành câu.',
        questions: [
          {
            questionNumber: 1,
            stem: 'Whenever Rose goes, ___ makes friends easily.',
            options: [
              { key: 'A', value: 'she' },
              { key: 'B', value: 'her' },
              { key: 'C', value: 'hers' },
              { key: 'D', value: 'herself' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'she',
          },
          {
            questionNumber: 2,
            stem: '___ love it when our grandparents came to visit us!',
            options: [
              { key: 'A', value: 'Us' },
              { key: 'B', value: 'Our' },
              { key: 'C', value: 'We' },
              { key: 'D', value: 'Them' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'We',
          },
          {
            questionNumber: 3,
            stem: 'My friend is over there by the cafeteria. Can you see ___?',
            options: [
              { key: 'A', value: 'he' },
              { key: 'B', value: 'him' },
              { key: 'C', value: 'them' },
              { key: 'D', value: 'himself' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'him',
          },
          {
            questionNumber: 4,
            stem: "Don't leave those files behind. Take ___ with you.",
            options: [
              { key: 'A', value: 'them' },
              { key: 'B', value: 'they' },
              { key: 'C', value: 'their' },
              { key: 'D', value: 'theirs' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'them',
          },
          {
            questionNumber: 5,
            stem: 'These are my sisters. ___ names are Cathy and Linda.',
            options: [
              { key: 'A', value: 'There' },
              { key: 'B', value: 'Them' },
              { key: 'C', value: 'Their' },
              { key: 'D', value: 'Her' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'Their',
          },
          {
            questionNumber: 6,
            stem: 'The robbers were caught because they had left ___ fingerprints behind.',
            options: [
              { key: 'A', value: 'them' },
              { key: 'B', value: 'they' },
              { key: 'C', value: 'their' },
              { key: 'D', value: 'theirs' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'their',
          },
          {
            questionNumber: 7,
            stem: "If you can't find your book, you can borrow ___.",
            options: [
              { key: 'A', value: 'me' },
              { key: 'B', value: 'mine' },
              { key: 'C', value: 'myself' },
              { key: 'D', value: 'my' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'mine',
          },
          {
            questionNumber: 8,
            stem: 'We gave them ___ telephone number, and they gave us ___.',
            options: [
              { key: 'A', value: 'our - them' },
              { key: 'B', value: 'ours - theirs' },
              { key: 'C', value: 'their - ours' },
              { key: 'D', value: 'our - theirs' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'our - theirs',
          },
          {
            questionNumber: 9,
            stem: 'The little boy tied his shoelaces ___.',
            options: [
              { key: 'A', value: 'himself' },
              { key: 'B', value: 'him' },
              { key: 'C', value: 'his' },
              { key: 'D', value: 'he' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'himself',
          },
          {
            questionNumber: 10,
            stem: 'They hurt ___ in the game.',
            options: [
              { key: 'A', value: 'itself' },
              { key: 'B', value: 'myself' },
              { key: 'C', value: 'himself' },
              { key: 'D', value: 'themselves' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'themselves',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 2. Xác định lỗi sai trong các câu dưới đây.',
        questions: [
          {
            questionNumber: 11,
            stem: "Jane has (A) already eaten (B) her lunch, but I'm saving (C) my until later.",
            options: [
              { key: 'A', value: 'already' },
              { key: 'B', value: 'her' },
              { key: 'C', value: 'my' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'my',
            errorType: 'Tính từ sở hữu thiếu danh từ',
            correctForm: 'mine',
          },
          {
            questionNumber: 12,
            stem: 'When I (A) looked over at (B) his, I noticed that (C) he was reading a book.',
            options: [
              { key: 'A', value: 'looked' },
              { key: 'B', value: 'his' },
              { key: 'C', value: 'he' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'his',
            errorType: 'Đại từ sở hữu không đứng sau giới từ',
            correctForm: 'him',
          },
          {
            questionNumber: 13,
            stem: 'The (A) girls standing under the tree (B) are eating (C) theirs lunch.',
            options: [
              { key: 'A', value: 'girls' },
              { key: 'B', value: 'are' },
              { key: 'C', value: 'theirs' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'theirs',
            errorType: 'Đại từ sở hữu thay thế cho tính từ sở hữu',
            correctForm: 'their',
          },
          {
            questionNumber: 14,
            stem: '(A) Them wore rain (B) coats to the office (C) because of the heavy rain.',
            options: [
              { key: 'A', value: 'Them' },
              { key: 'B', value: 'coats' },
              { key: 'C', value: 'because of' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Them',
            errorType: 'Đại từ tân ngữ dùng làm chủ ngữ',
            correctForm: 'They',
          },
          {
            questionNumber: 15,
            stem: 'My brother (A) likes to practice (B) his English by talking to (C) himselves.',
            options: [
              { key: 'A', value: 'likes' },
              { key: 'B', value: 'his' },
              { key: 'C', value: 'himselves' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'himselves',
            errorType: 'Đại từ phản thân sai',
            correctForm: 'himself',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 3. Điền một đại từ thích hợp vào chỗ trống để hoàn thành câu.',
        exerciseStem:
          '(Lưu ý: Mỗi chỗ trống chỉ điền MỘT từ. Tùy vào từng câu có thể điền đại từ nhân xưng làm chủ ngữ/ tân ngữ, tính từ sở hữu; đại từ sở hữu; đại từ phản thân)',
        questions: [
          {
            questionNumber: 16,
            stem: 'John has a favorite restaurant downtown. ___ goes there every weekend.',
            correctAnswerValue: 'He',
          },
          {
            questionNumber: 17,
            stem: 'I have many beautiful roses. My mother gave ___ to me last week.',
            correctAnswerValue: 'them',
          },
          {
            questionNumber: 18,
            stem: 'Michael is showing ___ bicycle to his friends.',
            correctAnswerValue: 'his',
          },
          {
            questionNumber: 19,
            stem: "The white laptop is mine and the black one is ___ (My girlfriend's)",
            correctAnswerValue: 'hers',
          },
          {
            questionNumber: 20,
            stem: 'Alice and Doris collected the stickers ___. No one helped them.',
            correctAnswerValue: 'themselves',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 4. Chọn đáp án đúng cho mỗi câu để hoàn thành đoạn văn.',
        exerciseStem:
          'Fred received a letter from (21) ____ Uncle Albert, inviting him to visit the television studio where he works. I was pleased when Fred asked me to go with him as a guest. (22) ____ was an exciting visit. A guide met (23) ____ at the studio. We were taken to the control room where engineers showed us (24) ____ earphones. We put them on our ears so we could hear their directions. A woman was practicing a part that she has been assigned to do. Uncle Albert followed her action with his camera. (25) ____ watched them for several minutes. Then I spoke to Fred saying, “Your uncle certainly does his job well. Camera men must move quickly to capture the action they see. It takes practice to become good at their job.”',
        questions: [
          {
            questionNumber: 21,
            stem: 'Hoàn thành chỗ trống (21)',
            options: [
              { key: 'A', value: 'he' },
              { key: 'B', value: 'him' },
              { key: 'C', value: 'his' },
              { key: 'D', value: 'himself' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'his',
            note: "Cần **tính từ sở hữu** ('his') đứng trước danh từ 'Uncle Albert'.",
          },
          {
            questionNumber: 22,
            stem: 'Hoàn thành chỗ trống (22)',
            options: [
              { key: 'A', value: 'it' },
              { key: 'B', value: 'its' },
              { key: 'C', value: 'itself' },
              { key: 'D', value: 'itselves' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'It',
            note: "Cần **đại từ chủ ngữ** ('It') thay thế cho 'visit' (chuyến thăm).",
          },
          {
            questionNumber: 23,
            stem: 'Hoàn thành chỗ trống (23)',
            options: [
              { key: 'A', value: 'we' },
              { key: 'B', value: 'us' },
              { key: 'C', value: 'our' },
              { key: 'D', value: 'ours' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'us',
            note: "Cần **đại từ tân ngữ** ('us') đứng sau động từ 'met' (gặp).",
          },
          {
            questionNumber: 24,
            stem: 'Hoàn thành chỗ trống (24)',
            options: [
              { key: 'A', value: 'they' },
              { key: 'B', value: 'them' },
              { key: 'C', value: 'theirs' },
              { key: 'D', value: 'their' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'their',
            note: "Cần **tính từ sở hữu** ('their') đứng trước danh từ 'earphones', chỉ tai nghe của các kỹ sư.",
          },
          {
            questionNumber: 25,
            stem: 'Hoàn thành chỗ trống (25)',
            options: [
              { key: 'A', value: 'We' },
              { key: 'B', value: 'Us' },
              { key: 'C', value: 'Our' },
              { key: 'D', value: 'Ours' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'We',
            note: "Cần **đại từ chủ ngữ** ('We') đứng đầu câu.",
          },
        ],
      },
    ],
  },
  {
    testName: 'MINI TEST 4',
    testCategory: 'Grammar',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle:
          'Exercise 1: Choose the letter A, B, C or D to indicate the correct answer to each of the following questions.',
        questions: [
          {
            questionNumber: 1,
            stem: 'I visited my grandparents ___ Sunday afternoon.',
            options: [
              { key: 'A', value: 'on' },
              { key: 'B', value: 'in' },
              { key: 'C', value: 'at' },
              { key: 'D', value: 'during' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'on',
          },
          {
            questionNumber: 2,
            stem: '___ 1876, Alexander Graham Bell invented the first telephone.',
            options: [
              { key: 'A', value: 'In' },
              { key: 'B', value: 'On' },
              { key: 'C', value: 'At' },
              { key: 'D', value: 'During' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'In',
          },
          {
            questionNumber: 3,
            stem: 'I currently work ___ Vincom Tower ___ 191 Ba Trieu Street.',
            options: [
              { key: 'A', value: 'in/at' },
              { key: 'B', value: 'in/in' },
              { key: 'C', value: 'at/at' },
              { key: 'D', value: 'at/in' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'in/at',
          },
          {
            questionNumber: 4,
            stem: '___ the time I studied in Rome, I only saw her once.',
            options: [
              { key: 'A', value: 'At' },
              { key: 'B', value: 'During' },
              { key: 'C', value: 'Throughout' },
              { key: 'D', value: 'In' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'During',
          },
          {
            questionNumber: 5,
            stem: "Please wait for me, I'm ___ the bus to go to the train station now.",
            options: [
              { key: 'A', value: 'under' },
              { key: 'B', value: 'on' },
              { key: 'C', value: 'in' },
              { key: 'D', value: 'at' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'on',
          },
          {
            questionNumber: 6,
            stem: 'As a working-from-home mother, she usually works and takes care of her baby ___ the same time.',
            options: [
              { key: 'A', value: 'on' },
              { key: 'B', value: 'in' },
              { key: 'C', value: 'at' },
              { key: 'D', value: 'during' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'at',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 2: Choose the letter A, B, C, or D to show the underlined part that needs correction.',
        questions: [
          {
            questionNumber: 7,
            stem: 'He was (A) in France (B) to pursue his master degree (C) between August 2018 to (D) September 2020.',
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'to' },
              { key: 'C', value: 'between' },
              { key: 'D', value: 'September 2020' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'between',
            errorType: 'Sử dụng sai cặp giới từ',
            correctForm: 'from',
          },
          {
            questionNumber: 8,
            stem: 'The bank is (A) at the right (B) of the French restaurant, (C) next to the supermarket and (D) opposite the bookstore.',
            options: [
              { key: 'A', value: 'at' },
              { key: 'B', value: 'of' },
              { key: 'C', value: 'next to' },
              { key: 'D', value: 'opposite' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'at',
            errorType: 'Giới từ không đúng',
            correctForm: 'on',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle:
          'Exercise 3: Read the following passage and choose the letter A, B, C or D to indicate the correct word for each of the blanks.',
        exerciseStem:
          'Last year, I spent my vacation (9) ___ Danang. I traveled with some friends of mine. We started off our journey on Saturday morning and we arrived at the beach (10) ___ 8am. We immediately went to swim and then we had some sandwiches and salad (11) ___ lunchtime (12) ___ a local restaurant. Because the restaurant is near the amusement park, we decided to go there to play some outdoor games. After that, we went to the hotel, which is located (13) ___ the north of the beach, to check in at 2pm. We took a quick nap and (14) ___ the evening, we had a lot of seafood for dinner and we went to a nearby pub to have some drinks. (15) ___ the journey, we took a lot of photos and had a great time together. It was memorable and I hope to travel with them again.',
        questions: [
          {
            questionNumber: 9,
            stem: 'Giới từ phù hợp cho địa điểm lớn (thành phố).',
            options: [
              { key: 'A', value: 'on' },
              { key: 'B', value: 'in' },
              { key: 'C', value: 'at' },
              { key: 'D', value: 'from' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'in',
          },
          {
            questionNumber: 10,
            stem: 'Giới từ phù hợp cho giờ cụ thể.',
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'on' },
              { key: 'C', value: 'at' },
              { key: 'D', value: 'through' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'at',
          },
          {
            questionNumber: 11,
            stem: 'Giới từ phù hợp cho bữa ăn/khoảng thời gian trong ngày.',
            options: [
              { key: 'A', value: 'at' },
              { key: 'B', value: 'on' },
              { key: 'C', value: 'in' },
              { key: 'D', value: 'Ø' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'at',
          },
          {
            questionNumber: 12,
            stem: 'Giới từ phù hợp cho địa điểm cụ thể (nhà hàng).',
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'at' },
              { key: 'C', value: 'on' },
              { key: 'D', value: 'Ø' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'at',
          },
          {
            questionNumber: 13,
            stem: "Giới từ phù hợp cho phương hướng ('the north of').",
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'at' },
              { key: 'C', value: 'on' },
              { key: 'D', value: 'Ø' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'in',
          },
          {
            questionNumber: 14,
            stem: "Giới từ phù hợp cho khoảng thời gian 'the evening'.",
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'at' },
              { key: 'C', value: 'on' },
              { key: 'D', value: 'Ø' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'in',
          },
          {
            questionNumber: 15,
            stem: "Giới từ phù hợp để chỉ 'xuyên suốt/trong suốt' một chuyến đi.",
            options: [
              { key: 'A', value: 'During' },
              { key: 'B', value: 'Throughout' },
              { key: 'C', value: 'Under' },
              { key: 'D', value: 'After' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'During',
          },
        ],
      },
      {
        exerciseType: EExerciseType.Writing,
        exerciseTitle: 'Exercise 4: Look at the map below and write the sentences using the given clues.',
        imageHint: '',
        questions: [
          {
            questionNumber: 16,
            stem: 'Police station/bank/store.',
            clue: 'The police station is ___',
            correctAnswerValue: 'The police station is between the bank and the store.',
          },
          {
            questionNumber: 17,
            stem: 'Library/First Street.',
            clue: 'The library ___',
            correctAnswerValue: 'The library is on First Street.',
          },
          {
            questionNumber: 18,
            stem: 'Restaurant/hospital.',
            clue: 'The restaurant ___',
            correctAnswerValue: 'The restaurant is opposite the hospital.',
          },
          {
            questionNumber: 19,
            stem: 'Drug store/post office.',
            clue: 'The drug store ___',
            correctAnswerValue: 'The drug store is next to the post office.',
          },
          {
            questionNumber: 20,
            stem: 'Movie theatre/restaurant.',
            clue: 'The movie theatre ___',
            correctAnswerValue: 'The movie theatre is behind the restaurant.',
          },
        ],
      },
    ],
  },
  {
    testName: 'FINAL TEST',
    testCategory: 'Grammar',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1. Chọn đáp án đúng cho mỗi câu hỏi.',
        questions: [
          {
            questionNumber: 1,
            stem: 'She lives with her husband, Paul, and three grown-up ___.',
            options: [
              { key: 'A', value: 'child' },
              { key: 'B', value: 'childs' },
              { key: 'C', value: 'children' },
              { key: 'D', value: 'childrens' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'children',
          },
          {
            questionNumber: 2,
            stem: 'The ___ teacher is standing at the front of their classroom.',
            options: [
              { key: 'A', value: "student's" },
              { key: 'B', value: "students'" },
              { key: 'C', value: 'students' },
              { key: 'D', value: "students's" },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: "students'",
          },
          {
            questionNumber: 3,
            stem: '___ person over there by the post office?',
            options: [
              { key: 'A', value: 'this' },
              { key: 'B', value: 'that' },
              { key: 'C', value: 'these' },
              { key: 'D', value: 'those' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'that',
          },
          {
            questionNumber: 4,
            stem: 'They have ___ their prices every year since they were founded.',
            options: [
              { key: 'A', value: 'rise' },
              { key: 'B', value: 'risen' },
              { key: 'C', value: 'raise' },
              { key: 'D', value: 'raised' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'raised',
          },
          {
            questionNumber: 5,
            stem: '- Lewis: I ___ you an invitation email two days ago. - Danny: Really? I ___ my email.',
            options: [
              { key: 'A', value: "haven't sent / checked" },
              { key: 'B', value: "sent / didn't checked" },
              { key: 'C', value: "sent / didn't check" },
              { key: 'D', value: "hadn't sent / checked" },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: "sent / didn't check",
          },
          {
            questionNumber: 6,
            stem: 'A: Why do you need to borrow my suitcase? B: Because I ___ my mother in Scotland next month.',
            options: [
              { key: 'A', value: "'ll visit" },
              { key: 'B', value: "'m going to visit" },
              { key: 'C', value: 'going to visit' },
              { key: 'D', value: "'ll be visiting" },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: "'m going to visit",
          },
          {
            questionNumber: 7,
            stem: "Emiko hopes ___ her Master's degree in Biology by the end of this year.",
            options: [
              { key: 'A', value: 'to finish' },
              { key: 'B', value: 'finishing' },
              { key: 'C', value: 'to finish / finishing' },
              { key: 'D', value: 'to finishing' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'to finish',
          },
          {
            questionNumber: 8,
            stem: 'Please listen to ___ carefully. I am talking about an important topic.',
            options: [
              { key: 'A', value: 'I' },
              { key: 'B', value: 'me' },
              { key: 'C', value: 'they' },
              { key: 'D', value: 'we' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'me',
          },
          {
            questionNumber: 9,
            stem: "David and Sarah don't go out at night. ___ father doesn't let them.",
            options: [
              { key: 'A', value: 'They' },
              { key: 'B', value: 'Theirs' },
              { key: 'C', value: 'Them' },
              { key: 'D', value: 'Their' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'Their',
          },
          {
            questionNumber: 10,
            stem: 'The oranges are not in the basket. They are ___ the table.',
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'between' },
              { key: 'C', value: 'at' },
              { key: 'D', value: 'on' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'on',
          },
          {
            questionNumber: 11,
            stem: 'They go to class ___ Mondays, Wednesdays, and Fridays.',
            options: [
              { key: 'A', value: 'at' },
              { key: 'B', value: 'in' },
              { key: 'C', value: 'on' },
              { key: 'D', value: 'from' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'on',
          },
          {
            questionNumber: 12,
            stem: 'I opened the gym bag and found a ___ towel.',
            options: [
              { key: 'A', value: 'big smelly green' },
              { key: 'B', value: 'big green smelly' },
              { key: 'C', value: 'smelly big green' },
              { key: 'D', value: 'green smelly big' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'smelly big green',
          },
          {
            questionNumber: 13,
            stem: 'It will take us hours to get there. Chris ___',
            options: [
              { key: 'A', value: 'always drives slowly.' },
              { key: 'B', value: 'always slowly drives.' },
              { key: 'C', value: 'drives slowly always.' },
              { key: 'D', value: 'drives always slowly.' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'always drives slowly.',
          },
          {
            questionNumber: 14,
            stem: 'She plants large seeds ___ than she plants small seeds.',
            options: [
              { key: 'A', value: 'deepest' },
              { key: 'B', value: 'more deeply' },
              { key: 'C', value: 'deep' },
              { key: 'D', value: 'the most deep' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'more deeply',
          },
          {
            questionNumber: 15,
            stem: 'He felt so ___ after the conversation with his boss.',
            options: [
              { key: 'A', value: 'bad' },
              { key: 'B', value: 'badly' },
              { key: 'C', value: 'worse' },
              { key: 'D', value: 'worst' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'bad',
          },
        ],
      },
      {
        exerciseType: EExerciseType.Correction,
        exerciseTitle: 'Exercise 2. Xác định và sửa lỗi sai trong các câu dưới đây.',
        note: 'LƯU Ý: Lỗi sai có thể là 1 từ hoặc 1 cụm từ.',
        questions: [
          {
            questionNumber: 16,
            stem: 'How much moneys have you got in the bank? Is it enough to buy a house?',
            error: 'moneys',
            correctForm: 'money',
          },
          {
            questionNumber: 17,
            stem: 'My cousins house is over there. They live just across the street.',
            error: 'cousins house',
            correctForm: "cousin's house",
          },
          {
            questionNumber: 18,
            stem: "This boy isn't very popular at school. He's got little friends.",
            error: 'little',
            correctForm: 'few',
          },
          {
            questionNumber: 19,
            stem: "My friend didn't see my new dress yet.",
            error: "didn't see",
            correctForm: "hasn't seen",
          },
          {
            questionNumber: 20,
            stem: 'Emiko practices to speak English with her host mother every evening.',
            error: 'to speak',
            correctForm: 'speaking',
          },
          {
            questionNumber: 21,
            stem: "It's really great, Peter. You have done so much ourself.",
            error: 'ourself',
            correctForm: 'yourself',
          },
          {
            questionNumber: 22,
            stem: 'The children are playing at the garden.',
            error: 'at',
            correctForm: 'in',
          },
          {
            questionNumber: 23,
            stem: 'She counted three red large trucks going by her window.',
            error: 'red large',
            correctForm: 'large red',
          },
          {
            questionNumber: 24,
            stem: 'The room appears to be bright than when I last saw it.',
            error: 'bright',
            correctForm: 'brighter',
          },
          {
            questionNumber: 25,
            stem: 'There has been quite hard to go through all the difficulties we have encountered.',
            error: 'There has been',
            correctForm: 'It has been',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 3. Chọn từ thích hợp trong ngoặc điền vào chỗ trống để hoàn thành các câu dưới đây.',
        questions: [
          {
            questionNumber: 26,
            stem: "The ___ (children's/ children) parents decided which university they would go to.",
            correctAnswerValue: "children's",
          },
          {
            questionNumber: 27,
            stem: 'It seems ___ (toughly/ tough) to get to the top of this mountain.',
            correctAnswerValue: 'tough',
          },
          {
            questionNumber: 28,
            stem: 'He ___ (has written/ wrote) three books and he is working on another one.',
            correctAnswerValue: 'has written',
          },
          {
            questionNumber: 29,
            stem: 'They will pick the players for the cricket team ___ (every/ next) month.',
            correctAnswerValue: 'next',
          },
          {
            questionNumber: 30,
            stem: 'I forgot my homework but Carol had ___ (her/hers).',
            correctAnswerValue: 'hers',
          },
          {
            questionNumber: 31,
            stem: 'Her visit will extend ___ (between/ from) Monday to Thursday.',
            correctAnswerValue: 'from',
          },
          {
            questionNumber: 32,
            stem: 'The perfume ___ (smells/ is smelling) so attractive.',
            correctAnswerValue: 'smells',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 4. Chọn đáp án đúng để hoàn thành đoạn văn dưới đây. (International Space Station)',
        exerciseStem:
          "Do you want to live in space? The (1) place to live in space is on the International Space Station. It is a place for people to learn more about space. It is located (2) 330 and 435 kilometers above the earth. Life on the Space Station is different. Like many people here (3) Earth, people there wake up and brush their teeth, take showers and wash their hair. But they must be very careful. They must be very careful because they don't want to use (4) water. They must use (5) soap and shampoo. When they eat breakfast, they must eat food they first bring with them from Earth. Again, they must be careful because they don't want their food to float away! After people on the Space Station finish breakfast, they (6) their work. They don't have to take a bus or a taxi. Their work is on the Space Station! After work, the people there must do exercise. (7) is not easy to stay strong in space, so they exercise for more than two hours every day. They can exercise with running machines and cycling machines. For fun, people on the Space Station can read books, watch movies, listen to music and look out the windows at Earth. One time every week, they can also talk with (8) friends and families back home. [cite: 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367]",
        questions: [
          {
            questionNumber: 33,
            stem: 'Chỗ trống 1: So sánh nhất',
            options: [
              { key: 'A', value: 'best' },
              { key: 'B', value: 'good' },
              { key: 'C', value: 'better' },
              { key: 'D', value: 'most good' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'best',
          },
          {
            questionNumber: 34,
            stem: 'Chỗ trống 2: Giới từ chỉ khoảng giữa',
            options: [
              { key: 'A', value: 'between' },
              { key: 'B', value: 'in front of' },
              { key: 'C', value: 'during' },
              { key: 'D', value: 'throughout' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'between',
          },
          {
            questionNumber: 35,
            stem: "Chỗ trống 3: Giới từ đi với 'Earth'",
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'at' },
              { key: 'C', value: 'on' },
              { key: 'D', value: 'from' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'on',
          },
          {
            questionNumber: 36,
            stem: "Chỗ trống 4: Lượng từ cho danh từ không đếm được ('water') trong câu phủ định",
            options: [
              { key: 'A', value: 'lots of' },
              { key: 'B', value: 'many' },
              { key: 'C', value: 'little' },
              { key: 'D', value: 'any' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'any',
          },
          {
            questionNumber: 37,
            stem: 'Chỗ trống 5: Tính từ bổ nghĩa cho danh từ',
            options: [
              { key: 'A', value: 'specially' },
              { key: 'B', value: 'special' },
              { key: 'C', value: 'specialty' },
              { key: 'D', value: 'especially' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'special',
          },
          {
            questionNumber: 38,
            stem: 'Chỗ trống 6: Chia thì hiện tại đơn cho hành động lặp lại',
            options: [
              { key: 'A', value: 'have started' },
              { key: 'B', value: 'are going to start' },
              { key: 'C', value: 'start' },
              { key: 'D', value: 'are starting' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'start',
          },
          {
            questionNumber: 39,
            stem: "Chỗ trống 7: Đại từ chủ ngữ giả ('It is not easy')",
            options: [
              { key: 'A', value: 'There' },
              { key: 'B', value: 'What' },
              { key: 'C', value: 'How' },
              { key: 'D', value: 'It' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'It',
          },
          {
            questionNumber: 40,
            stem: 'Chỗ trống 8: Tính từ sở hữu',
            options: [
              { key: 'A', value: 'they' },
              { key: 'B', value: 'their' },
              { key: 'C', value: 'them' },
              { key: 'D', value: 'theirs' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'their',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 5. Chọn đáp án đúng để hoàn thành đoạn văn dưới đây. (Santa Claus)',
        exerciseStem:
          'When I was a young boy, I knew exactly who Santa Claus was. He was a fat, friendly, old man with a (1) _, and he visited our home once every year to put lots and lots of toys (2) the Christmas tree. He came only if my sister and I had been good, and only if we were asleep. We must have been good (3) because Santa brought gifts for us every year! As I got older, however, I stopped (4) in Santa Claus. Many years later, I asked (5) the following question: Was (6) ever a real Santa Claus? So, I went online and googled "Santa Claus." And guess what? I found out that yes, indeed, Santa Claus was, in fact, a real man! His name was Saint Nicholas, and he (7) in what is now Turkey, about 1,700 years ago. He was famous because he was a Christian and he (8) the poor by giving them gifts. About a thousand years later, people in Europe began the tradition of giving gifts to children (9) Christmas as a way to remember Saint Nicholas. The modern image of Santa Claus, a magical old (10) dressed in red and white, with a long white beard, began about 200 years ago in Canada and in the United States. Nowadays, he is also known as Saint Nick, Father Christmas, Kris Kringle, Santy, or just Santa. [cite: 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448]',
        questions: [
          {
            questionNumber: 41,
            stem: 'Chỗ trống 1: Trật tự tính từ (OSASCOMP)',
            options: [
              { key: 'A', value: 'white beard long' },
              { key: 'B', value: 'beard long white' },
              { key: 'C', value: 'long white beard' },
              { key: 'D', value: 'white long beard' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'long white beard',
          },
          {
            questionNumber: 42,
            stem: 'Chỗ trống 2: Giới từ chỉ vị trí (dưới cây thông)',
            options: [
              { key: 'A', value: 'at' },
              { key: 'B', value: 'between' },
              { key: 'C', value: 'during' },
              { key: 'D', value: 'under' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'under',
          },
          {
            questionNumber: 43,
            stem: 'Chỗ trống 3: Danh từ số nhiều',
            options: [
              { key: 'A', value: 'kid' },
              { key: 'B', value: 'a kid' },
              { key: 'C', value: 'kids' },
              { key: 'D', value: 'the kid' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'kids',
          },
          {
            questionNumber: 44,
            stem: "Chỗ trống 4: Động từ theo sau 'stop' (bỏ việc gì)",
            options: [
              { key: 'A', value: 'believe' },
              { key: 'B', value: 'to believe' },
              { key: 'C', value: 'believed' },
              { key: 'D', value: 'believing' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'believing',
          },
          {
            questionNumber: 45,
            stem: 'Chỗ trống 5: Đại từ tân ngữ hoặc đại từ phản thân',
            options: [
              { key: 'A', value: 'my' },
              { key: 'B', value: 'me' },
              { key: 'C', value: 'mine' },
              { key: 'D', value: 'myself' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'myself',
          },
          {
            questionNumber: 46,
            stem: "Chỗ trống 6: Cấu trúc 'There was/is'",
            options: [
              { key: 'A', value: 'it' },
              { key: 'B', value: 'have' },
              { key: 'C', value: 'there' },
              { key: 'D', value: 'such' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'there',
          },
          {
            questionNumber: 47,
            stem: 'Chỗ trống 7: Thì quá khứ đơn (hành động xảy ra trong quá khứ)',
            options: [
              { key: 'A', value: 'had lived' },
              { key: 'B', value: 'lived' },
              { key: 'C', value: 'had been living' },
              { key: 'D', value: "didn't used to live" },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'lived',
          },
          {
            questionNumber: 48,
            stem: 'Chỗ trống 8: Trạng từ tần suất đứng trước động từ thường',
            options: [
              { key: 'A', value: 'often helped' },
              { key: 'B', value: 'often helps' },
              { key: 'C', value: 'helped often' },
              { key: 'D', value: 'helps often' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'often helped',
          },
          {
            questionNumber: 49,
            stem: "Chỗ trống 9: Giới từ đi với ngày lễ ('Christmas')",
            options: [
              { key: 'A', value: 'in' },
              { key: 'B', value: 'at' },
              { key: 'C', value: 'on' },
              { key: 'D', value: 'to' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'at',
          },
          {
            questionNumber: 50,
            stem: 'Chỗ trống 10: Danh từ đếm được số ít',
            options: [
              { key: 'A', value: 'man' },
              { key: 'B', value: 'men' },
              { key: 'C', value: 'mans' },
              { key: 'D', value: 'mens' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'man',
          },
        ],
      },
    ],
  },
  // Section danh từ
  {
    testName: 'Section 1: Các loại danh từ',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 1: Chọn TRUE nếu khẳng định là đúng - FALSE nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: 'Có 4 loại danh từ là danh từ chỉ người, danh từ chỉ vật, danh từ chỉ đồ vật và danh từ chỉ nơi chốn',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Có 5 loại danh từ: danh từ chung (common nouns), danh từ riêng (proper nouns), danh từ trừu tượng (abstract nouns), danh từ tập hợp (collective nouns), và danh từ cụ thể (concrete nouns)',
          },
          {
            questionNumber: 2,
            stem: 'Các danh từ riêng đều phải viết hoa chữ cái đầu',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'True',
          },
          {
            questionNumber: 3,
            stem: 'Các danh từ chỉ cảm xúc, phẩm chất, lý tưởng hay khái niệm được gọi chung là nhóm danh từ tập hợp',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Đây là danh từ trừu tượng (abstract nouns), không phải danh từ tập hợp (collective nouns)',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 2: Nối các loại danh từ sau với từng nhóm tương ứng',
        matchingOptions: ['Danh từ chung', 'Danh từ riêng', 'Danh từ trừu tượng', 'Danh từ tập hợp'],
        questions: [
          {
            questionNumber: 4,
            stem: 'Danh từ chỉ phẩm chất',
            correctAnswerValue: 'Danh từ trừu tượng',
          },
          {
            questionNumber: 5,
            stem: 'Danh từ chỉ người',
            correctAnswerValue: 'Danh từ chung',
          },
          {
            questionNumber: 6,
            stem: 'Tháng trong năm',
            correctAnswerValue: 'Danh từ riêng',
          },
          {
            questionNumber: 7,
            stem: 'Danh từ chỉ nhóm người',
            correctAnswerValue: 'Danh từ tập hợp',
          },
          {
            questionNumber: 8,
            stem: 'Danh từ chỉ địa điểm',
            correctAnswerValue: 'Danh từ chung',
          },
          {
            questionNumber: 9,
            stem: 'Danh từ chỉ cảm xúc',
            correctAnswerValue: 'Danh từ trừu tượng',
          },
          {
            questionNumber: 10,
            stem: 'Ngôn ngữ',
            correctAnswerValue: 'Danh từ riêng',
          },
          {
            questionNumber: 11,
            stem: 'Danh từ chỉ nhóm con vật',
            correctAnswerValue: 'Danh từ tập hợp',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 3: Điền từ cho sẵn trong bảng dưới đây vào chỗ trống để hoàn thành các cụm danh từ tập hợp chỉ nhóm động vật',
        exerciseStem: 'Từ cho sẵn: pod, flock, pride, gaggle, herd, school, swarm, brood, litter, pack',
        questions: [
          {
            questionNumber: 12,
            stem: 'a ___________ of chickens: một đàn gà con',
            correctAnswerValue: 'brood',
          },
          {
            questionNumber: 13,
            stem: 'a ___________ of fish: một đàn cá',
            correctAnswerValue: 'school',
          },
          {
            questionNumber: 14,
            stem: 'a ___________ of sheep: một bầy cừu',
            correctAnswerValue: 'flock',
          },
          {
            questionNumber: 15,
            stem: 'a ___________ of cattle: một đàn gia súc',
            correctAnswerValue: 'herd',
          },
          {
            questionNumber: 16,
            stem: 'a ___________ of geese: một bầy ngỗng',
            correctAnswerValue: 'gaggle',
          },
          {
            questionNumber: 17,
            stem: 'a ___________ of cubs: một đàn chó con',
            correctAnswerValue: 'litter',
          },
          {
            questionNumber: 18,
            stem: 'a ___________ of whales: một đàn cá voi',
            correctAnswerValue: 'pod',
          },
          {
            questionNumber: 19,
            stem: 'a ___________ of wolves: một bầy sói',
            correctAnswerValue: 'pack',
          },
          {
            questionNumber: 20,
            stem: 'a ___________ of lions: một bầy sư tử',
            correctAnswerValue: 'pride',
          },
          {
            questionNumber: 21,
            stem: 'a ___________ of bees: một đàn ong',
            correctAnswerValue: 'swarm',
          },
        ],
      },
      {
        exerciseOrder: 4,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 4: Điền 1 TỪ DUY NHẤT vào chỗ trống dựa vào gợi ý trong ngoặc để hoàn thành các cụm danh từ tập hợp chỉ nhóm người',
        questions: [
          {
            questionNumber: 22,
            stem: 'a ___________ (4 chữ cái - bắt đầu bằng chữ T) of players: một đội (chơi môn gì đó)',
            correctAnswerValue: 'team',
          },
          {
            questionNumber: 23,
            stem: 'a ___________ (4 chữ cái - bắt đầu bằng chữ G) of robbers: một băng cướp',
            correctAnswerValue: 'gang',
          },
          {
            questionNumber: 24,
            stem: 'a ___________ (6 chữ cái - kết thúc bằng chữ E) of actors: một nhóm diễn viên',
            correctAnswerValue: 'troupe',
          },
        ],
      },
      {
        exerciseOrder: 5,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 5: Chọn đáp án đúng để hoàn thành các cụm danh từ tập hợp chỉ nhóm đồ vật',
        questions: [
          {
            questionNumber: 25,
            stem: 'a ______ of keys: một chùm chìa khoá',
            options: [
              { key: 'A', value: 'set' },
              { key: 'B', value: 'pack' },
              { key: 'C', value: 'bunch' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'bunch',
          },
          {
            questionNumber: 26,
            stem: 'a ______ of cards: một bộ bài',
            options: [
              { key: 'A', value: 'deck' },
              { key: 'B', value: 'collection' },
              { key: 'C', value: 'pod' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'deck',
          },
          {
            questionNumber: 27,
            stem: 'a ______ of books: một bộ sưu tập sách',
            options: [
              { key: 'A', value: 'collection' },
              { key: 'B', value: 'gang' },
              { key: 'C', value: 'school' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'collection',
          },
          {
            questionNumber: 28,
            stem: 'a ______ of ships: một hạm đội tàu',
            options: [
              { key: 'A', value: 'pride' },
              { key: 'B', value: 'fleet' },
              { key: 'C', value: 'flock' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'fleet',
          },
          {
            questionNumber: 29,
            stem: 'a ______ of stamps: một bộ tem',
            options: [
              { key: 'A', value: 'litter' },
              { key: 'B', value: 'brood' },
              { key: 'C', value: 'set' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'set',
          },
          {
            questionNumber: 30,
            stem: 'a ______ of steps: các bậc cầu thang',
            options: [
              { key: 'A', value: 'flight' },
              { key: 'B', value: 'deck' },
              { key: 'C', value: 'herd' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'flight',
          },
        ],
      },
      {
        exerciseOrder: 6,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 6: Nối các danh từ sau với loại danh từ phù hợp',
        questions: [
          {
            questionNumber: 31,
            stem: 'mother',
            correctAnswerValue: 'Common Nouns',
          },
          {
            questionNumber: 32,
            stem: 'difficulty',
            correctAnswerValue: 'Abstract Nouns',
          },
          {
            questionNumber: 33,
            stem: 'Snow White',
            correctAnswerValue: 'Proper Nouns',
          },
          {
            questionNumber: 34,
            stem: 'man',
            correctAnswerValue: 'Common Nouns',
          },
          {
            questionNumber: 35,
            stem: 'a set',
            correctAnswerValue: 'Collective Nouns',
          },
          {
            questionNumber: 36,
            stem: 'courage',
            correctAnswerValue: 'Abstract Nouns',
          },
          {
            questionNumber: 37,
            stem: 'Queen Elizabeth',
            correctAnswerValue: 'Proper Nouns',
          },
          {
            questionNumber: 38,
            stem: 'a pack',
            correctAnswerValue: 'Collective Nouns',
          },
          {
            questionNumber: 39,
            stem: 'baby',
            correctAnswerValue: 'Common Nouns',
          },
          {
            questionNumber: 40,
            stem: 'happiness',
            correctAnswerValue: 'Abstract Nouns',
          },
          {
            questionNumber: 41,
            stem: 'a family',
            correctAnswerValue: 'Collective Nouns',
          },
          {
            questionNumber: 42,
            stem: 'Great Britain',
            correctAnswerValue: 'Proper Nouns',
          },
          {
            questionNumber: 43,
            stem: 'kindness',
            correctAnswerValue: 'Abstract Nouns',
          },
          {
            questionNumber: 44,
            stem: 'doctor',
            correctAnswerValue: 'Common Nouns',
          },
          {
            questionNumber: 45,
            stem: 'a band',
            correctAnswerValue: 'Collective Nouns',
          },
          {
            questionNumber: 46,
            stem: 'the Great Wall of China',
            correctAnswerValue: 'Proper Nouns',
          },
        ],
      },
      {
        exerciseOrder: 7,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 7: Viết vào chỗ trống các common nouns - danh từ chung trong các câu sau',
        exerciseStem: 'Lưu ý: mỗi chỗ trống chỉ điền 1 từ',
        questions: [
          {
            questionNumber: 47,
            stem: "There's a little bird in the garden. (Có một con chim nhỏ trong vườn.)",
            correctAnswerValue: 'bird',
            alternativeAnswers: ['garden'],
            note: 'Cả bird và garden đều là danh từ chung',
          },
          {
            questionNumber: 48,
            stem: 'Who is your teacher? (Ai là giáo viên của bạn?)',
            correctAnswerValue: 'teacher',
          },
          {
            questionNumber: 49,
            stem: "Don't eat that rotten apple! (Đừng ăn quả táo thối đó!)",
            correctAnswerValue: 'apple',
          },
          {
            questionNumber: 50,
            stem: 'Kate has a lovely doll. (Kate có một con búp bê đáng yêu.)',
            correctAnswerValue: 'doll',
          },
          {
            questionNumber: 51,
            stem: 'I like reading stories. (Tôi thích đọc truyện.)',
            correctAnswerValue: 'stories',
          },
          {
            questionNumber: 52,
            stem: 'My father is a doctor. (Cha tôi là bác sĩ.)',
            correctAnswerValue: 'father',
            alternativeAnswers: ['doctor'],
            note: 'Cả father và doctor đều là danh từ chung',
          },
          {
            questionNumber: 53,
            stem: 'Every child has a dictionary. (Mỗi đứa trẻ đều có một cuốn từ điển.)',
            correctAnswerValue: 'child',
            alternativeAnswers: ['dictionary'],
            note: 'Cả child và dictionary đều là danh từ chung',
          },
          {
            questionNumber: 54,
            stem: 'Rudy hates bananas. (Rudy ghét chuối.)',
            correctAnswerValue: 'bananas',
          },
          {
            questionNumber: 55,
            stem: 'The phone is ringing. (Điện thoại đang đổ chuông.)',
            correctAnswerValue: 'phone',
          },
          {
            questionNumber: 56,
            stem: "Here's a book for you. (Đây là một cuốn sách dành cho bạn.)",
            correctAnswerValue: 'book',
          },
        ],
      },
      {
        exerciseOrder: 8,
        exerciseType: EExerciseType.Correction,
        exerciseTitle:
          'Exercise 8: Các câu sau đây CÓ THỂ chứa lỗi sai. Nếu câu đúng, điền "correct"; nếu câu sai, hãy viết lại cả câu cho đúng.',
        questions: [
          {
            questionNumber: 57,
            stem: 'I think july is often the hottest month in Summer.',
            options: [
              { key: 'A', value: 'Correct' },
              { key: 'B', value: 'Incorrect' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Incorrect',
            correctForm: 'I think July is often the hottest month in summer.',
            note: 'Tháng (July) phải viết hoa, mùa (summer) viết thường',
          },
          {
            questionNumber: 58,
            stem: 'One day ali baba saw forty thieves hiding in a cave.',
            options: [
              { key: 'A', value: 'Correct' },
              { key: 'B', value: 'Incorrect' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Incorrect',
            correctForm: 'One day Ali Baba saw forty thieves hiding in a cave.',
            note: 'Tên riêng (Ali Baba) phải viết hoa cả hai từ',
          },
          {
            questionNumber: 59,
            stem: 'Shawn and Ashley are going to the beach for a swim.',
            options: [
              { key: 'A', value: 'Correct' },
              { key: 'B', value: 'Incorrect' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Correct',
          },
          {
            questionNumber: 60,
            stem: 'Mr. lee is reading a book.',
            options: [
              { key: 'A', value: 'Correct' },
              { key: 'B', value: 'Incorrect' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Incorrect',
            correctForm: 'Mr. Lee is reading a book.',
            note: 'Họ (Lee) là danh từ riêng phải viết hoa',
          },
          {
            questionNumber: 61,
            stem: 'Uncle Mike is a lawyer in united bank.',
            options: [
              { key: 'A', value: 'Correct' },
              { key: 'B', value: 'Incorrect' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Incorrect',
            correctForm: 'Uncle Mike is a lawyer in United Bank.',
            note: 'Tên tổ chức (United Bank) phải viết hoa',
          },
          {
            questionNumber: 62,
            stem: 'Next tuesday is a public holiday.',
            options: [
              { key: 'A', value: 'Correct' },
              { key: 'B', value: 'Incorrect' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Incorrect',
            correctForm: 'Next Tuesday is a public holiday.',
            note: 'Thứ trong tuần (Tuesday) phải viết hoa',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 2: Danh từ đếm được và không đếm được. Số ít và số nhiều',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 1: Chọn True nếu khẳng định là đúng, chọn False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: 'Danh từ đếm được là các danh từ chỉ người, sự vật mà ta có thể cầm nắm được.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Danh từ đếm được không chỉ là những gì cầm nắm được. Ví dụ: idea, dream cũng là danh từ đếm được nhưng không thể cầm nắm.',
          },
          {
            questionNumber: 2,
            stem: 'Chỉ có danh từ đếm được mới có dạng số ít và số nhiều.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'True',
          },
          {
            questionNumber: 3,
            stem: 'Khi muốn chuyển 1 danh từ từ dạng số ít thành số nhiều, ta luôn thêm S hoặc ES vào sau danh từ.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Có nhiều trường hợp đặc biệt như: man → men, child → children, knife → knives, v.v.',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.MultipleSelect,
        exerciseTitle: 'Exercise 2: Chọn các đáp án đúng',
        exerciseStem: 'Các nhóm nào sau đây thường KHÔNG PHẢI là những danh từ không đếm được:',
        allowPartialCredit: true,
        questions: [
          {
            questionNumber: 4,
            stem: 'Chọn TẤT CẢ các nhóm thường KHÔNG PHẢI là danh từ không đếm được:',
            options: [
              { key: 'A', value: 'Danh từ chỉ người' },
              { key: 'B', value: 'Danh từ tập hợp bao gồm nhiều thứ giống nhau' },
              { key: 'C', value: 'Danh từ vật chất' },
              { key: 'D', value: 'Danh từ chỉ con vật' },
              { key: 'E', value: 'Danh từ trừu tượng' },
              { key: 'F', value: 'Danh từ chỉ sự vật' },
              { key: 'G', value: 'Hiện tượng thiên nhiên' },
            ],
            correctAnswerKeys: ['A', 'D', 'F'],
            correctAnswerValues: ['Danh từ chỉ người', 'Danh từ chỉ con vật', 'Danh từ chỉ sự vật'],
            note: 'Danh từ vật chất, danh từ trừu tượng và hiện tượng thiên nhiên thường là danh từ không đếm được.',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.MultipleSelect,
        exerciseTitle: 'Exercise 2 (tiếp): Chọn các đáp án đúng',
        exerciseStem: 'Các danh từ nào dưới đây có dạng số ít và số nhiều KHÔNG viết giống hệt nhau:',
        allowPartialCredit: true,
        questions: [
          {
            questionNumber: 5,
            stem: 'Chọn TẤT CẢ các danh từ có dạng số ít và số nhiều KHÁC nhau:',
            options: [
              { key: 'A', value: 'means' },
              { key: 'B', value: 'deer' },
              { key: 'C', value: 'goose' },
              { key: 'D', value: 'offspring' },
              { key: 'E', value: 'fish' },
              { key: 'F', value: 'series' },
              { key: 'G', value: 'house' },
              { key: 'H', value: 'sheep' },
              { key: 'I', value: 'mouse' },
              { key: 'J', value: 'shrimp' },
              { key: 'K', value: 'baby' },
              { key: 'L', value: 'species' },
              { key: 'M', value: 'key' },
            ],
            correctAnswerKeys: ['C', 'G', 'I', 'K', 'M'],
            correctAnswerValues: ['goose (geese)', 'house (houses)', 'mouse (mice)', 'baby (babies)', 'key (keys)'],
            note: 'Các từ còn lại có dạng số ít và số nhiều giống nhau: means, deer, offspring, fish, series, sheep, shrimp, species',
          },
        ],
      },
      {
        exerciseOrder: 4,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 3: Điền vào chỗ trống dạng số nhiều của các danh từ số ít sau',
        questions: [
          {
            questionNumber: 6,
            stem: 'Man (người đàn ông) ___________',
            correctAnswerValue: 'men',
          },
          {
            questionNumber: 7,
            stem: 'Woman (người phụ nữ) ___________',
            correctAnswerValue: 'women',
          },
          {
            questionNumber: 8,
            stem: 'Child (đứa trẻ) ___________',
            correctAnswerValue: 'children',
          },
          {
            questionNumber: 9,
            stem: 'Ox (con bò đực) ___________',
            correctAnswerValue: 'oxen',
          },
          {
            questionNumber: 10,
            stem: 'Foot (bàn chân) ___________',
            correctAnswerValue: 'feet',
          },
          {
            questionNumber: 11,
            stem: 'Goose (con ngỗng) ___________',
            correctAnswerValue: 'geese',
          },
          {
            questionNumber: 12,
            stem: 'Tooth (răng) ___________',
            correctAnswerValue: 'teeth',
          },
          {
            questionNumber: 13,
            stem: 'Mouse (con chuột) ___________',
            correctAnswerValue: 'mice',
          },
          {
            questionNumber: 14,
            stem: 'Louse (con chấy) ___________',
            correctAnswerValue: 'lice',
          },
        ],
      },
      {
        exerciseOrder: 5,
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle:
          'Exercise 4: Dưới đây là các quy tắc thêm số nhiều trong tiếng Anh. Chọn True nếu khẳng định là đúng, False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 15,
            stem: 'Thường các danh từ tận dùng bằng -ch, -sh, -s, -x, -z và -y Thêm ES vào cuối danh từ',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Danh từ tận cùng -ch, -sh, -s, -x, -z thêm ES. Nhưng danh từ tận cùng -y có quy tắc riêng (phụ thuộc vào phụ âm hay nguyên âm đứng trước y)',
          },
          {
            questionNumber: 16,
            stem: 'Danh từ tận cùng bằng Phụ âm + Y → Thêm IES vào cuối danh từ',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Đổi Y thành I rồi thêm ES (không phải IES). Ví dụ: baby → babies',
          },
          {
            questionNumber: 17,
            stem: 'Danh từ tận cùng bằng Nguyên âm + Y → Thêm S vào cuối danh từ',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'True',
          },
          {
            questionNumber: 18,
            stem: 'Danh từ tận cùng bằng F / FE → Thêm VES vào cuối danh từ',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Đổi F/FE thành VES (không phải thêm). Ví dụ: knife → knives, wife → wives',
          },
          {
            questionNumber: 19,
            stem: 'Danh từ tận cùng bằng EF / IEF / IFF / OOF → Thêm S vào cuối danh từ',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'True',
          },
        ],
      },
      {
        exerciseOrder: 6,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 5: Nối các từ sau đây với nhóm danh từ tương ứng',
        matchingOptions: ['Danh từ đếm được', 'Danh từ không đếm được'],
        questions: [
          {
            questionNumber: 20,
            stem: 'Luggage',
            correctAnswerValue: 'Danh từ không đếm được',
          },
          {
            questionNumber: 21,
            stem: 'Bar',
            correctAnswerValue: 'Danh từ đếm được',
          },
          {
            questionNumber: 22,
            stem: 'Sugar',
            correctAnswerValue: 'Danh từ không đếm được',
          },
          {
            questionNumber: 23,
            stem: 'Book',
            correctAnswerValue: 'Danh từ đếm được',
          },
          {
            questionNumber: 24,
            stem: 'Coffee',
            correctAnswerValue: 'Danh từ không đếm được',
          },
          {
            questionNumber: 25,
            stem: 'Happiness',
            correctAnswerValue: 'Danh từ không đếm được',
          },
          {
            questionNumber: 26,
            stem: 'Pen',
            correctAnswerValue: 'Danh từ đếm được',
          },
          {
            questionNumber: 27,
            stem: 'House',
            correctAnswerValue: 'Danh từ đếm được',
          },
          {
            questionNumber: 28,
            stem: 'Rain',
            correctAnswerValue: 'Danh từ không đếm được',
          },
        ],
      },
      {
        exerciseOrder: 7,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 6: Nối các cách viết dạng số nhiều sau với danh từ tương ứng',
        matchingOptions: [
          "Thêm 's' vào cuối từ",
          "Thêm 'es' vào cuối từ",
          "Đổi 'f' và 'fe' thành 'v' rồi thêm 'es'",
          "Đổi 'y' thành 'i' rồi thêm 'es'",
        ],
        questions: [
          {
            questionNumber: 29,
            stem: 'Book',
            correctAnswerValue: "Thêm 's' vào cuối từ",
          },
          {
            questionNumber: 30,
            stem: 'Wife',
            correctAnswerValue: "Đổi 'f' và 'fe' thành 'v' rồi thêm 'es'",
          },
          {
            questionNumber: 31,
            stem: 'Tomato',
            correctAnswerValue: "Thêm 'es' vào cuối từ",
          },
          {
            questionNumber: 32,
            stem: 'Table',
            correctAnswerValue: "Thêm 's' vào cuối từ",
          },
          {
            questionNumber: 33,
            stem: 'Lady',
            correctAnswerValue: "Đổi 'y' thành 'i' rồi thêm 'es'",
          },
          {
            questionNumber: 34,
            stem: 'Scarf',
            correctAnswerValue: "Đổi 'f' và 'fe' thành 'v' rồi thêm 'es'",
          },
          {
            questionNumber: 35,
            stem: 'Hero',
            correctAnswerValue: "Thêm 'es' vào cuối từ",
          },
          {
            questionNumber: 36,
            stem: 'Life',
            correctAnswerValue: "Đổi 'f' và 'fe' thành 'v' rồi thêm 'es'",
          },
          {
            questionNumber: 37,
            stem: 'Play',
            correctAnswerValue: "Thêm 's' vào cuối từ",
          },
          {
            questionNumber: 38,
            stem: 'Family',
            correctAnswerValue: "Đổi 'y' thành 'i' rồi thêm 'es'",
          },
          {
            questionNumber: 39,
            stem: 'Box',
            correctAnswerValue: "Thêm 'es' vào cuối từ",
          },
          {
            questionNumber: 40,
            stem: 'Country',
            correctAnswerValue: "Đổi 'y' thành 'i' rồi thêm 'es'",
          },
          {
            questionNumber: 41,
            stem: 'Chef',
            correctAnswerValue: "Thêm 's' vào cuối từ",
          },
          {
            questionNumber: 42,
            stem: 'Brush',
            correctAnswerValue: "Thêm 'es' vào cuối từ",
          },
        ],
      },
      {
        exerciseOrder: 8,
        exerciseType: EExerciseType.PictureCompletion,
        exerciseTitle:
          'Exercise 7: Quan sát tranh và hoàn thiện 8 câu sau đây, sử dụng danh từ cho sẵn ở dạng số nhiều.',
        exerciseStem: 'Ví dụ: Picture 1. three bananas | Picture 2. two newspapers',
        exerciseImage: 'https://hxd8m65scvrb2r3d.public.blob.vercel-storage.com/Danh_tu_Section2_Exercise_7.png',
        matchingOptions: [
          'girl',
          'pencil',
          'telephone',
          'bird',
          'cup',
          'camera',
          'banana',
          'newspaper',
          'chair',
          'spoon',
        ],
        questions: [
          {
            questionNumber: 43,
            stem: 'Picture 3. ___________',
            correctAnswerValue: 'four girls',
          },
          {
            questionNumber: 44,
            stem: 'Picture 4. ___________',
            correctAnswerValue: 'two telephones',
          },
          {
            questionNumber: 45,
            stem: 'Picture 5. ___________',
            correctAnswerValue: 'three cameras',
          },
          {
            questionNumber: 46,
            stem: 'Picture 6. ___________',
            correctAnswerValue: 'six spoons',
          },
          {
            questionNumber: 47,
            stem: 'Picture 7. ___________',
            correctAnswerValue: 'four pencils',
          },
          {
            questionNumber: 48,
            stem: 'Picture 8. ___________',
            correctAnswerValue: 'three birds',
          },
          {
            questionNumber: 49,
            stem: 'Picture 9. ___________',
            correctAnswerValue: 'four chairs',
          },
          {
            questionNumber: 50,
            stem: 'Picture 10. ___________',
            correctAnswerValue: 'three cups',
          },
        ],
      },
      {
        exerciseOrder: 9,
        exerciseType: EExerciseType.Pluralization,
        exerciseTitle: 'Exercise 8: Chuyển các danh từ sau sang dạng số nhiều',
        questions: [
          {
            questionNumber: 51,
            stem: 'Address',
            correctAnswerValue: 'addresses',
          },
          {
            questionNumber: 52,
            stem: 'Mountain',
            correctAnswerValue: 'mountains',
          },
          {
            questionNumber: 53,
            stem: 'Lorry',
            correctAnswerValue: 'lorries',
          },
          {
            questionNumber: 54,
            stem: 'Waitress',
            correctAnswerValue: 'waitresses',
          },
          {
            questionNumber: 55,
            stem: 'Secretary',
            correctAnswerValue: 'secretaries',
          },
          {
            questionNumber: 56,
            stem: 'Sandwich',
            correctAnswerValue: 'sandwiches',
          },
          {
            questionNumber: 57,
            stem: 'Vegetable',
            correctAnswerValue: 'vegetables',
          },
          {
            questionNumber: 58,
            stem: 'Dictionary',
            correctAnswerValue: 'dictionaries',
          },
          {
            questionNumber: 59,
            stem: 'Eye',
            correctAnswerValue: 'eyes',
          },
          {
            questionNumber: 60,
            stem: 'Bag',
            correctAnswerValue: 'bags',
          },
          {
            questionNumber: 61,
            stem: 'Box',
            correctAnswerValue: 'boxes',
          },
          {
            questionNumber: 62,
            stem: 'School',
            correctAnswerValue: 'schools',
          },
          {
            questionNumber: 63,
            stem: 'Lunch',
            correctAnswerValue: 'lunches',
          },
          {
            questionNumber: 64,
            stem: 'City',
            correctAnswerValue: 'cities',
          },
          {
            questionNumber: 65,
            stem: 'Hotel',
            correctAnswerValue: 'hotels',
          },
        ],
      },
      {
        exerciseOrder: 10,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 9: Chọn đáp án chứa từ chính xác trong các câu sau',
        questions: [
          {
            questionNumber: 66,
            stem: 'My mother gave me a lot of _______ for the week.',
            options: [
              { key: 'A', value: 'money' },
              { key: 'B', value: 'moneys' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'money',
            note: 'Money là danh từ không đếm được',
          },
          {
            questionNumber: 67,
            stem: 'I like to keep a notebook and two _______ within reach.',
            options: [
              { key: 'A', value: 'pencil' },
              { key: 'B', value: 'pencils' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'pencils',
            note: 'Có "two" nên phải dùng số nhiều',
          },
          {
            questionNumber: 68,
            stem: 'Apple _______ is good for your health.',
            options: [
              { key: 'A', value: 'juice' },
              { key: 'B', value: 'juices' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'juice',
            note: 'Juice là danh từ không đếm được',
          },
          {
            questionNumber: 69,
            stem: "We've just bought some new outdoor _______.",
            options: [
              { key: 'A', value: 'furniture' },
              { key: 'B', value: 'furnitures' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'furniture',
            note: 'Furniture là danh từ không đếm được',
          },
        ],
      },
      {
        exerciseOrder: 11,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 10: Điền dạng đúng của các từ cho sẵn dưới đây vào ô trống thích hợp',
        exerciseStem: 'Từ cho sẵn: advice, cake, student, electricity, information, pizza, sunshine',
        questions: [
          {
            questionNumber: 70,
            stem: 'A group of ___________ is standing outside the class.',
            correctAnswerValue: 'students',
          },
          {
            questionNumber: 71,
            stem: 'My sister usually gives me good ___________ on how to prepare for the exam.',
            correctAnswerValue: 'advice',
          },
          {
            questionNumber: 72,
            stem: 'A dictionary is a wonderful source of ___________.',
            correctAnswerValue: 'information',
          },
          {
            questionNumber: 73,
            stem: "I have some little ___________ for Claire's birthday party.",
            correctAnswerValue: 'cakes',
          },
          {
            questionNumber: 74,
            stem: 'I am very glad because I love the warm ___________ and the fragrant flowers.',
            correctAnswerValue: 'sunshine',
          },
          {
            questionNumber: 75,
            stem: 'Every day they eat two ___________ for breakfast.',
            correctAnswerValue: 'pizzas',
          },
          {
            questionNumber: 76,
            stem: 'There is no ___________ in the area, so they have to cook over the fire.',
            correctAnswerValue: 'electricity',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 3: Sở hữu cách',
    testCategory: 'Grammar',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 1: Nối mỗi công thức dưới đây với ý nghĩa của chúng',
        matchingPairs: [
          {
            clue: 'Khi chỉ có một N3 mà N1 và N2 cùng sở hữu',
            correctMatch: "N1 and N2's N3",
          },
          {
            clue: "N1's N2",
            correctMatch: 'Khi N1 sở hữu N2 và N1 là danh từ số ít, hoặc danh từ số nhiều nhưng không có tận cùng là S',
          },
          {
            clue: "N1s' N2",
            correctMatch: 'Khi N1 sở hữu N2 và N1 là danh từ số ít hoặc số nhiều có tận cùng là S',
          },
          {
            clue: 'Khi N1 và N2 sở hữu N3 riêng biệt',
            correctMatch: "N1's and N2's N3",
          },
        ],
      },
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 2: Chọn True nếu khẳng định là đúng - False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: "Trong công thức N1's N2 thì N2 là danh từ sở hữu, còn N1 là danh từ được sở hữu.",
            correctAnswerValue: 'FALSE',
            explanation: 'N1 là danh từ SỞ HỮU, N2 là danh từ ĐƯỢC SỞ HỮU.',
          },
          {
            questionNumber: 2,
            stem: 'Danh từ chỉ người thì có thể sử dụng sở hữu cách, nhưng danh từ chỉ động vật thì không.',
            correctAnswerValue: 'FALSE',
            explanation: "Danh từ chỉ động vật vẫn có thể sử dụng sở hữu cách (ví dụ: a cat's tail).",
          },
          {
            questionNumber: 3,
            stem: "Với danh từ số ít có tận cùng là S, ta có thể viết sở hữu cách ở cả hai dạng là thêm dấu phẩy hoặc thêm 'S.",
            correctAnswerValue: 'TRUE',
            explanation: "Cả hai dạng đều được chấp nhận, ví dụ: Charles' hoặc Charles's.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle:
          'Exercise 3: Các trường hợp nào sau đây sử dụng được với sở hữu cách, hãy nối từng trường hợp với nhóm tương ứng.',
        note: 'AI phân tích dựa trên quy tắc chung của Possessive Case.',
        matchingPairs: [
          { clue: 'Danh từ chỉ người', correctMatch: 'Có sở hữu cách' },
          { clue: 'Danh từ chỉ con vật', correctMatch: 'Có sở hữu cách' },
          { clue: 'Danh từ chỉ vật, sự vật', correctMatch: "Không có sở hữu cách (Thường dùng 'of')" },
          { clue: 'Danh từ chỉ thời gian và không gian quen thuộc', correctMatch: 'Có sở hữu cách' },
          { clue: 'Danh từ chỉ tổ chức', correctMatch: 'Có sở hữu cách' },
          { clue: 'Chỗ làm của một số nghề nghiệp', correctMatch: 'Có sở hữu cách' },
          { clue: 'Tránh lặp lại danh từ', correctMatch: 'Có sở hữu cách' },
        ],
      },
      {
        exerciseType: EExerciseType.Correction,
        exerciseTitle:
          "Exercise 4: Thêm 's hoặc ' vào danh từ đầu tiên trong các cụm sau để tạo thành dạng sở hữu cách phù hợp",
        questions: [
          { questionNumber: 1, stem: 'My grandparents garden', correctForm: "My grandparents' garden" },
          { questionNumber: 2, stem: 'Cats eyes', correctForm: "Cats' eyes" },
          { questionNumber: 3, stem: 'My cat eyes', correctForm: "My cat's eyes" },
          { questionNumber: 4, stem: 'Mary brother', correctForm: "Mary's brother" },
          { questionNumber: 5, stem: 'My husband car', correctForm: "My husband's car" },
          { questionNumber: 6, stem: 'My sister clothes', correctForm: "My sister's clothes" },
          { questionNumber: 7, stem: 'People jobs', correctForm: "People's jobs" },
          { questionNumber: 8, stem: 'My boss house', correctForm: "My boss's house" },
          { questionNumber: 9, stem: 'Women clothes', correctForm: "Women's clothes" },
          { questionNumber: 10, stem: 'Marcus children', correctForm: "Marcus's children" },
        ],
      },
      {
        exerciseType: EExerciseType.Rewrite,
        exerciseTitle: 'Exercise 5: Viết các cách diễn đạt thời gian có sử dụng sở hữu cách',
        questions: [
          {
            questionNumber: 1,
            stem: 'After university, Les took A COURSE to become a teacher. (year)',
            correctForm: "A year's course.",
          },
          {
            questionNumber: 2,
            stem: 'Lin had A HOLIDAY with her mother earlier this year. (week)',
            correctForm: "A week's holiday.",
          },
          {
            questionNumber: 3,
            stem: "Oxford is nearly 600 km from Edinburgh - that's A JOURNEY. (day)",
            correctForm: "A day's journey.",
          },
          {
            questionNumber: 4,
            stem: "Sita's new job will mean A DRIVE to work every morning. (hour)",
            correctForm: "An hour's drive.",
          },
          {
            questionNumber: 5,
            stem: 'There was A WAIT while the computer started up. (minute)',
            correctForm: "A minute's wait.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.Correction,
        exerciseTitle: 'Exercise 6: Tìm lỗi sai trong mỗi câu sau và viết lại câu đúng một cách hoàn chỉnh',
        questions: [
          {
            questionNumber: 1,
            stem: "My mothers' name is Alice.",
            error: "mothers'",
            correctForm: "My mother's name is Alice.",
          },
          {
            questionNumber: 2,
            stem: "I like watching women' sports events on TV.",
            error: "women'",
            correctForm: "I like watching women's sports events on TV.",
          },
          {
            questionNumber: 3,
            stem: 'We sometimes have lunch at Carols.',
            error: 'Carols.',
            correctForm: "We sometimes have lunch at Carol's.",
          },
          {
            questionNumber: 4,
            stem: "What is the computer's size?",
            error: "computer's size",
            correctForm: 'What is the size of the computer?',
          },
          {
            questionNumber: 5,
            stem: 'Do you know where the car of Dave is?',
            error: 'the car of Dave',
            correctForm: "Do you know where Dave's car is?",
          },
          {
            questionNumber: 6,
            stem: 'Will you go to the dentist this evening?',
            error: 'Không có (Nhưng có thể sửa thành)',
            correctForm: "Will you go to the dentist's this evening?",
          },
        ],
      },
      {
        exerciseType: EExerciseType.Rewrite,
        exerciseTitle: 'Exercise 7: Sử dụng sở hữu cách để viết lại các câu sau sao cho nghĩa không đổi',
        questions: [
          {
            questionNumber: 1,
            stem: 'The tools of the mechanic were heavy.',
            correctForm: "The mechanic's tools were heavy.",
          },
          {
            questionNumber: 2,
            stem: 'She prepared the outfit of her children.',
            correctForm: "She prepared her children's outfit.",
          },
          {
            questionNumber: 3,
            stem: 'The coat of the boy and the coat of the girl were torn.',
            correctForm: "The boy's and the girl's coats were torn.",
          },
          {
            questionNumber: 4,
            stem: 'The desks of the pupils are always clean.',
            correctForm: "The pupils' desks are always clean.",
          },
          {
            questionNumber: 5,
            stem: "The house's windows are green.",
            correctForm: 'The windows of the house are green.',
          },
          {
            questionNumber: 6,
            stem: 'The house of my mother-in-law is in the country.',
            correctForm: "My mother-in-law's house is in the country.",
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 4: Hạn định từ',
    testCategory: 'Grammar',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 1: Chọn True nếu khẳng định là đúng, False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: 'Hạn định từ bao gồm từ chỉ định và lượng từ.',
            correctAnswerValue: 'TRUE',
            explanation:
              'Hạn định từ (Determiners) bao gồm từ chỉ định (Demonstratives: this, that, etc.) và lượng từ (Quantifiers: some, many, etc.).',
          },
          {
            questionNumber: 2,
            stem: 'Từ chỉ định luôn luôn đứng trước danh từ.',
            correctAnswerValue: 'TRUE',
            explanation: 'Từ chỉ định (Demonstratives) luôn đứng trước danh từ mà chúng bổ nghĩa.',
          },
          {
            questionNumber: 3,
            stem: 'Lượng từ chỉ đi cùng danh từ đếm được.',
            correctAnswerValue: 'FALSE',
            explanation:
              'Lượng từ đi kèm với cả danh từ đếm được (ví dụ: many, few) và không đếm được (ví dụ: much, little).',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 2: Điền vào chỗ trống các từ chỉ định đã học để hoàn thành bảng sau',
        tableData: {
          columns: ['Vị trí', 'Danh từ số ít', 'Danh từ số nhiều'],
          rows: [
            {
              'Vị trí': 'Vị trí gần',
              'Danh từ số ít': 'This (1)',
              'Danh từ số nhiều': 'These (2)',
            },
            {
              'Vị trí': 'Vị trí xa',
              'Danh từ số ít': 'That (3)',
              'Danh từ số nhiều': 'Those (4)',
            },
          ],
        },
        answers: {
          '1': 'This',
          '2': 'These',
          '3': 'That',
          '4': 'Those',
        },
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 3: Chọn các đáp án đúng về Some và any',
        questions: [
          {
            questionNumber: 1,
            stem: 'Some và any có cách dùng khác nhau như thế nào?',
            correctAnswerValues: [
              'Some thường dùng trong câu khẳng định; any thường dùng trong câu phủ định và câu hỏi',
              'Some có thể dùng trong câu hỏi với mục đích mời ai đó làm gì; any có thể dùng trong câu khẳng định với nghĩa "bất cứ"',
            ],
          },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 4: Nối các lượng từ sau với loại danh từ tương ứng mà chúng đi kèm',
        matchingPairs: [
          { clue: 'a little', correctMatch: 'Danh từ không đếm được' },
          { clue: 'a few', correctMatch: 'Danh từ đếm được' },
          { clue: 'some', correctMatch: 'Cả danh từ đếm được và không đếm được' },
          { clue: 'little', correctMatch: 'Danh từ không đếm được' },
          { clue: 'few', correctMatch: 'Danh từ đếm được' },
          { clue: 'any', correctMatch: 'Cả danh từ đếm được và không đếm được' },
          { clue: 'a lot of', correctMatch: 'Cả danh từ đếm được và không đếm được' },
          { clue: 'many', correctMatch: 'Danh từ đếm được' },
          { clue: 'lots of', correctMatch: 'Cả danh từ đếm được và không đếm được' },
          { clue: 'much', correctMatch: 'Danh từ không đếm được' },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5: Điền vào chỗ trống các demonstratives - từ chỉ định phù hợp',
        questions: [
          {
            questionNumber: 1,
            stem: 'I was in fifth grade last year. I am in sixth grade ____.',
            correctAnswer: 'this',
          },
          { questionNumber: 2, stem: 'Come and look at ____ insects.', correctAnswer: 'these' },
          { questionNumber: 3, stem: 'Bring ____ chairs here.', correctAnswer: 'these' },
          { questionNumber: 4, stem: 'Can you see ____ stars in the sky?', correctAnswer: 'those' },
          { questionNumber: 5, stem: '____ ice cream is delicious.', correctAnswer: 'This' },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 6: Đọc đoạn hội thoại giữa hai giáo viên Peter, Emma và chọn một đáp án đúng',
        questions: [
          {
            questionNumber: 1,
            stem: "Peter: Let's check that we've got everything for the exam this afternoon. I've got ... papers.",
            options: [
              { key: 'A', value: 'some' },
              { key: 'B', value: 'any' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'some',
            explanation: "Dùng 'some' trong câu khẳng định.",
          },
          {
            questionNumber: 2,
            stem: 'Emma: Good. Have you got ... pencils?',
            options: [
              { key: 'A', value: 'any' },
              { key: 'B', value: 'some' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'any',
            explanation: "Dùng 'any' trong câu hỏi thông thường.",
          },
          {
            questionNumber: 3,
            stem: "Peter: No. The students don't need ____.",
            options: [
              { key: 'A', value: 'some' },
              { key: 'B', value: 'any' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'any',
            explanation: "Dùng 'any' trong câu phủ định.",
          },
          {
            questionNumber: 4,
            stem: "Emma: OK. Everything's ready. Now I'm going to get ... food before the students arrive.",
            options: [
              { key: 'A', value: 'any' },
              { key: 'B', value: 'some' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'some',
            explanation: "Dùng 'some' trong câu khẳng định.",
          },
          {
            questionNumber: 5,
            stem: "Peter: It's nearly two o'clock now. We haven't got ... time.",
            options: [
              { key: 'A', value: 'some' },
              { key: 'B', value: 'any' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'any',
            explanation: "Dùng 'any' trong câu phủ định.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 7: Chọn câu đúng trong mỗi cặp câu sau',
        questions: [
          {
            questionNumber: 1,
            stem: 'Cặp câu (1): money (danh từ không đếm được)',
            options: [
              { key: 'A', value: 'We have a little money.' },
              { key: 'B', value: 'We have a few money.' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'We have a little money.',
            explanation: "'money' là danh từ không đếm được, phải đi với 'a little'.",
          },
          {
            questionNumber: 2,
            stem: 'Cặp câu (2): people (danh từ đếm được số nhiều)',
            options: [
              { key: 'A', value: 'They know a few people.' },
              { key: 'B', value: 'They know a little people.' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'They know a few people.',
            explanation: "'people' là danh từ đếm được số nhiều, phải đi với 'a few'.",
          },
          {
            questionNumber: 3,
            stem: 'Cặp câu (3): coins (danh từ đếm được số nhiều)',
            options: [
              { key: 'A', value: 'She has a little coins.' },
              { key: 'B', value: 'She has a few coins.' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'She has a few coins.',
            explanation: "'coins' là danh từ đếm được số nhiều, phải đi với 'a few'.",
          },
          {
            questionNumber: 4,
            stem: 'Cặp câu (4): Spanish (danh từ không đếm được)',
            options: [
              { key: 'A', value: 'I can speak a few Spanish.' },
              { key: 'B', value: 'I can speak a little Spanish.' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'I can speak a little Spanish.',
            explanation: "'Spanish' (ngôn ngữ) là danh từ không đếm được, phải đi với 'a little'.",
          },
          {
            questionNumber: 5,
            stem: 'Cặp câu (5): questions (danh từ đếm được số nhiều)',
            options: [
              { key: 'A', value: 'Marta asked a few questions.' },
              { key: 'B', value: 'Marta asked a little questions.' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Marta asked a few questions.',
            explanation: "'questions' là danh từ đếm được số nhiều, phải đi với 'a few'.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.Correction,
        exerciseTitle: 'Exercise 8: Tìm lỗi sai trong mỗi câu sau và viết lại câu đúng',
        questions: [
          {
            questionNumber: 1,
            stem: "I'd like any water, please.",
            error: 'any',
            correctForm: "I'd like some water, please.",
          },
          {
            questionNumber: 2,
            stem: "There aren't some emails for you.",
            error: 'some',
            correctForm: "There aren't any emails for you.",
          },
          {
            questionNumber: 3,
            stem: "We've got any nice apples today.",
            error: 'any',
            correctForm: "We've got some nice apples today.",
          },
          {
            questionNumber: 4,
            stem: 'There are always any horses in the field near our house.',
            error: 'any',
            correctForm: 'There are always some horses in the field near our house.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 9: Đọc tình huống và chọn câu diễn đạt đúng nhất tình huống.',
        note: "'a little'/'a few' mang nghĩa tích cực (đủ dùng); 'little'/'few' mang nghĩa tiêu cực (ít, không đủ).",
        questions: [
          {
            questionNumber: 1,
            stem: "Tình huống: I don't really like much salt on my food.",
            options: [
              { key: 'A', value: 'I add a little salt to my food' },
              { key: 'B', value: 'I add little salt to my food' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'I add little salt to my food.',
            explanation: "Không thích nhiều muối (phủ định) nên chỉ thêm RẤT ÍT muối ('little' - hầu như không đủ).",
          },
          {
            questionNumber: 2,
            stem: 'Tình huống: I have a long working day right ahead of me',
            options: [
              { key: 'A', value: 'I packed a few sandwiches.' },
              { key: 'B', value: 'I packed few sandwiches.' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'I packed a few sandwiches.',
            explanation: "Ngày làm việc dài cần MỘT SỐ bánh sandwich (đủ dùng, tích cực) nên dùng 'a few'.",
          },
          {
            questionNumber: 3,
            stem: 'Tình huống: He has never studied English. I think he knows how to say hello but I have never heard him say any other English words.',
            options: [
              { key: 'A', value: 'Mr. Hong knows a little English.' },
              { key: 'B', value: 'Mr. Hong knows little English.' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Mr. Hong knows little English.',
            explanation:
              "Chỉ biết nói 'hello' và không biết từ nào khác là RẤT ÍT (không đủ để giao tiếp, tiêu cực) nên dùng 'little'.",
          },
          {
            questionNumber: 4,
            stem: "Tình huống: Mr. James doesn't know how to be a good boss. He has a bad temper and yells at people all the time about nothing.",
            options: [
              { key: 'A', value: 'A few people like working for him.' },
              { key: 'B', value: 'Few people like working for him.' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Few people like working for him.',
            explanation: "Ông sếp tệ nên RẤT ÍT người thích làm việc cho ông ta (tiêu cực) nên dùng 'few'.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 10: Sửa lỗi sai trong đoạn văn (Lưu ý: Nếu không có lỗi sai, chọn "x")',
        questions: [
          {
            questionNumber: 1,
            stem: 'So, we have a little party every Saturday.',
            options: [
              { key: 'A', value: 'little -> few' },
              { key: 'B', value: 'little -> many' },
              { key: 'C', value: 'Saturday -> Saturdays' },
              { key: 'D', value: 'x' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'x',
            explanation:
              "Trong ngữ cảnh này, 'a little party' có thể được hiểu là 'một buổi tiệc nhỏ/thân mật' (sử dụng 'little' như tính từ) hoặc không có lỗi sai nghiêm trọng về ngữ pháp lượng từ. (Kết quả phân tích của AI: Chọn D. x)",
          },
          {
            questionNumber: 2,
            stem: 'You know, just a few friends at our house. There is a lot of talking and laughing, a bit of dancing and a little party games.',
            options: [
              { key: 'A', value: 'few friends -> little friends' },
              { key: 'B', value: 'few friends -> much friends' },
              { key: 'C', value: 'a lot of -> any of' },
              { key: 'D', value: 'little party games -> few party games' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'little party games -> few party games',
            explanation:
              "'party games' là danh từ đếm được số nhiều, không thể đi với 'a little' (dùng cho danh từ không đếm được). Phải sửa thành 'a few party games' hoặc 'few party games' (tùy ngữ cảnh). Trong các lựa chọn, 'little party games -> few party games' là sửa lỗi sai về lượng từ hợp lý nhất.",
          },
          {
            questionNumber: 3,
            stem: "It's not enough time and there are too much things that we need to do packing and cleaning the house.",
            options: [
              { key: 'A', value: 'too much things -> too little things' },
              { key: 'B', value: 'too much things -> too many things' },
              { key: 'C', value: 'not enough time -> few time' },
              { key: 'D', value: 'not enough time -> many time' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'too much things -> too many things',
            explanation:
              "'things' là danh từ đếm được số nhiều, phải dùng 'too many' thay vì 'too much' (dùng cho danh từ không đếm được).",
          },
          {
            questionNumber: 4,
            stem: "Come visit us - we know we won't have much friends in the States.",
            options: [
              { key: 'A', value: 'much -> many' },
              { key: 'B', value: 'much -> little' },
              { key: 'C', value: 'much -> some' },
              { key: 'D', value: 'x' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'much -> many',
            explanation:
              "'friends' là danh từ đếm được số nhiều, phải dùng 'many' thay vì 'much' (dùng cho danh từ không đếm được).",
          },
        ],
      },
    ],
  },
  // Động từ
  {
    testName: 'Section 1: Các loại động từ',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 1: Chọn True nếu khẳng định là đúng - False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: 'Động từ được chia làm 2 loại là động từ hành động và động từ trạng thái.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Động từ được chia làm nhiều loại: động từ hành động (action verbs), động từ trạng thái (stative verbs), động từ liên kết (linking verbs), nội động từ (intransitive verbs), ngoại động từ (transitive verbs)',
          },
          {
            questionNumber: 2,
            stem: 'Tất cả các động từ đều được theo sau bởi tân ngữ.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Chỉ ngoại động từ (transitive verbs) cần tân ngữ. Nội động từ (intransitive verbs) không cần tân ngữ',
          },
          {
            questionNumber: 3,
            stem: 'Động từ liên kết có tác dụng chuyển tiếp ý, kết nối chủ ngữ với thành phần tiếp theo trong câu.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'True',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.MultipleSelect,
        exerciseTitle: 'Exercise 2: Chọn các đáp án đúng',
        exerciseStem: 'Động từ chỉ trạng thái bao gồm:',
        questions: [
          {
            questionNumber: 4,
            stem: 'Chọn TẤT CẢ các loại động từ thuộc nhóm động từ trạng thái',
            options: [
              { key: 'A', value: 'Động từ hoạt động' },
              { key: 'B', value: 'Động từ cảm xúc' },
              { key: 'C', value: 'Động từ suy nghĩ, quan điểm' },
              { key: 'D', value: 'Động từ liên kết' },
              { key: 'E', value: 'Động từ giác quan' },
              { key: 'F', value: 'Động từ khuyết thiếu' },
              { key: 'G', value: 'Động từ sở hữu' },
            ],
            correctAnswerKeys: ['B', 'C', 'E', 'G'],
            correctAnswerValues: [
              'Động từ cảm xúc',
              'Động từ suy nghĩ/quan điểm',
              'Động từ giác quan',
              'Động từ sở hữu',
            ],
            note: 'Động từ trạng thái bao gồm: động từ cảm xúc (love, hate), động từ suy nghĩ/quan điểm (think, believe), động từ giác quan (see, hear), động từ sở hữu (have, own, belong)',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 3: Nối từng loại động từ với định nghĩa của chúng',
        matchingOptions: ['Transitive verbs', 'Stative verbs', 'Intransitive verbs', 'Linking verbs'],
        questions: [
          {
            questionNumber: 5,
            stem: 'Ngoại động từ, những động từ đòi hỏi có tân ngữ bổ nghĩa',
            correctAnswerValue: 'Transitive verbs',
          },
          {
            questionNumber: 6,
            stem: 'Động từ trạng thái, chỉ suy nghĩ, cảm xúc, giác quan…',
            correctAnswerValue: 'Stative verbs',
          },
          {
            questionNumber: 7,
            stem: 'Nội động từ, những động từ không có tân ngữ, đứng một mình đã đủ nghĩa',
            correctAnswerValue: 'Intransitive verbs',
          },
          {
            questionNumber: 8,
            stem: 'Động từ liên kết, có tác dụng chuyển tiếp ý, kết nối chủ ngữ với thành phần tiếp theo trong câu',
            correctAnswerValue: 'Linking verbs',
          },
        ],
      },
      {
        exerciseOrder: 4,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 4: Điền vào chỗ trống động từ của mỗi câu sau',
        exerciseStem: 'Lưu ý: Điền chính xác từ được viết trong câu, giữ nguyên đuôi S/ES nếu có.',
        questions: [
          {
            questionNumber: 9,
            stem: 'The children go to school by bus.',
            correctAnswerValue: 'go',
          },
          {
            questionNumber: 10,
            stem: 'Bats sleep during the day.',
            correctAnswerValue: 'sleep',
          },
          {
            questionNumber: 11,
            stem: 'These toys belong to Kathy.',
            correctAnswerValue: 'belong',
          },
          {
            questionNumber: 12,
            stem: 'Every pupil has a good dictionary.',
            correctAnswerValue: 'has',
          },
          {
            questionNumber: 13,
            stem: 'Polar bears live at the North Pole.',
            correctAnswerValue: 'live',
          },
          {
            questionNumber: 14,
            stem: 'Most children learn very fast.',
            correctAnswerValue: 'learn',
          },
          {
            questionNumber: 15,
            stem: 'Mr. Thomas teaches us science.',
            correctAnswerValue: 'teaches',
          },
          {
            questionNumber: 16,
            stem: 'It costs a lot to buy a house in this part of Sydney.',
            correctAnswerValue: 'costs',
            alternativeAnswers: ['buy', 'costs; buy'],
            note: 'Câu có 2 động từ: "costs" (động từ chính) và "buy" (động từ trong cụm to-infinitive)',
          },
          {
            questionNumber: 17,
            stem: 'He becomes a US citizen.',
            correctAnswerValue: 'becomes',
          },
          {
            questionNumber: 18,
            stem: 'Many stores close on Sunday.',
            correctAnswerValue: 'close',
          },
          {
            questionNumber: 19,
            stem: 'I love the taste of garlic.',
            correctAnswerValue: 'love',
          },
          {
            questionNumber: 20,
            stem: 'He is 16, but he often seems younger.',
            correctAnswerValue: 'is',
            alternativeAnswers: ['seems', 'is; seems'],
            note: 'Câu có 2 động từ: "is" và "seems" (cả hai đều là linking verbs)',
          },
        ],
      },
      {
        exerciseOrder: 5,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 5: Hãy nối các động từ vừa tìm ra trong Exercise 4 với các nhóm phù hợp',
        matchingOptions: ['Action verbs', 'Stative verbs', 'Linking verbs'],
        questions: [
          {
            questionNumber: 21,
            stem: 'Go',
            correctAnswerValue: 'Action verbs',
          },
          {
            questionNumber: 22,
            stem: 'Belong',
            correctAnswerValue: 'Stative verbs',
          },
          {
            questionNumber: 23,
            stem: 'Become',
            correctAnswerValue: 'Linking verbs',
          },
          {
            questionNumber: 24,
            stem: 'Sleep',
            correctAnswerValue: 'Action verbs',
          },
          {
            questionNumber: 25,
            stem: 'Has',
            correctAnswerValue: 'Stative verbs',
          },
          {
            questionNumber: 26,
            stem: 'Live',
            correctAnswerValue: 'Action verbs',
          },
          {
            questionNumber: 27,
            stem: 'Costs',
            correctAnswerValue: 'Stative verbs',
          },
          {
            questionNumber: 28,
            stem: 'Is',
            correctAnswerValue: 'Linking verbs',
          },
          {
            questionNumber: 29,
            stem: 'Learn',
            correctAnswerValue: 'Action verbs',
          },
          {
            questionNumber: 30,
            stem: 'Love',
            correctAnswerValue: 'Stative verbs',
          },
          {
            questionNumber: 31,
            stem: 'Teaches',
            correctAnswerValue: 'Action verbs',
          },
          {
            questionNumber: 32,
            stem: 'Seems',
            correctAnswerValue: 'Linking verbs',
          },
          {
            questionNumber: 33,
            stem: 'Close',
            correctAnswerValue: 'Action verbs',
          },
        ],
      },
      {
        exerciseOrder: 6,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle:
          'Exercise 6: Chọn đáp án đúng: Động từ được gạch chân trong các câu sau là nội động từ hay ngoại động từ',
        questions: [
          {
            questionNumber: 34,
            stem: 'She <u>was crying</u> all day long.',
            options: [
              { key: 'A', value: 'Nội động từ' },
              { key: 'B', value: 'Ngoại động từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Nội động từ',
            note: '"Crying" không có tân ngữ theo sau',
          },
          {
            questionNumber: 35,
            stem: 'We <u>showed</u> her the photo album.',
            options: [
              { key: 'A', value: 'Nội động từ' },
              { key: 'B', value: 'Ngoại động từ' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Ngoại động từ',
            note: '"Showed" có tân ngữ "her" (tân ngữ gián tiếp) và "the photo album" (tân ngữ trực tiếp)',
          },
          {
            questionNumber: 36,
            stem: 'She <u>gave</u> the book to her teacher.',
            options: [
              { key: 'A', value: 'Nội động từ' },
              { key: 'B', value: 'Ngoại động từ' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Ngoại động từ',
            note: '"Gave" có tân ngữ "the book"',
          },
          {
            questionNumber: 37,
            stem: 'He <u>slept</u> for seven hours.',
            options: [
              { key: 'A', value: 'Nội động từ' },
              { key: 'B', value: 'Ngoại động từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Nội động từ',
            note: '"Slept" không có tân ngữ, "for seven hours" là trạng từ chỉ thời gian',
          },
          {
            questionNumber: 38,
            stem: 'We <u>lived</u> in Mexico for two years.',
            options: [
              { key: 'A', value: 'Nội động từ' },
              { key: 'B', value: 'Ngoại động từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Nội động từ',
            note: '"Lived" không có tân ngữ, "in Mexico" là trạng từ chỉ nơi chốn',
          },
          {
            questionNumber: 39,
            stem: 'Jason <u>paint</u>ed his house blue.',
            options: [
              { key: 'A', value: 'Nội động từ' },
              { key: 'B', value: 'Ngoại động từ' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Ngoại động từ',
            note: '"Painted" có tân ngữ "his house", "blue" là tính từ bổ nghĩa cho tân ngữ',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 2.2: Thì hiện tại đơn',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 1: Nối chủ ngữ với cách chia động từ đúng của thì hiện tại đơn',
        matchingOptions: ['I', 'He/She/It/N(Số ít)', 'You/We/They/N(Số nhiều)', 'I/You/We/They/N(Số nhiều)'],
        questions: [
          {
            questionNumber: 1,
            stem: 'is',
            correctAnswerValue: 'He/She/It/N(Số ít)',
          },
          {
            questionNumber: 2,
            stem: 'V',
            correctAnswerValue: 'I/You/We/They/N(Số nhiều)',
          },
          {
            questionNumber: 3,
            stem: 'am',
            correctAnswerValue: 'I',
          },
          {
            questionNumber: 4,
            stem: 'V(S/ES)',
            correctAnswerValue: 'He/She/It/N(Số ít)',
          },
          {
            questionNumber: 5,
            stem: 'are',
            correctAnswerValue: 'You/We/They/N(Số nhiều)',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 2: Nối các động từ có dấu hiệu sau với các cách thêm S/ES tương ứng',
        matchingOptions: ['Thêm S', 'Thêm ES', 'Đổi Y thành I rồi thêm ES'],
        questions: [
          {
            questionNumber: 6,
            stem: 'Động từ tận cùng bằng một nguyên âm rồi đến Y',
            correctAnswerValue: 'Thêm S',
          },
          {
            questionNumber: 7,
            stem: 'Động từ tận cùng bằng -CH, -SH, -S, -X, O',
            correctAnswerValue: 'Thêm ES',
          },
          {
            questionNumber: 8,
            stem: 'Phần lớn động từ',
            correctAnswerValue: 'Thêm S',
          },
          {
            questionNumber: 9,
            stem: 'Động từ tận cùng bằng một phụ âm rồi đến Y',
            correctAnswerValue: 'Đổi Y thành I rồi thêm ES',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.MultipleSelect,
        exerciseTitle: 'Exercise 3: Chọn các đáp án đúng',
        questions: [
          {
            questionNumber: 10,
            stem: 'Chọn TẤT CẢ các trường hợp KHÔNG phải là cách sử dụng của thì hiện tại đơn',
            options: [
              { key: 'A', value: 'Những hành động thường xuyên xảy ra, có tính lặp lại' },
              { key: 'B', value: 'Những thói quen ở hiện tại' },
              { key: 'C', value: 'Đưa ra cảm giác, nghề nghiệp, tình trạng hiện tại, tính chất, sở hữu' },
              { key: 'D', value: 'Nói về một giả thiết' },
              { key: 'E', value: 'Dự đoán các tình tiết, sự kiện trong phim, truyện' },
              { key: 'F', value: 'Tiêu đề các bài báo' },
            ],
            correctAnswerKeys: ['D'],
            correctAnswerValues: ['Nói về một giả thiết'],
            note: 'Thì hiện tại đơn KHÔNG dùng để nói về giả thiết (dùng thì quá khứ đơn hoặc câu điều kiện). Các trường hợp còn lại đều là cách sử dụng đúng của thì hiện tại đơn.',
          },
        ],
      },
      {
        exerciseOrder: 4,
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle:
          'Exercise 4: Chọn True nếu khẳng định là đúng - chọn False nếu khẳng định là sai với mỗi khẳng định về thì hiện tại đơn sau',
        questions: [
          {
            questionNumber: 11,
            stem: `Trong câu phủ định, động từ to be chuyển thành isn't với tất cả các chủ ngữ.`,
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: "Động từ to be có 3 dạng phủ định: am not (với I), isn't/is not (với He/She/It), aren't/are not (với You/We/They)",
          },
          {
            questionNumber: 12,
            stem: 'Trong câu phủ định, NOT sẽ đứng sau động từ thường.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: "NOT đứng sau trợ động từ do/does, không đứng sau động từ chính. Ví dụ: He does not (doesn't) go...",
          },
          {
            questionNumber: 13,
            stem: 'Trong câu câu hỏi, ta luôn luôn đảo trợ động từ do hoặc does lên trước chủ ngữ.',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Với động từ to be (am/is/are), ta đảo động từ to be lên trước chủ ngữ, không dùng do/does. Ví dụ: Is he...? (không phải Does he is...?)',
          },
        ],
      },
      {
        exerciseOrder: 5,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5: Điền dạng đúng của mỗi động từ cho sẵn trong ngoặc vào chỗ trống để hoàn thành câu',
        questions: [
          {
            questionNumber: 14,
            stem: 'Ben and Jack ___________ (go) to the same school every day.',
            correctAnswerValue: 'go',
          },
          {
            questionNumber: 15,
            stem: 'Tanya ___________ (speak) English very well.',
            correctAnswerValue: 'speaks',
          },
          {
            questionNumber: 16,
            stem: `The museum ___________ (close) at 4 o'clock on Mondays.`,
            correctAnswerValue: 'closes',
          },
          {
            questionNumber: 17,
            stem: 'My parents ___________ (live) in a very small flat.',
            correctAnswerValue: 'live',
          },
          {
            questionNumber: 18,
            stem: 'The Panama Canal ___________ (connect) the Atlantic and Pacific oceans.',
            correctAnswerValue: 'connects',
          },
          {
            questionNumber: 19,
            stem: 'The Olympics ___________ (take) place every four years.',
            correctAnswerValue: 'takes',
            alternativeAnswers: ['take'],
            note: '"The Olympics" có thể coi là số ít (takes) hoặc số nhiều (take)',
          },
        ],
      },
      {
        exerciseOrder: 6,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 6: Mỗi câu dưới đây đều chứa lỗi sai. Hãy tìm các lỗi sai đó và viết lại toàn bộ câu đúng.',
        questions: [
          {
            questionNumber: 20,
            stem: 'How often do you plays tennis?',
            correctAnswerValue: 'How often do you play tennis?',
            errorType: 'Động từ sau "do" phải ở dạng nguyên mẫu',
            correctForm: 'How often do you play tennis?',
          },
          {
            questionNumber: 21,
            stem: 'He go to school by bus twice a week.',
            correctAnswerValue: 'He goes to school by bus twice a week.',
            errorType: 'Chủ ngữ số ít (He) phải dùng động từ thêm s/es',
            correctForm: 'He goes to school by bus twice a week.',
          },
          {
            questionNumber: 22,
            stem: 'Does she carries a lot of bags when she go shopping?',
            correctAnswerValue: 'Does she carry a lot of bags when she goes shopping?',
            errorType: 'Động từ sau "does" phải ở dạng nguyên mẫu, và "she go" sai',
            correctForm: 'Does she carry a lot of bags when she goes shopping?',
          },
          {
            questionNumber: 23,
            stem: 'Tony studyes Psychology at York University.',
            correctAnswerValue: 'Tony studies Psychology at York University.',
            errorType: 'Động từ tận cùng bằng phụ âm + y: đổi y thành i rồi thêm es',
            correctForm: 'Tony studies Psychology at York University.',
          },
          {
            questionNumber: 24,
            stem: "He don't always remember to lock the door.",
            correctAnswerValue: "He doesn't always remember to lock the door.",
            errorType: 'Chủ ngữ số ít (He) phải dùng "doesn\'t" không phải "don\'t"',
            correctForm: "He doesn't always remember to lock the door.",
          },
          {
            questionNumber: 25,
            stem: "She doesn't has enough money to buy this dress.",
            correctAnswerValue: "She doesn't have enough money to buy this dress.",
            errorType: 'Động từ sau "doesn\'t" phải ở dạng nguyên mẫu',
            correctForm: "She doesn't have enough money to buy this dress.",
          },
          {
            questionNumber: 26,
            stem: 'They cooks occasionally huge meals for the family.',
            correctAnswerValue: 'They occasionally cook huge meals for the family.',
            errorType: 'Chủ ngữ số nhiều (They) không thêm s/es',
            correctForm: 'They occasionally cook huge meals for the family.',
            note: 'Trạng từ tần suất "occasionally" đứng trước động từ thường',
          },
          {
            questionNumber: 27,
            stem: 'My father watches usually TV after work.',
            correctAnswerValue: 'My father usually watches TV after work.',
            errorType: 'Trạng từ tần suất đứng trước động từ thường',
            correctForm: 'My father usually watches TV after work.',
          },
        ],
      },
      {
        exerciseOrder: 7,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 7: Đọc các tình huống dưới đây và viết câu hỏi tương ứng.',
        exerciseStem:
          'Ví dụ: You don\'t know what Rose does on Monday. You want to know. Ask her. → "What do you do on Monday?"',
        questions: [
          {
            questionNumber: 28,
            stem: 'You know that Jenny plays the piano. You want to know how often. Ask her. → "How often ___________?"',
            correctAnswerValue: 'do you play the piano',
            alternativeAnswers: ['do you play', 'do you play piano'],
          },
          {
            questionNumber: 29,
            stem: 'You don\'t know where Lisa\'s grandparents live. You want to know. Ask her. → "Where ___________?"',
            correctAnswerValue: 'do your grandparents live',
            alternativeAnswers: ["do Lisa's grandparents live"],
          },
          {
            questionNumber: 30,
            stem: 'Does Yoko speak Japanese? You are not sure. You want to know. Ask her. → "Do ___________?"',
            correctAnswerValue: 'you speak Japanese',
          },
        ],
      },
      {
        exerciseOrder: 8,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 8: Chuyển các câu sau thành câu phủ định và nghi vấn.',
        exerciseStem:
          "Ví dụ: He plays football every day.<br>Phủ định: He doesn't/does not play football every day.<br>Nghi vấn: Does he play football every day?",
        questions: [
          {
            questionNumber: 31,
            stem: 'He listens to music and reads books every Sunday. → Phủ định: ___________.',
            correctAnswerValue: "He doesn't listen to music and read books every Sunday",
            alternativeAnswers: ['He does not listen to music and read books every Sunday'],
          },
          {
            questionNumber: 32,
            stem: 'He listens to music and reads books every Sunday. → Nghi vấn: ___________?',
            correctAnswerValue: 'Does he listen to music and read books every Sunday',
          },
          {
            questionNumber: 33,
            stem: 'The cookies smell good. → Phủ định: ___________.',
            correctAnswerValue: "The cookies don't smell good",
            alternativeAnswers: ['The cookies do not smell good'],
          },
          {
            questionNumber: 34,
            stem: 'The cookies smell good. → Nghi vấn: ___________?',
            correctAnswerValue: 'Do the cookies smell good',
          },
          {
            questionNumber: 35,
            stem: 'Their parents go to see a movie every weekend. → Phủ định: ___________.',
            correctAnswerValue: "Their parents don't go to see a movie every weekend",
            alternativeAnswers: ['Their parents do not go to see a movie every weekend'],
          },
          {
            questionNumber: 36,
            stem: 'Their parents go to see a movie every weekend. → Nghi vấn: ___________?',
            correctAnswerValue: 'Do their parents go to see a movie every weekend',
          },
        ],
      },
      {
        exerciseOrder: 9,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 9: Điền đúng thì của động từ trong ngoặc để hoàn thành đoạn văn trả lời cho câu hỏi IELTS Speaking sau.',
        exerciseStem:
          'IELTS Speaking Part 2 question: Talk about someone you know.<br> <br>Lưu ý: Điền tối đa 2 từ vào mỗi chỗ trống.<br> <br>Chú thích nghĩa:<br>soft drink (n): nước ngọt có ga<br>role model (n): hình mẫu<br><br>I want to talk about my favorite teacher - Mary. She (1)___________ (be) an English teacher. Many children love her and they (2)___________ (learn) a lot from her. Every day, Mary (3)___________ (arrive) home at 1.00 p.m. and (4)___________ (have) lunch. Then she sleeps for an hour. In the afternoon, she (5)___________ (go) swimming or cleans her house. Sometimes, she (6)___________ (visit) her aunt and (7)___________ (drink) tea with her. On Sundays, she (8)___________ (go) shopping with her friends. Mary (9)___________ (be) a healthy person. She (10)___________ (not drink) soft drinks or energy drinks and she never (11)___________ (buy) snacks. She always (12)___________ (eat) lots of vegetables and fruits. Mary (13)___________ (be) a role model for everyone.',
        questions: [
          {
            questionNumber: 37,
            stem: '(1) ___________ (be)',
            correctAnswerValue: 'is',
          },
          {
            questionNumber: 38,
            stem: '(2) ___________ (learn)',
            correctAnswerValue: 'learn',
          },
          {
            questionNumber: 39,
            stem: '(3) ___________ (arrive)',
            correctAnswerValue: 'arrives',
          },
          {
            questionNumber: 40,
            stem: '(4) ___________ (have)',
            correctAnswerValue: 'has',
          },
          {
            questionNumber: 41,
            stem: '(5) ___________ (go)',
            correctAnswerValue: 'goes',
          },
          {
            questionNumber: 42,
            stem: '(6) ___________ (visit)',
            correctAnswerValue: 'visits',
          },
          {
            questionNumber: 43,
            stem: '(7) ___________ (drink)',
            correctAnswerValue: 'drinks',
          },
          {
            questionNumber: 44,
            stem: '(8) ___________ (go)',
            correctAnswerValue: 'goes',
          },
          {
            questionNumber: 45,
            stem: '(9) ___________ (be)',
            correctAnswerValue: 'is',
          },
          {
            questionNumber: 46,
            stem: '(10) ___________ (not drink)',
            correctAnswerValue: "doesn't drink",
            alternativeAnswers: ['does not drink'],
          },
          {
            questionNumber: 47,
            stem: '(11) ___________ (buy)',
            correctAnswerValue: 'buys',
          },
          {
            questionNumber: 48,
            stem: '(12) ___________ (eat)',
            correctAnswerValue: 'eats',
          },
          {
            questionNumber: 49,
            stem: '(13) ___________ (be)',
            correctAnswerValue: 'is',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 3: Thì hiện tại tiếp diễn',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 1: Điền vào chỗ trống động từ to be tương ứng với từng chủ ngữ để hoàn thành bảng công thức của thì Hiện tại tiếp diễn sau',
        exerciseStem:
          'Lưu ý: điền dạng đầy đủ - không viết tắt<br/><br/>S + To be + V-ing<br/>I → Chỗ trống (1)<br/>You / We / They / N Số nhiều → Chỗ trống (2)<br/>He / She / It / N Số ít → Chỗ trống (3)',
        questions: [
          {
            questionNumber: 1,
            stem: 'Chỗ trống (1): I ___________',
            correctAnswerValue: 'am',
          },
          {
            questionNumber: 2,
            stem: 'Chỗ trống (2): You / We / They / N Số nhiều ___________',
            correctAnswerValue: 'are',
          },
          {
            questionNumber: 3,
            stem: 'Chỗ trống (3): He / She / It / N Số ít ___________',
            correctAnswerValue: 'is',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 2: Nối các trường hợp thêm đuôi -ing vào động từ sau với quy tắc tương ứng',
        matchingOptions: [
          'Phụ âm x2 và thêm -ING',
          'Thêm -ING',
          'Bỏ E và thêm -ING',
          'Chuyển IE thành Y và thêm -ING',
          'Thêm đuôi K và thêm -ING',
        ],
        questions: [
          {
            questionNumber: 4,
            stem: 'Live → Living (Tận cùng bằng E)',
            correctAnswerValue: 'Bỏ E và thêm -ING',
          },
          {
            questionNumber: 5,
            stem: 'Free → Freeing (Tận cùng bằng EE)',
            correctAnswerValue: 'Thêm -ING',
          },
          {
            questionNumber: 6,
            stem: 'Run → Running (V một âm tiết, nguyên âm + phụ âm)',
            correctAnswerValue: 'Phụ âm x2 và thêm -ING',
          },
          {
            questionNumber: 7,
            stem: 'Begin → Beginning (V hai âm tiết, trọng âm 2, nguyên âm + phụ âm)',
            correctAnswerValue: 'Phụ âm x2 và thêm -ING',
          },
          {
            questionNumber: 8,
            stem: 'Enter → Entering (V hai âm tiết, trọng âm 1)',
            correctAnswerValue: 'Thêm -ING',
          },
          {
            questionNumber: 9,
            stem: 'Lie → Lying (Tận cùng bằng IE)',
            correctAnswerValue: 'Chuyển IE thành Y và thêm -ING',
          },
          {
            questionNumber: 10,
            stem: 'Picnic → Picnicking (Tận cùng bằng C)',
            correctAnswerValue: 'Thêm đuôi K và thêm -ING',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 3: Nối các câu sau với cách sử dụng tương ứng của thì hiện tại tiếp diễn',
        matchingOptions: ['Diễn tả một hành động đang diễn ra tại thời điểm nói', 'Diễn tả một thói quen xấu'],
        questions: [
          {
            questionNumber: 11,
            stem: "It's cold today so I am wearing a sweater.",
            correctAnswerValue: 'Diễn tả một hành động đang diễn ra tại thời điểm nói',
          },
          {
            questionNumber: 12,
            stem: "We're staying in a hotel near the beach.",
            correctAnswerValue: 'Diễn tả một hành động đang diễn ra tại thời điểm nói',
          },
          {
            questionNumber: 13,
            stem: 'She is always spelling my name wrong.',
            correctAnswerValue: 'Diễn tả một thói quen xấu',
          },
          {
            questionNumber: 14,
            stem: "Hurry up! It's time to leave. The taxi is waiting outside.",
            correctAnswerValue: 'Diễn tả một hành động đang diễn ra tại thời điểm nói',
          },
          {
            questionNumber: 15,
            stem: "You're always complaining.",
            correctAnswerValue: 'Diễn tả một thói quen xấu',
          },
        ],
      },
      {
        exerciseOrder: 4,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 4: Điền vào chỗ trống dạng V-ing của các động từ một âm tiết dưới đây',
        questions: [
          {
            questionNumber: 16,
            stem: 'live → ___________',
            correctAnswerValue: 'living',
          },
          {
            questionNumber: 17,
            stem: 'make → ___________',
            correctAnswerValue: 'making',
          },
          {
            questionNumber: 18,
            stem: 'run → ___________',
            correctAnswerValue: 'running',
          },
          {
            questionNumber: 19,
            stem: 'sit → ___________',
            correctAnswerValue: 'sitting',
          },
          {
            questionNumber: 20,
            stem: 'sleep → ___________',
            correctAnswerValue: 'sleeping',
          },
          {
            questionNumber: 21,
            stem: 'stop → ___________',
            correctAnswerValue: 'stopping',
          },
          {
            questionNumber: 22,
            stem: 'die → ___________',
            correctAnswerValue: 'dying',
          },
          {
            questionNumber: 23,
            stem: 'swim → ___________',
            correctAnswerValue: 'swimming',
          },
          {
            questionNumber: 24,
            stem: 'take → ___________',
            correctAnswerValue: 'taking',
          },
          {
            questionNumber: 25,
            stem: 'use → ___________',
            correctAnswerValue: 'using',
          },
          {
            questionNumber: 26,
            stem: 'wait → ___________',
            correctAnswerValue: 'waiting',
          },
        ],
      },
      {
        exerciseOrder: 5,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5: Điền vào chỗ trống dạng V-ing của các động từ hai âm tiết dưới đây',
        exerciseStem: 'Lưu ý: Các chữ cái được viết IN HOA chính là âm tiết được nhấn trọng âm của từ.',
        questions: [
          {
            questionNumber: 27,
            stem: 'HAPpen → ___________',
            correctAnswerValue: 'happening',
          },
          {
            questionNumber: 28,
            stem: 'enJOY → ___________',
            correctAnswerValue: 'enjoying',
          },
          {
            questionNumber: 29,
            stem: 'ANswer → ___________',
            correctAnswerValue: 'answering',
          },
          {
            questionNumber: 30,
            stem: 'forGET → ___________',
            correctAnswerValue: 'forgetting',
          },
          {
            questionNumber: 31,
            stem: 'preFER → ___________',
            correctAnswerValue: 'preferring',
          },
          {
            questionNumber: 32,
            stem: 'OPen → ___________',
            correctAnswerValue: 'opening',
          },
          {
            questionNumber: 33,
            stem: 'adMIT → ___________',
            correctAnswerValue: 'admitting',
          },
          {
            questionNumber: 34,
            stem: 'VIsit → ___________',
            correctAnswerValue: 'visiting',
          },
        ],
      },
      {
        exerciseOrder: 6,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 6: Hoàn thành câu ở dạng khẳng định hoặc phủ định dựa vào từ gợi ý trong ngoặc',
        exerciseStem:
          "Lưu ý:<br/>Dấu (+) là câu khẳng định<br/>Dấu (-) là câu phủ định<br/><br/>Ví dụ:<br/>1. The lesson <u>is starting</u> now. (start +)<br/>2. Jenny <u>isn't working</u> today. (work -)",
        questions: [
          {
            questionNumber: 35,
            stem: 'You ___________ too fast. (talk +)',
            correctAnswerValue: 'are talking',
            alternativeAnswers: ["'re talking"],
          },
          {
            questionNumber: 36,
            stem: 'The cat ___________ a bird. (eat +)',
            correctAnswerValue: 'is eating',
            alternativeAnswers: ["'s eating"],
          },
          {
            questionNumber: 37,
            stem: 'Kevin ___________ dinner now. (cook +)',
            correctAnswerValue: 'is cooking',
            alternativeAnswers: ["'s cooking"],
          },
          {
            questionNumber: 38,
            stem: 'I ___________ this party. (enjoy -)',
            correctAnswerValue: 'am not enjoying',
            alternativeAnswers: ["'m not enjoying"],
          },
          {
            questionNumber: 39,
            stem: 'I ___________ a good book. (read +)',
            correctAnswerValue: 'am reading',
            alternativeAnswers: ["'m reading"],
          },
          {
            questionNumber: 40,
            stem: 'It ___________ now. (rain +)',
            correctAnswerValue: 'is raining',
            alternativeAnswers: ["'s raining"],
          },
          {
            questionNumber: 41,
            stem: 'You ___________ to me. (listen -)',
            correctAnswerValue: 'are not listening',
            alternativeAnswers: ["aren't listening", "'re not listening"],
          },
          {
            questionNumber: 42,
            stem: 'I ___________ very happy today. (feel +)',
            correctAnswerValue: 'am feeling',
            alternativeAnswers: ["'m feeling"],
          },
          {
            questionNumber: 43,
            stem: 'Peter ___________ to school this week. (go -)',
            correctAnswerValue: 'is not going',
            alternativeAnswers: ["isn't going", "'s not going"],
          },
          {
            questionNumber: 44,
            stem: 'We ___________ a bit of English. (learn +)',
            correctAnswerValue: 'are learning',
            alternativeAnswers: ["'re learning"],
          },
        ],
      },
      {
        exerciseOrder: 7,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 7: Hoàn thành các câu hỏi và trả lời sau bằng các từ cho sẵn',
        questions: [
          {
            questionNumber: 45,
            stem: 'you / do / your homework? / Yes → ___________?',
            correctAnswerValue: 'Are you doing your homework',
          },
          {
            questionNumber: 46,
            stem: 'you / do / your homework? / Yes → ___________.',
            correctAnswerValue: 'Yes, I am',
            alternativeAnswers: ["Yes, I'm"],
          },
          {
            questionNumber: 47,
            stem: 'Steven / cook lunch? / No → ___________?',
            correctAnswerValue: 'Is Steven cooking lunch',
          },
          {
            questionNumber: 48,
            stem: 'Steven / cook lunch? / No → ___________.',
            correctAnswerValue: 'No, he is not',
            alternativeAnswers: ["No, he isn't", "No, he's not"],
          },
          {
            questionNumber: 49,
            stem: 'the / children/ watch TV? / No → ___________?',
            correctAnswerValue: 'Are the children watching TV',
          },
          {
            questionNumber: 50,
            stem: 'the / children/ watch TV? / No → ___________.',
            correctAnswerValue: 'No, they are not',
            alternativeAnswers: ["No, they aren't", "No, they're not"],
          },
          {
            questionNumber: 51,
            stem: 'they / wait / for somebody? / No → ___________?',
            correctAnswerValue: 'Are they waiting for somebody',
          },
          {
            questionNumber: 52,
            stem: 'they / wait / for somebody? / No → ___________.',
            correctAnswerValue: 'No, they are not',
            alternativeAnswers: ["No, they aren't", "No, they're not"],
          },
          {
            questionNumber: 53,
            stem: 'Elizabeth / stay / with her grandparents / this week? / Yes → ___________?',
            correctAnswerValue: 'Is Elizabeth staying with her grandparents this week',
          },
          {
            questionNumber: 54,
            stem: 'Elizabeth / stay / with her grandparents / this week? / Yes → ___________.',
            correctAnswerValue: 'Yes, she is',
            alternativeAnswers: ["Yes, she's"],
          },
        ],
      },
      {
        exerciseOrder: 8,
        exerciseType: EExerciseType.FillInBlank,
        exerciseImage: 'https://hxd8m65scvrb2r3d.public.blob.vercel-storage.com/Dong_tu_section_2_Exercise_8.png',
        exerciseTitle:
          'Exercise 8: Hoàn thành các câu mô tả các bức tranh sau ở thì hiện tại tiếp diễn, sử dụng từ cho sẵn trong bảng',
        exerciseStem:
          'Các từ cho sẵn: brush, brush, drink, get up, go, listen, open, read, read, wash<br/><br/>Ví dụ: She is getting up.',
        questions: [
          {
            questionNumber: 55,
            stem: 'Picture (1): She ___________ her face.',
            correctAnswerValue: 'is washing',
            alternativeAnswers: ["'s washing"],
          },
          {
            questionNumber: 56,
            stem: 'Picture (2): She ___________ her teeth.',
            correctAnswerValue: 'is brushing',
            alternativeAnswers: ["'s brushing"],
          },
          {
            questionNumber: 57,
            stem: 'Picture (3): She ___________ to the radio.',
            correctAnswerValue: 'is listening',
            alternativeAnswers: ["'s listening"],
          },
          {
            questionNumber: 58,
            stem: 'Picture (4): She ___________ coffee.',
            correctAnswerValue: 'is drinking',
            alternativeAnswers: ["'s drinking"],
          },
          {
            questionNumber: 59,
            stem: 'Picture (5): She ___________ the newspaper.',
            correctAnswerValue: 'is reading',
            alternativeAnswers: ["'s reading"],
          },
          {
            questionNumber: 60,
            stem: 'Picture (6): She ___________ her hair.',
            correctAnswerValue: 'is brushing',
            alternativeAnswers: ["'s brushing"],
          },
          {
            questionNumber: 61,
            stem: 'Picture (7): She ___________ the letters.',
            correctAnswerValue: 'is reading',
            alternativeAnswers: ["'s reading"],
          },
          {
            questionNumber: 62,
            stem: 'Picture (8): She ___________ the door.',
            correctAnswerValue: 'is opening',
            alternativeAnswers: ["'s opening"],
          },
          {
            questionNumber: 63,
            stem: 'Picture (9): She ___________ to work.',
            correctAnswerValue: 'is going',
            alternativeAnswers: ["'s going"],
          },
        ],
      },
      {
        exerciseOrder: 9,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 9: Hoàn thành các đoạn văn sau bằng cách điền đúng thì của động từ trong ngoặc vào mỗi ô trống',
        exerciseStem:
          "Chú thích nghĩa:<br/>actor (n): diễn viên<br/>professional (adj): chuyên nghiệp<br/>assistant (n): trợ lý<br/><br/><strong>Passage A:</strong><br/>It's a lovely summer afternoon in the park. Robert and Mick are playing football. Miranda (1)___________ (listen) to music and Carlos (2)___________ (run). My friends, Isabel and Rashid, (3)___________ (have) a picnic. Isabel (4)___________ (eat) a sandwich and Rashid (5)___________ (drink) beer. Over there, I can see my neighbors, Mr. and Mrs. Berénon. They (6)___________ (take) their dog for a walk.<br/><br/><strong>Passage B:</strong><br/>Bruce Laurence is a young actor. He is very excited because right now he (7)___________ (act) in a professional show for the first time. He loves the theatre and this is his first job. It's 7.15 p.m. and he (8)___________ (wait) in his dressing room. His assistant (9)___________ (put) on his make-up and Bruce (10)___________ (practise) his words.<br/><br/>Tonight's show is at the Theatre Royal in Edinburgh. Bruce lives in London, but while he is in the show, he (11)___________ (stay) at a small hotel in Edinburgh. It isn't very comfortable, but single rooms (12)___________ (not cost) very much and two other actors (13)___________ (stay) at the same place. Bruce thinks the show will be a big success.",
        questions: [
          {
            questionNumber: 64,
            stem: '(1) ___________ (listen)',
            correctAnswerValue: 'is listening',
            alternativeAnswers: ["'s listening"],
          },
          {
            questionNumber: 65,
            stem: '(2) ___________ (run)',
            correctAnswerValue: 'is running',
            alternativeAnswers: ["'s running"],
          },
          {
            questionNumber: 66,
            stem: '(3) ___________ (have)',
            correctAnswerValue: 'are having',
            alternativeAnswers: ["'re having"],
          },
          {
            questionNumber: 67,
            stem: '(4) ___________ (eat)',
            correctAnswerValue: 'is eating',
            alternativeAnswers: ["'s eating"],
          },
          {
            questionNumber: 68,
            stem: '(5) ___________ (drink)',
            correctAnswerValue: 'is drinking',
            alternativeAnswers: ["'s drinking"],
          },
          {
            questionNumber: 69,
            stem: '(6) ___________ (take)',
            correctAnswerValue: 'are taking',
            alternativeAnswers: ["'re taking"],
          },
          {
            questionNumber: 70,
            stem: '(7) ___________ (act)',
            correctAnswerValue: 'is acting',
            alternativeAnswers: ["'s acting"],
          },
          {
            questionNumber: 71,
            stem: '(8) ___________ (wait)',
            correctAnswerValue: 'is waiting',
            alternativeAnswers: ["'s waiting"],
          },
          {
            questionNumber: 72,
            stem: '(9) ___________ (put)',
            correctAnswerValue: 'is putting',
            alternativeAnswers: ["'s putting"],
          },
          {
            questionNumber: 73,
            stem: '(10) ___________ (practise)',
            correctAnswerValue: 'is practising',
            alternativeAnswers: ["'s practising", 'is practicing', "'s practicing"],
            note: 'Cả "practising" (British English) và "practicing" (American English) đều đúng',
          },
          {
            questionNumber: 74,
            stem: '(11) ___________ (stay)',
            correctAnswerValue: 'is staying',
            alternativeAnswers: ["'s staying"],
          },
          {
            questionNumber: 75,
            stem: '(12) ___________ (not cost)',
            correctAnswerValue: 'are not costing',
            alternativeAnswers: ["aren't costing", "'re not costing", 'do not cost', "don't cost"],
            note: 'Câu này có thể dùng thì hiện tại tiếp diễn hoặc hiện tại đơn',
          },
          {
            questionNumber: 76,
            stem: '(13) ___________ (stay)',
            correctAnswerValue: 'are staying',
            alternativeAnswers: ["'re staying"],
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 4: Thì quá khứ đơn (Past Simple Tense)',
    testCategory: 'Tenses',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle:
          'Exercise 1: Hãy chọn các đáp án đúng - Đâu là những trạng từ sẽ thường xuất hiện trong thì quá khứ đơn',
        questions: [
          {
            questionNumber: 1,
            stem: 'Đâu là những trạng từ sẽ thường xuất hiện trong thì quá khứ đơn',
            options: [
              { key: 'A', value: 'Yesterday' },
              { key: 'B', value: 'This week/month/year' },
              { key: 'C', value: 'Last week/month/year' },
              { key: 'D', value: 'Right now' },
              { key: 'E', value: 'At present' },
              { key: 'F', value: 'A week ago - two weeks ago' },
            ],
            correctAnswerKeys: ['A', 'C', 'F'],
            explanation: 'Thì quá khứ đơn thường đi với các từ chỉ thời gian đã kết thúc trong quá khứ.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 2: Chọn đúng (True) hoặc sai (False) cho các câu sau',
        questions: [
          {
            questionNumber: 1,
            stem: 'Thì quá khứ đơn chỉ một hành động đã xảy ra ở quá khứ và kết quả vẫn còn lưu lại ở hiện tại.',
            correctAnswerValue: 'FALSE',
            explanation:
              'Sai, đó là cách dùng của thì Hiện tại hoàn thành (Present Perfect). Quá khứ đơn chỉ hành động đã kết thúc hoàn toàn trong quá khứ.',
          },
          {
            questionNumber: 2,
            stem: "Ở dạng khẳng định, cấu trúc chung của câu quá khứ đơn là 'S + verb (past tense)'.",
            correctAnswerValue: 'TRUE',
            explanation: 'Đúng, V-ed hoặc V2 (động từ bất quy tắc).',
          },
          {
            questionNumber: 3,
            stem: 'Các động từ chia thì quá khứ đơn là các động từ bất quy tắc.',
            correctAnswerValue: 'FALSE',
            explanation: 'Sai, có cả động từ có quy tắc (thêm -ed) và bất quy tắc (V2).',
          },
          {
            questionNumber: 4,
            stem: "Dạng phủ định của thì quá khứ đơn với các động từ thường là 'S + did not/didn't + verb (past tense)'.",
            correctAnswerValue: 'FALSE',
            explanation:
              "Sai, sau 'did not/didn't' động từ phải ở dạng nguyên mẫu (V-inf), không phải quá khứ (past tense).",
          },
          {
            questionNumber: 5,
            stem: "Với các động từ có quy tắc và tận cùng là chữ 'e', ta phải thêm đuôi 'ed' khi chia động từ ở thì quá khứ đơn.",
            correctAnswerValue: 'FALSE',
            explanation: "Sai, chỉ cần thêm 'd' (ví dụ: live -> lived).",
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 3: Điền dạng quá khứ của động từ trong ngoặc (Lưu ý: Chỉ điền động từ, không viết S)',
        questions: [
          {
            questionNumber: 1,
            stem: 'My friend (not/come) to my birthday party.',
            correctAnswerValue: "did not come / didn't come",
          },
          { questionNumber: 2, stem: 'They (go) to the cinema last night.', correctAnswerValue: 'went' },
          { questionNumber: 3, stem: 'She (not/like) the book.', correctAnswerValue: "did not like / didn't like" },
          { questionNumber: 4, stem: 'I (eat) all the cakes this morning.', correctAnswerValue: 'ate' },
          {
            questionNumber: 5,
            stem: 'He (not/wear) glasses yesterday.',
            correctAnswerValue: "did not wear / didn't wear",
          },
          { questionNumber: 6, stem: 'We (wait) for the train for an hour.', correctAnswerValue: 'waited' },
          { questionNumber: 7, stem: 'They (not/know) each other.', correctAnswerValue: "did not know / didn't know" },
          { questionNumber: 8, stem: 'She (buy) a new pair of shoes.', correctAnswerValue: 'bought' },
          { questionNumber: 9, stem: 'The police (catch) the thief last week.', correctAnswerValue: 'caught' },
          { questionNumber: 10, stem: 'They (start) to learn English 5 years ago.', correctAnswerValue: 'started' },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 4: Nối các động từ với dạng quá khứ tương ứng',
        matchingPairs: [
          { clue: 'Pay', correctMatch: 'Paid' },
          { clue: 'Write', correctMatch: 'Wrote' },
          { clue: 'See', correctMatch: 'Saw' },
          { clue: 'Go', correctMatch: 'Went' },
          { clue: 'Visit', correctMatch: 'Visited' },
          { clue: 'Meet', correctMatch: 'Met' },
          { clue: 'Drive', correctMatch: 'Drove' },
          { clue: 'Give', correctMatch: 'Gave' },
          { clue: 'Listen', correctMatch: 'Listened' },
          { clue: 'Catch', correctMatch: 'Caught' },
        ],
      },
      {
        exerciseType: EExerciseType.Conjugation,
        exerciseTitle: 'Exercise 5: Chia động từ to be ở dạng quá khứ đơn',
        questions: [
          { questionNumber: 1, stem: 'When I (be) a little boy, I was afraid of the dark.', correctAnswerValue: 'was' },
          {
            questionNumber: 2,
            stem: 'I went to university in 1980. They (be) expensive then.',
            correctAnswerValue: 'were',
          },
          {
            questionNumber: 3,
            stem: 'Peter and Jane (not/be) at the party last night.',
            correctAnswerValue: "were not / weren't",
          },
          { questionNumber: 4, stem: '(be) you sad when you left home?', correctAnswerValue: 'Were' },
          { questionNumber: 5, stem: 'I think it (be) very cold yesterday.', correctAnswerValue: 'was' },
        ],
      },
      {
        exerciseType: EExerciseType.Rewrite,
        exerciseTitle: 'Exercise 6: Sắp xếp các từ/cụm từ dưới đây để tạo thành câu hoàn chỉnh ở thì quá khứ đơn',
        questions: [
          {
            questionNumber: 1,
            stem: 'Last week,/ my family/ have/ a summer vacation/ in Da Nang city.',
            correctAnswerValue: 'Last week, my family had a summer vacation in Da Nang city.',
          },
          { questionNumber: 2, stem: 'What/ you/ do/ yesterday?', correctAnswerValue: 'What did you do yesterday?' },
          {
            questionNumber: 3,
            stem: 'He/ tell/ his friends/ the story of his dog/ 2 days ago.',
            correctAnswerValue: 'He told his friends the story of his dog 2 days ago.',
          },
          {
            questionNumber: 4,
            stem: 'What/sport/you/play/ when/ a child?',
            correctAnswerValue: 'What sport did you play when you were a child?',
          },
          {
            questionNumber: 5,
            stem: 'Jane/ have/ Chemistry class/ from Monday to Wednesday?',
            correctAnswerValue: 'Did Jane have Chemistry class from Monday to Wednesday?',
          },
          {
            questionNumber: 6,
            stem: 'Where/ you/go/last summer holiday?',
            correctAnswerValue: 'Where did you go last summer holiday?',
          },
          {
            questionNumber: 7,
            stem: 'He/not/make/ the mistakes that night.',
            correctAnswerValue: 'He did not make the mistakes that night.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.ClozeTest,
        exerciseTitle:
          'Exercise 8: Điền đúng thì của các động từ trong ngoặc để hoàn thành đoạn văn dưới đây (Quá khứ đơn)',
        questions: [
          {
            questionNumber: 1,
            stem: 'My last holiday (be) a five-day trip to Prague in the Czech Republic.',
            correctAnswerValue: 'was',
          },
          {
            questionNumber: 2,
            stem: 'I know Prague well because I (live) there when I (be) at university, more than ten years ago.',
            correctAnswerValue: 'lived / was',
          },
          {
            questionNumber: 3,
            stem: 'Instead of staying in a hotel, I stayed with one of my old friends. It (be) so much fun, and a little bit like my old life.',
            correctAnswerValue: 'was',
          },
          {
            questionNumber: 4,
            stem: 'I (want) to do all the same things I (do) during my university years, so I (visit) the university.',
            correctAnswerValue: 'wanted / did / visited',
          },
          {
            questionNumber: 5,
            stem: 'It has changed a lot and looks more modern. I also (go) to the supermarket near my old house.',
            correctAnswerValue: 'went',
          },
          {
            questionNumber: 6,
            stem: 'I (love) seeing all the different foods. I (be) really happy to find my favorite cheese and chocolate biscuits, but they (cost) a bit more than I remember!',
            correctAnswerValue: 'loved / was / cost',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 5: Thì tương lai đơn và tương lai gần',
    testCategory: 'Tenses',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 1: Nối các đặc điểm sau với các thì tương ứng',
        matchingPairs: [
          { clue: 'Dự đoán 1 việc sẽ xảy ra trong tương lai', correctMatch: 'Thì tương lai đơn/ Thì tương lai gần' },
          {
            clue: 'Diễn tả hành động sẽ xảy ra trong thời gian gần, có tính chắc chắn cao và có kế hoạch, được quyết định trước thời điểm nói',
            correctMatch: 'Thì tương lai gần',
          },
          { clue: 'Diễn tả một quyết định được đưa ra tại thời điểm nói', correctMatch: 'Thì tương lai đơn' },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 2: Đặt câu ở thì tương lai gần (Be Going To) với các từ cho sẵn và gợi ý tương ứng',
        questions: [
          {
            questionNumber: 1,
            stem: 'how / you / get to London (?)',
            correctAnswerValue: 'How are you going to get to London?',
          },
          {
            questionNumber: 2,
            stem: 'it / snow (-)',
            correctAnswerValue: "It is not going to snow / It's not going to snow",
          },
          {
            questionNumber: 3,
            stem: 'I / cook fish / for lunch (+)',
            correctAnswerValue: "I am going to cook fish for lunch / I'm going to cook fish for lunch",
          },
          {
            questionNumber: 4,
            stem: 'when / you / see the doctor (?)',
            correctAnswerValue: 'When are you going to see the doctor?',
          },
          {
            questionNumber: 5,
            stem: 'Angela / marry / her secretary (+)',
            correctAnswerValue: "Angela is going to marry her secretary / Angela's going to marry her secretary",
          },
          {
            questionNumber: 6,
            stem: 'John / call / this evening (?)',
            correctAnswerValue: 'Is John going to call this evening?',
          },
          {
            questionNumber: 7,
            stem: 'Sally / get the job (-)',
            correctAnswerValue: "Sally is not going to get the job / Sally's not going to get the job",
          },
        ],
      },
      {
        exerciseType: EExerciseType.SentenceArrangement,
        exerciseTitle: 'Exercise 3: Sắp xếp thứ tự các từ cho sẵn để được câu khẳng định hoàn chỉnh',
        questions: [
          {
            questionNumber: 1,
            stem: 'beautiful/ flowers/ will be/ There/ in this area',
            correctAnswerValue: 'There will be beautiful flowers in this area.',
          },
          {
            questionNumber: 2,
            stem: 'dark and/ full of/ clouds/ The sky/ is/ now./ definitely/ It is/ rain/ going to',
            correctAnswerValue: 'The sky is dark and full of clouds now. It is definitely going to rain.',
          },
          {
            questionNumber: 3,
            stem: 'studied/ a lot / I / last night./ will not/ certainly/ fail this exam/I',
            correctAnswerValue: 'I studied a lot last night. I certainly will not fail this exam.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.ErrorCorrection,
        exerciseTitle: 'Exercise 4: Tìm và sửa lỗi sai trong câu (Nếu câu đúng, điền "x")',
        questions: [
          {
            questionNumber: 1,
            stem: "I will to visit my grandmother this weekend. It's a plan.",
            error: 'will to visit',
            correctForm: 'am going to visit',
          },
          {
            questionNumber: 2,
            stem: 'I think I will have a coffee now.',
            error: 'x',
            correctForm: 'x',
          },
          {
            questionNumber: 3,
            stem: 'I promise that I will not to tell anyone.',
            error: 'will not to tell',
            correctForm: 'will not tell',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 5: Đọc các câu sau và chọn câu trả lời đúng cho mỗi câu',
        questions: [
          {
            questionNumber: 1,
            stem: 'I promise that I ___ you tomorrow.',
            options: [
              { key: 'A', value: 'will call' },
              { key: 'B', value: 'am going to call' },
            ],
            correctAnswerKeys: 'A',
            correctAnswerValue: 'will call',
            explanation: "Dùng 'will' cho lời hứa (promise).",
          },
          {
            questionNumber: 2,
            stem: '___ a party on Saturday night.',
            options: [
              { key: 'A', value: 'I am having' },
              { key: 'B', value: 'I will have' },
            ],
            correctAnswerKeys: 'A',
            correctAnswerValue: 'I am having',
            explanation:
              "Dùng Hiện tại tiếp diễn (am having) hoặc Tương lai gần (am going to have) cho kế hoạch đã sắp xếp. 'I am having' là cách nói thông dụng cho sự sắp xếp cá nhân trong tương lai gần.",
          },
          {
            questionNumber: 3,
            stem: "I don't think she ___ the test.",
            options: [
              { key: 'A', value: 'is going to pass' },
              { key: 'B', value: 'will pass' },
            ],
            correctAnswerKeys: 'B',
            correctAnswerValue: 'will pass',
            explanation: "Dùng 'will' cho dự đoán dựa trên ý kiến cá nhân (I don't think).",
          },
          {
            questionNumber: 4,
            stem: 'Look at those black clouds! It ___.',
            options: [
              { key: 'A', value: 'will rain' },
              { key: 'B', value: 'is going to rain' },
            ],
            correctAnswerKeys: 'B',
            correctAnswerValue: 'is going to rain',
            explanation: "Dùng 'be going to' cho dự đoán dựa trên bằng chứng hiện tại (nhìn mây đen).",
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 8: Đọc ngữ cảnh được cho sẵn và chọn cách nói với thì động từ đúng.',
        questions: [
          {
            questionNumber: 1,
            stem: 'Ngữ cảnh 1: Can you help me out? I gotta get this letter to the mail by noon. (Bạn có thể giúp tôi không? Tôi phải gửi bức thư này qua đường bưu điện vào buổi trưa.)',
            options: [
              { key: 'A', value: "Sure. I'm going to drop it off on my way to work." },
              { key: 'B', value: "Sure. I'll drop it off on my way to work." },
            ],
            correctAnswerKeys: 'B',
            correctAnswerValue: "Sure. I'll drop it off on my way to work.",
            explanation:
              'Đây là quyết định/đề nghị tự phát được đưa ra ngay tại thời điểm nói để đáp lại yêu cầu. Dùng **Tương lai đơn (Will)**.',
          },
          {
            questionNumber: 2,
            stem: 'Ngữ cảnh 2: Tell me again, why are you leaving work early? (Hãy nói lại cho tôi biết, tại sao bạn lại rời chỗ làm sớm?)',
            options: [
              { key: 'A', value: "I'm going to attend my cousin's funeral." },
              { key: 'B', value: "I'll attend my cousin's funeral." },
            ],
            correctAnswerKeys: 'A',
            correctAnswerValue: "I'm going to attend my cousin's funeral.",
            explanation:
              'Đây là hành động đã được lên kế hoạch/sắp xếp trước, dùng để giải thích lý do. Dùng **Tương lai gần (Be going to)**.',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 6: Danh động từ và Động từ nguyên thể',
    testCategory: 'Verb Forms',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 1: Chọn True nếu khẳng định là đúng, False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: 'Danh động từ là cụm một danh từ đứng cạnh một động từ.',
            correctAnswerValue: 'FALSE',
            explanation: 'Sai, Danh động từ (Gerund) là động từ thêm -ing (V-ing) và hoạt động như một danh từ.',
          },
          {
            questionNumber: 2,
            stem: 'Danh động từ có thể làm chủ ngữ và cũng có thể làm tân ngữ trong câu.',
            correctAnswerValue: 'TRUE',
            explanation: 'Đúng, V-ing có thể đóng vai trò là S, O hoặc bổ ngữ.',
          },
          {
            questionNumber: 3,
            stem: 'Động từ nguyên thể nếu muốn làm chủ ngữ trong câu phải được đổi thành dạng V-ing.',
            correctAnswerValue: 'TRUE',
            explanation:
              'Đúng, thường dùng V-ing làm chủ ngữ. Tuy nhiên, To V cũng có thể làm chủ ngữ nhưng ít phổ biến hơn.',
          },
          {
            questionNumber: 4,
            stem: 'Một động từ chỉ có thể được đi sau bởi V-ing hoặc to V.',
            correctAnswerValue: 'FALSE',
            explanation:
              'Sai, một số động từ có thể đi với cả V-ing và To V (thậm chí là V-inf trần) mà ý nghĩa không thay đổi hoặc thay đổi khác nhau.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle:
          'Exercise 2: Chọn CÁC đáp án đúng - Động từ nào sau đây khi được theo sau bởi V-ing hay to V thì nghĩa hầu như không có sự khác biệt:',
        questions: [
          {
            questionNumber: 1,
            options: [
              { key: 'A', value: 'decide' },
              { key: 'B', value: 'begin' },
              { key: 'C', value: 'want' },
              { key: 'D', value: 'agree' },
              { key: 'E', value: 'start' },
              { key: 'F', value: 'continue' },
              { key: 'G', value: 'promise' },
              { key: 'H', value: 'like' },
              { key: 'I', value: 'love' },
              { key: 'J', value: 'refuse' },
              { key: 'K', value: 'hate' },
            ],
            correctAnswerKeys: `['B', 'E', 'F', 'H', 'I', 'J', 'K']`,
            correctAnswerValue: 'B, E, F, H, I, J, K',
            explanation:
              'Các động từ chỉ sở thích, cảm xúc và bắt đầu (begin, start, continue) thường có thể dùng với cả V-ing và To V mà nghĩa không khác biệt nhiều.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 3: Nối các từ vựng đã học với nghĩa tiếng Việt tương ứng',
        matchingPairs: [
          { clue: 'Từ chối làm việc gì', correctMatch: 'Refuse to V' },
          { clue: 'Hứa làm việc gì', correctMatch: 'Promise to V' },
          { clue: 'Quyết định làm việc gì', correctMatch: 'Decide to V' },
          { clue: 'Đồng ý làm việc gì', correctMatch: 'Agree to V' },
          { clue: 'Mong đợi làm việc gì', correctMatch: 'Expect to V' },
          { clue: 'Thích làm việc gì', correctMatch: 'Enjoy V-ing' },
          { clue: 'Nghĩ về/cân nhắc việc gì', correctMatch: 'Consider V-ing' },
          { clue: 'Đề nghị/gợi ý làm việc gì', correctMatch: 'Suggest V-ing' },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 4: Điền dạng đúng của từ trong ngoặc (V-ing hoặc to V) để hoàn thành câu.',
        questions: [
          { questionNumber: 1, stem: 'Do you enjoy (cook)?', correctAnswerValue: 'cooking' },
          { questionNumber: 2, stem: "I can't afford (buy) a new car.", correctAnswerValue: 'to buy' },
          {
            questionNumber: 3,
            stem: 'She tried (avoid) (answer) my question.',
            correctAnswerValue: 'to avoid / answering',
          },
          { questionNumber: 4, stem: 'I decided (look) for a new job.', correctAnswerValue: 'to look' },
          { questionNumber: 5, stem: '(Read) is her favorite hobby.', correctAnswerValue: 'Reading' },
          { questionNumber: 6, stem: 'I suggested (go) out for dinner.', correctAnswerValue: 'going' },
          { questionNumber: 7, stem: 'They offered (help) me with my homework.', correctAnswerValue: 'to help' },
        ],
      },
      {
        exerciseType: EExerciseType.ClozeTest,
        exerciseTitle: 'Exercise 7: Điền dạng đúng của động từ (V-ing hoặc to V) trong ngoặc để hoàn thành đoạn văn.',
        questions: [
          {
            questionNumber: 1,
            passage:
              "I don't mind (1) _______ (pay) a high salary, but I haven't been paid well enough since I started (2) _______ (work) here, my boss promised (3) _______ (give) me an increase, and to send me to Europe and Asia. I expected to enjoy (4) _______ (do) some traveling, but I don't do any traveling. I've tried (5) _______ (talk) to him about it, but he won't listen. So I decided (6) _______ (look) for another job.",
            stems: [
              { index: 1, word: '(pay)', correctAnswerValue: 'paying', reason: 'mind + V-ing' },
              {
                index: 2,
                word: '(work)',
                correctAnswerValue: 'working',
                reason: "start + V-ing/to V (ở đây dùng V-ing phổ biến hơn sau giới từ 'since')",
              },
              { index: 3, word: '(give)', correctAnswerValue: 'to give', reason: 'promise + to V' },
              { index: 4, word: '(do)', correctAnswerValue: 'doing', reason: 'enjoy + V-ing' },
              { index: 5, word: '(talk)', correctAnswerValue: 'talking', reason: 'try + V-ing (thử làm gì)' },
              { index: 6, word: '(look)', correctAnswerValue: 'to look', reason: 'decide + to V' },
            ],
          },
          {
            questionNumber: 2,
            passage:
              "I've always been afraid of water. Then one day last year I thought, 'I don't want (7) _______ (feel) this.' So I found some special lessons for people like me. I'm learning to swim, and next summer I plan to take water-skiing lessons. I needed to be at work early this morning. But I forgot (8) _______ (set) my alarm clock, and I woke up at 7.30 instead of 6.30.",
            stems: [
              { index: 7, word: '(feel)', correctAnswerValue: 'to feel', reason: 'want + to V' },
              {
                index: 8,
                word: '(set)',
                correctAnswerValue: 'to set',
                reason: 'forget + to V (quên làm một việc phải làm)',
              },
            ],
          },
          {
            questionNumber: 3,
            passage:
              "I began (9) _______ (go) to lessons twice a week since then. I've continued (10) _______ (go) on with karate for four years ago, and I've continued (11) _______ (do) it twice a week since then. I love it. I've visited some other karate clubs, but I prefer (12) _______ (learn) at my own club, because the teaching is so good.",
            stems: [
              { index: 9, word: '(go)', correctAnswerValue: 'going / to go', reason: 'begin + V-ing/to V' },
              { index: 10, word: '(do)', correctAnswerValue: 'doing / to do', reason: 'continue + V-ing/to V' },
              {
                index: 11,
                word: '(go)',
                correctAnswerValue: 'going',
                reason: 'tiếp tục đi học (thói quen, hành động đang diễn ra)',
              },
              { index: 12, word: '(learn)', correctAnswerValue: 'to learn', reason: 'prefer + to V' },
            ],
          },
        ],
      },
    ],
  },
  // Đại từ
  {
    testName: 'Section 1: Đại từ nhân xưng',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1: Chọn đáp án đúng',
        questions: [
          {
            questionNumber: 1,
            stem: 'Đáp án nào sau đây CHỈ chứa đại từ nhân xưng',
            options: [
              { key: 'A', value: 'I/Me/Myself/Mine/My' },
              { key: 'B', value: 'I/You/He/She/Her/His/Him' },
              { key: 'C', value: 'I/You/We/He/Him/Me/Them' },
              { key: 'D', value: 'I/You/We/They/Themselves' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'I/You/We/He/Him/Me/Them',
            note: 'Đại từ nhân xưng chỉ bao gồm Subject pronouns (I, You, We, He, She, It, They) và Object pronouns (Me, You, Us, Him, Her, It, Them). Các đáp án khác có chứa đại từ phản thân (Myself, Themselves), tính từ sở hữu (My, His), hoặc đại từ sở hữu (Mine).',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 2: Nối các đại từ nhân xưng sau với các nhóm phù hợp',
        matchingOptions: ['Đại từ nhân xưng làm Chủ ngữ', 'Đại từ nhân xưng làm Tân ngữ'],
        questions: [
          {
            questionNumber: 2,
            stem: 'I/You/We/They/He/She/It',
            correctAnswerValue: 'Đại từ nhân xưng làm Chủ ngữ',
          },
          {
            questionNumber: 3,
            stem: 'Me/You/Us/Them/Him/Her/It',
            correctAnswerValue: 'Đại từ nhân xưng làm Tân ngữ',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 3: Hoàn thành bảng sau bằng cách điền Subject pronoun (Đại từ nhân xưng làm chủ ngữ) hoặc Object pronoun (Đại từ nhân xưng làm tân ngữ) phù hợp vào mỗi chỗ trống.',
        questions: [
          {
            questionNumber: 4,
            stem: 'Subject pronoun: I → Object pronoun: ___________',
            correctAnswerValue: 'me',
          },
          {
            questionNumber: 5,
            stem: 'Subject pronoun: ___________ → Object pronoun: you',
            correctAnswerValue: 'you',
          },
          {
            questionNumber: 6,
            stem: 'Subject pronoun: he → Object pronoun: ___________',
            correctAnswerValue: 'him',
          },
          {
            questionNumber: 7,
            stem: 'Subject pronoun: ___________ → Object pronoun: her',
            correctAnswerValue: 'she',
          },
          {
            questionNumber: 8,
            stem: 'Subject pronoun: we → Object pronoun: ___________',
            correctAnswerValue: 'us',
          },
          {
            questionNumber: 9,
            stem: 'Subject pronoun: ___________ → Object pronoun: them',
            correctAnswerValue: 'they',
          },
        ],
      },
      {
        exerciseOrder: 4,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 4: Đọc mỗi câu sau và chọn một đáp án đúng trong mỗi câu.',
        questions: [
          {
            questionNumber: 10,
            stem: 'Can you help … with these bags?',
            options: [
              { key: 'A', value: 'we' },
              { key: 'B', value: 'us' },
              { key: 'C', value: 'our' },
              { key: 'D', value: 'they' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'us',
            note: 'Sau động từ "help" cần tân ngữ, dùng "us"',
          },
          {
            questionNumber: 11,
            stem: '… usually see … at the weekend.',
            options: [
              { key: 'A', value: 'We, them' },
              { key: 'B', value: 'Us, they' },
              { key: 'C', value: 'We, they' },
              { key: 'D', value: 'Us, them' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'We, them',
            note: 'Chủ ngữ dùng "We", tân ngữ sau "see" dùng "them"',
          },
          {
            questionNumber: 12,
            stem: 'How did you teach … to read?',
            options: [
              { key: 'A', value: 'he' },
              { key: 'B', value: 'we' },
              { key: 'C', value: 'him' },
              { key: 'D', value: 'his' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'him',
            note: 'Sau động từ "teach" cần tân ngữ, dùng "him"',
          },
          {
            questionNumber: 13,
            stem: '… write to … once a month.',
            options: [
              { key: 'A', value: 'I, she' },
              { key: 'B', value: 'Me, her' },
              { key: 'C', value: 'I, her' },
              { key: 'D', value: 'Me, she' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'I, her',
            note: 'Chủ ngữ dùng "I", tân ngữ sau giới từ "to" dùng "her"',
          },
          {
            questionNumber: 14,
            stem: `… loves … very much but … doesn't love …`,
            options: [
              { key: 'A', value: 'He - she - she - he' },
              { key: 'B', value: 'Him - her - her - him' },
              { key: 'C', value: 'He - her - she - him' },
              { key: 'D', value: 'He - her - she - he' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'He - her - she - him',
            note: 'Vị trí 1 và 3 là chủ ngữ (He, she), vị trí 2 và 4 là tân ngữ (her, him)',
          },
          {
            questionNumber: 15,
            stem: `Why did you ask … to come? … don't like …`,
            options: [
              { key: 'A', value: 'they - I - they' },
              { key: 'B', value: 'them - I - them' },
              { key: 'C', value: 'them - Me - they' },
              { key: 'D', value: 'they - Me - them' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'them - I - them',
            note: 'Vị trí 1 và 3 là tân ngữ (them), vị trí 2 là chủ ngữ (I)',
          },
          {
            questionNumber: 16,
            stem: `Please don't wait for …`,
            options: [
              { key: 'A', value: 'we' },
              { key: 'B', value: 'us' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'us',
            note: 'Sau giới từ "for" cần tân ngữ, dùng "us"',
          },
          {
            questionNumber: 17,
            stem: 'Did … tell … the news?',
            options: [
              { key: 'A', value: 'they - she' },
              { key: 'B', value: 'them - her' },
              { key: 'C', value: 'them - she' },
              { key: 'D', value: 'they - her' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'they - her',
            note: 'Vị trí 1 là chủ ngữ sau trợ động từ "Did" (they), vị trí 2 là tân ngữ gián tiếp (her)',
          },
        ],
      },
      {
        exerciseOrder: 5,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5: Điền đại từ nhân xưng thích hợp vào chỗ trống',
        questions: [
          {
            questionNumber: 18,
            stem: 'Peter and I are brothers. ___________ share a bedroom together.',
            correctAnswerValue: 'We',
            alternativeAnswers: ['we'],
          },
          {
            questionNumber: 19,
            stem: `Sue isn't well. Dad is taking ___________ to see a doctor.`,
            correctAnswerValue: 'her',
          },
          {
            questionNumber: 20,
            stem: `My brother is a teacher. ___________ teaches English.`,
            correctAnswerValue: 'He',
            alternativeAnswers: ['he'],
          },
          {
            questionNumber: 21,
            stem: 'All his students like ___________ very much.',
            correctAnswerValue: 'him',
          },
          {
            questionNumber: 22,
            stem: 'Who are those people? Where are ___________ from?',
            correctAnswerValue: 'they',
          },
          {
            questionNumber: 23,
            stem: 'Mom is a doctor. ___________ works in a hospital.',
            correctAnswerValue: 'She',
            alternativeAnswers: ['she'],
          },
          {
            questionNumber: 24,
            stem: 'The sky is getting dark. ___________ is going to rain.',
            correctAnswerValue: 'It',
            alternativeAnswers: ['it'],
          },
          {
            questionNumber: 25,
            stem: 'May ___________ borrow your pen?',
            correctAnswerValue: 'I',
            alternativeAnswers: ['i'],
          },
          {
            questionNumber: 26,
            stem: 'What are ___________ reading, Jenny?',
            correctAnswerValue: 'you',
          },
        ],
      },
      {
        exerciseOrder: 6,
        exerciseType: EExerciseType.Matching,
        exerciseTitle:
          'Exercise 6: Hãy nối các vế câu tương ứng ở bên phải với câu nối tiếp tương ứng ở bên trái để tạo thành ngữ cảnh hoàn chỉnh',
        matchingOptions: [
          'People in Brazil do not speak Spanish.',
          'Can you explain these answers to me again?',
          'I live with Joe and Mark.',
          'The president of Russia is in the United States now.',
          `I don't like this test.`,
        ],
        questions: [
          {
            questionNumber: 27,
            stem: 'I do not understand them.',
            correctAnswerValue: 'Can you explain these answers to me again?',
          },
          {
            questionNumber: 28,
            stem: 'We have a special dinner for him tonight.',
            correctAnswerValue: 'The president of Russia is in the United States now.',
          },
          {
            questionNumber: 29,
            stem: 'They speak Portuguese.',
            correctAnswerValue: 'People in Brazil do not speak Spanish.',
          },
          {
            questionNumber: 30,
            stem: 'They are nice people.',
            correctAnswerValue: 'I live with Joe and Mark.',
          },
          {
            questionNumber: 31,
            stem: 'It is very difficult for me.',
            correctAnswerValue: `I don't like this test.`,
          },
        ],
      },
      {
        exerciseOrder: 7,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 7: Điền vào chỗ trống trong các câu sau một Subject pronoun hoặc Object pronoun phù hợp',
        exerciseStem: 'Ví dụ: My favorite subject is Maths. (I find interesting) → I find it interesting.',
        questions: [
          {
            questionNumber: 32,
            stem: 'Ellen and Ali work at the bank. ___________ like their jobs.',
            correctAnswerValue: 'They',
            alternativeAnswers: ['they'],
          },
          {
            questionNumber: 33,
            stem: 'You need to talk to Maria. Please call ___________.',
            correctAnswerValue: 'her',
          },
          {
            questionNumber: 34,
            stem: 'Where are my keys? Do you see ___________?',
            correctAnswerValue: 'them',
          },
          {
            questionNumber: 35,
            stem: 'Where are my keys? ___________ are not on the table.',
            correctAnswerValue: 'They',
            alternativeAnswers: ['they'],
          },
          {
            questionNumber: 36,
            stem: 'My friends like chocolate. This chocolate cake is for ___________.',
            correctAnswerValue: 'them',
          },
          {
            questionNumber: 37,
            stem: 'My friends like chocolate. ___________ is delicious.',
            correctAnswerValue: 'It',
            alternativeAnswers: ['it'],
            note: '"It" ở đây thay thế cho "chocolate"',
          },
          {
            questionNumber: 38,
            stem: 'That computer is expensive. You cannot buy ___________.',
            correctAnswerValue: 'it',
          },
          {
            questionNumber: 39,
            stem: 'Lucas needs this check. Please take ___________ to him.',
            correctAnswerValue: 'it',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 2: Tính từ sở hữu và Đại từ sở hữu',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseOrder: 1,
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 1: Chọn True nếu khẳng định là đúng - False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: 'Tính từ sở hữu đóng vai trò như 1 tính từ trong câu',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'True',
            note: 'Tính từ sở hữu (my, your, his, her, its, our, their) đứng trước danh từ để bổ nghĩa, giống như tính từ',
          },
          {
            questionNumber: 2,
            stem: 'Tính từ sở hữu có thể làm chủ ngữ trong câu',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Tính từ sở hữu KHÔNG thể làm chủ ngữ, phải đi kèm với danh từ. Chỉ đại từ sở hữu (mine, yours, his, hers, ours, theirs) mới có thể làm chủ ngữ',
          },
          {
            questionNumber: 3,
            stem: 'Đại từ sở hữu chính là đại diện cho một tính từ sở hữu đi kèm với một danh từ',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'True',
            note: 'Ví dụ: "my book" → "mine" (mine = my book)',
          },
          {
            questionNumber: 4,
            stem: 'Đại từ sở hữu không thể đứng đầu câu',
            options: [
              { key: 'A', value: 'True' },
              { key: 'B', value: 'False' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'False',
            note: 'Đại từ sở hữu CÓ THỂ đứng đầu câu làm chủ ngữ. Ví dụ: "Mine is red." (Của tôi màu đỏ)',
          },
        ],
      },
      {
        exerciseOrder: 2,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 2: Điền từ phù hợp vào từng ô sau để hoàn thành bảng',
        exerciseImage: 'https://hxd8m65scvrb2r3d.public.blob.vercel-storage.com/Dai_tu_section_2_exercise_2.png',
        questions: [
          {
            questionNumber: 5,
            stem: '(1) ___________',
            correctAnswerValue: 'my',
          },
          {
            questionNumber: 6,
            stem: '(2) ___________',
            correctAnswerValue: 'mine',
          },
          {
            questionNumber: 7,
            stem: '(3) ___________',
            correctAnswerValue: 'your',
          },
          {
            questionNumber: 8,
            stem: '(4) ___________',
            correctAnswerValue: 'yours',
          },
          {
            questionNumber: 9,
            stem: '(5) ___________',
            correctAnswerValue: 'his',
          },
          {
            questionNumber: 10,
            stem: '(6) ___________',
            correctAnswerValue: 'her',
          },
          {
            questionNumber: 11,
            stem: '(7) ___________',
            correctAnswerValue: 'hers',
          },
          {
            questionNumber: 12,
            stem: '(8) ___________',
            correctAnswerValue: 'our',
          },
          {
            questionNumber: 13,
            stem: '(9) ___________',
            correctAnswerValue: 'ours',
          },
          {
            questionNumber: 14,
            stem: '(10) ___________',
            correctAnswerValue: 'theirs',
          },
        ],
      },
      {
        exerciseOrder: 3,
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 3: Chọn một đáp án đúng để hoàn thành những câu sau',
        questions: [
          {
            questionNumber: 15,
            stem: 'The bird sings … happy tune.',
            options: [
              { key: 'A', value: 'its' },
              { key: 'B', value: 'it' },
              { key: 'C', value: "it's" },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'its',
            note: 'Trước danh từ "tune" cần tính từ sở hữu "its"',
          },
          {
            questionNumber: 16,
            stem: 'Listen to … carefully.',
            options: [
              { key: 'A', value: 'her' },
              { key: 'B', value: 'hers' },
              { key: 'C', value: "her's" },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'her',
            note: 'Sau giới từ "to" cần tân ngữ "her"',
          },
          {
            questionNumber: 17,
            stem: '… uncle is a doctor. He is a nice person.',
            options: [
              { key: 'A', value: 'His' },
              { key: 'B', value: 'He' },
              { key: 'C', value: 'She' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'His',
            note: 'Trước danh từ "uncle" cần tính từ sở hữu "His"',
          },
          {
            questionNumber: 18,
            stem: 'That old man is kind to …',
            options: [
              { key: 'A', value: 'our' },
              { key: 'B', value: 'us' },
              { key: 'C', value: 'we' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'us',
            note: 'Sau giới từ "to" cần tân ngữ "us"',
          },
          {
            questionNumber: 19,
            stem: 'William and Tracy love … dogs so much.',
            options: [
              { key: 'A', value: 'their' },
              { key: 'B', value: 'theirs' },
              { key: 'C', value: 'they' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'their',
            note: 'Trước danh từ "dogs" cần tính từ sở hữu "their"',
          },
          {
            questionNumber: 20,
            stem: 'My car is new but … is old.',
            options: [
              { key: 'A', value: 'her' },
              { key: 'B', value: 'hers' },
              { key: 'C', value: 'she' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'hers',
            note: 'Làm chủ ngữ, thay thế "her car" → dùng đại từ sở hữu "hers"',
          },
          {
            questionNumber: 21,
            stem: 'The teacher told … an interesting story.',
            options: [
              { key: 'A', value: 'us' },
              { key: 'B', value: 'our' },
              { key: 'C', value: 'we' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'us',
            note: 'Sau động từ "told" cần tân ngữ "us"',
          },
          {
            questionNumber: 22,
            stem: 'I want to sit between you and …',
            options: [
              { key: 'A', value: 'he' },
              { key: 'B', value: 'him' },
              { key: 'C', value: 'his' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'him',
            note: 'Sau giới từ "between" cần tân ngữ "him"',
          },
          {
            questionNumber: 23,
            stem: 'She has an apple in … hand.',
            options: [
              { key: 'A', value: 'she' },
              { key: 'B', value: 'her' },
              { key: 'C', value: 'hers' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'her',
            note: 'Trước danh từ "hand" cần tính từ sở hữu "her"',
          },
          {
            questionNumber: 24,
            stem: 'Bob and Ted live near … school.',
            options: [
              { key: 'A', value: 'them' },
              { key: 'B', value: 'their' },
              { key: 'C', value: 'they' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'their',
            note: 'Trước danh từ "school" cần tính từ sở hữu "their"',
          },
        ],
      },
      {
        exerciseOrder: 4,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 4: Viết lại câu với Đại từ sở hữu',
        exerciseStem: "Ví dụ: That's my newspaper. → That's <strong><u>mine</u></strong>.",
        questions: [
          {
            questionNumber: 25,
            stem: 'I prefer our house to their house. → I prefer our house to ___________.',
            correctAnswerValue: 'theirs',
          },
          {
            questionNumber: 26,
            stem: 'Her hair looks better than your hair. → Her hair looks better than ___________.',
            correctAnswerValue: 'yours',
          },
          {
            questionNumber: 27,
            stem: 'That dog looks like our dog. → That dog looks like ___________.',
            correctAnswerValue: 'ours',
          },
          {
            questionNumber: 28,
            stem: "That car's not her car. → That car's not ___________.",
            correctAnswerValue: 'hers',
          },
          {
            questionNumber: 29,
            stem: "This coat isn't my coat. → This coat isn't ___________.",
            correctAnswerValue: 'mine',
          },
          {
            questionNumber: 30,
            stem: 'My cooking is better than his cooking. → My cooking is better than ___________.',
            correctAnswerValue: 'his',
          },
          {
            questionNumber: 31,
            stem: 'Is this bike your bike? → Is this bike ___________?',
            correctAnswerValue: 'yours',
          },
        ],
      },
      {
        exerciseOrder: 5,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5: Nhìn tranh và hoàn thành đoạn văn dưới đây với cụm từ chứa tính từ sở hữu',
        exerciseImage: 'https://hxd8m65scvrb2r3d.public.blob.vercel-storage.com/Dai_tu_section_2_exercise_5.png',
        exerciseStem: `ANNA and HER HUSBAND MARK went on holiday with (1)___________ Joe and (2)___________ Emma in (3)___________ . There's room for six in the van, so Anna invited (4)___________ Frank to go with them, but she didn't ask (5)___________ Lucy, because Mark doesn't get on with Lucy. Mark asked (6)___________ Louise, but she said no, because she doesn't like Frank. Then Mark asked (7)___________ Simon, but he wasn't free. However, (8)___________ Pete was happy to go with them, so everything was OK.`,
        questions: [
          {
            questionNumber: 32,
            stem: 'with (1)___________ Joe',
            correctAnswerValue: 'their son',
            alternativeAnswers: ['her son', 'his son'],
            note: 'Joe là con của Anna và Mark',
          },
          {
            questionNumber: 33,
            stem: 'and (2)___________ Emma',
            correctAnswerValue: 'their daughter',
            alternativeAnswers: ['her daughter', 'his daughter'],
            note: 'Emma là con gái của Anna và Mark',
          },
          {
            questionNumber: 34,
            stem: 'in (3)___________',
            correctAnswerValue: 'their van',
            alternativeAnswers: ['her van', 'his van'],
            note: 'Van của Anna và Mark',
          },
          {
            questionNumber: 35,
            stem: 'invited (4)___________ Frank',
            correctAnswerValue: 'her brother',
            alternativeAnswers: ['his brother'],
            note: 'Frank là anh/em trai của Anna',
          },
          {
            questionNumber: 36,
            stem: 'ask (5)___________ Lucy',
            correctAnswerValue: 'her sister',
            alternativeAnswers: ['his sister'],
            note: 'Lucy là chị/em gái của Anna',
          },
          {
            questionNumber: 37,
            stem: 'asked (6)___________ Louise',
            correctAnswerValue: 'his sister',
            alternativeAnswers: ['her sister'],
            note: 'Louise là chị/em gái của Mark',
          },
          {
            questionNumber: 38,
            stem: 'asked (7)___________ Simon',
            correctAnswerValue: 'his brother',
            alternativeAnswers: ['her brother'],
            note: 'Simon là anh/em trai của Mark',
          },
          {
            questionNumber: 39,
            stem: '(8)___________ Pete',
            correctAnswerValue: 'their friend',
            alternativeAnswers: ['her friend', 'his friend'],
            note: 'Pete là bạn của Anna và Mark',
          },
        ],
      },
      {
        exerciseOrder: 6,
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 6: Chọn từ phù hợp để hoàn thành đoạn văn sau',
        exerciseStem: `I live next door to (1)___________ (my / me) friend David and (2)___________ (his / her) sister, Fiona. David is in (3)___________ (ours / our) class at college; he's taller than Fiona and (4)___________ (her / his) hair is darker. Fiona's two years older than (5)___________ (his / her) brother. She's an art student and she's always got paint on (6)___________ (his / her) fingers! (7)___________ (Theirs / Their) house is small but (8)___________ (it's / its) garden is beautiful and (9)___________ (their / theirs) barbecues are always great fun!`,
        questions: [
          {
            questionNumber: 40,
            stem: '(1) ___________ (my / me)',
            correctAnswerValue: 'my',
          },
          {
            questionNumber: 41,
            stem: '(2) ___________ (his / her)',
            correctAnswerValue: 'his',
          },
          {
            questionNumber: 42,
            stem: '(3) ___________ (ours / our)',
            correctAnswerValue: 'our',
          },
          {
            questionNumber: 43,
            stem: '(4) ___________ (her / his)',
            correctAnswerValue: 'his',
          },
          {
            questionNumber: 44,
            stem: '(5) ___________ (his / her)',
            correctAnswerValue: 'her',
          },
          {
            questionNumber: 45,
            stem: '(6) ___________ (his / her)',
            correctAnswerValue: 'her',
          },
          {
            questionNumber: 46,
            stem: '(7) ___________ (Theirs / Their)',
            correctAnswerValue: 'Their',
          },
          {
            questionNumber: 47,
            stem: "(8) ___________ (it's / its)",
            correctAnswerValue: 'its',
          },
          {
            questionNumber: 48,
            stem: '(9) ___________ (their / theirs)',
            correctAnswerValue: 'their',
          },
        ],
      },
      {
        exerciseOrder: 7,
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 7: Chọn từ phù hợp trong các từ dưới đây để điền vào chỗ trống',
        exerciseStem: `Từ cho sẵn: <b>my, our, yours, hers, ours, mine</b><br/>A: Is this your suitcase, Sir?<br/>B: Yes. It's (1)___________.<br/>A: Can you open it for me, please? OK. Are these things (2)___________?<br/>B: Some of them are (3)___________ clothes, but some of them belong to my wife.<br/>A: Is this dress (4)___________?<br/>B: Yes, she bought it in Thailand.<br/>A: There are a lot of toys here. Whose are they?<br/>B: They belong to (5)___________ daughter.<br/>A: What about all this money. Is it (6)___________?<br/>B: Oh, no, it isn't (7)___________!`,
        matchingOptions: ['my', 'our', 'yours', 'hers', 'ours', 'mine'],
        questions: [
          {
            questionNumber: 49,
            stem: "(1) It's ___________",
            correctAnswerValue: 'mine',
          },
          {
            questionNumber: 50,
            stem: '(2) Are these things ___________?',
            correctAnswerValue: 'yours',
          },
          {
            questionNumber: 51,
            stem: '(3) Some of them are ___________ clothes',
            correctAnswerValue: 'my',
          },
          {
            questionNumber: 52,
            stem: '(4) Is this dress ___________?',
            correctAnswerValue: 'hers',
          },
          {
            questionNumber: 53,
            stem: '(5) They belong to ___________ daughter',
            correctAnswerValue: 'our',
          },
          {
            questionNumber: 54,
            stem: '(6) Is it ___________?',
            correctAnswerValue: 'yours',
          },
          {
            questionNumber: 55,
            stem: "(7) it isn't ___________!",
            correctAnswerValue: 'ours',
          },
        ],
      },
    ],
  },

  {
    testName: 'Section 3: Đại từ phản thân (Reflexive Pronouns)',
    testCategory: 'Pronouns',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 1: Nối mỗi đại từ phản thân với ngôi đại từ tương ứng',
        matchingPairs: [
          { clue: 'Myself', correctMatch: 'Ngôi thứ nhất số ít' },
          { clue: 'Ourselves', correctMatch: 'Ngôi thứ nhất số nhiều' },
          { clue: 'Yourself', correctMatch: 'Ngôi thứ hai số ít' },
          { clue: 'Yourselves', correctMatch: 'Ngôi thứ hai số nhiều' },
          { clue: 'Himself', correctMatch: 'Ngôi thứ ba số ít (nam)' },
          { clue: 'Herself', correctMatch: 'Ngôi thứ ba số ít (nữ)' },
          { clue: 'Itself', correctMatch: 'Ngôi thứ ba số ít (vật)' },
          { clue: 'Themselves', correctMatch: 'Ngôi thứ ba số nhiều' },
        ],
      },
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 2: Chọn True nếu khẳng định là đúng, False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            stem: 'Đại từ phản thân có thể làm tân ngữ đứng sau cả động từ và giới từ.',
            correctAnswerValue: 'TRUE',
            explanation:
              "Đúng. Ví dụ: 'He hurt himself' (sau động từ); 'They did it by themselves' (sau giới từ 'by').",
          },
          {
            questionNumber: 2,
            stem: 'Đại từ phản thân có thể đứng trước chủ thể để nhấn mạnh.',
            correctAnswerValue: 'FALSE',
            explanation:
              "Sai. Đại từ phản thân dùng để nhấn mạnh phải đứng ngay sau chủ thể hoặc sau tân ngữ. Ví dụ: 'I myself did it'.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 3: Hoàn thành các câu sau bằng các Đại từ phản thân cho sẵn',
        questions: [
          {
            questionNumber: 1,
            stem: 'No one can help us. We have to help **ourselves**.',
            correctAnswerValue: 'ourselves',
          },
          { questionNumber: 2, stem: 'Jane always makes the bed by **herself**.', correctAnswerValue: 'herself' },
          { questionNumber: 3, stem: 'They painted the wall all by **themselves**.', correctAnswerValue: 'themselves' },
          { questionNumber: 4, stem: 'I hurt **myself** in the playground yesterday.', correctAnswerValue: 'myself' },
          {
            questionNumber: 5,
            stem: 'John, you must behave **yourself** before your friends.',
            correctAnswerValue: 'yourself',
          },
          {
            questionNumber: 6,
            stem: 'Children, you must do the homework **yourselves**.',
            correctAnswerValue: 'yourselves',
          },
          { questionNumber: 7, stem: 'Tom defended **himself** against the bullies.', correctAnswerValue: 'himself' },
          { questionNumber: 8, stem: 'The dog is scratching **itself**.', correctAnswerValue: 'itself' },
        ],
      },
    ],
  },
  // Tính từ và trạng từ
  {
    testName: 'TÍNH TỪ (ADJECTIVE)',
    testCategory: 'Grammar',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1: Hãy chọn những phát biểu đúng.',
        questions: [
          // Do không có thông tin cụ thể về các phát biểu trong file PDF,
          // đây là kết quả giả định dựa trên nội dung mục Tính từ của AI.
          // Bạn có thể tìm thấy bài tập này tại prep.vn.
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 2: Chọn các động từ có thể theo sau bởi tính từ.',
        questions: [
          // Do không có danh sách các động từ trong file PDF,
          // đây là kết quả giả định dựa trên kiến thức AI về Linking Verbs.
          // Bạn có thể tìm thấy bài tập này tại prep.vn.
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 3: Xác định và điền tính từ trong mỗi câu sau vào ô trống bên cạnh.',
        hint: 'Gợi ý: ta có thể dựa vào kiến thức về vị trí của tính từ trong câu để xác định tính từ.',
        questions: [
          {
            questionNumber: 1,
            stem: 'There is an empty room over there.',
            correctAnswerValue: 'empty',
          },
          {
            questionNumber: 2,
            stem: "It's a hot summer.",
            correctAnswerValue: 'hot',
          },
          {
            questionNumber: 3,
            stem: 'You are so kind.',
            correctAnswerValue: 'kind',
          },
          {
            questionNumber: 4,
            stem: 'This park is clean and green.',
            correctAnswerValue: 'clean, green',
          },
          {
            questionNumber: 5,
            stem: 'I think these eggs are rotten.',
            correctAnswerValue: 'rotten',
          },
          {
            questionNumber: 6,
            stem: 'James was absent because he was ill.',
            correctAnswerValue: 'absent, ill',
          },
          {
            questionNumber: 7,
            stem: "We are all bored. There isn't anything to do.",
            correctAnswerValue: 'bored',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 4: Hãy chọn tất cả các tính từ trong danh sách sau.',
        questions: [
          // Do không có danh sách từ trong file PDF,
          // đây là kết quả giả định theo AI.
          // Bạn có thể tìm thấy bài tập này tại prep.vn.
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5: Điền tính từ trong ngoặc vào vị trí thích hợp trong câu.',
        example: "Ví dụ: It's very ___ in the summer. (hot) -> It's very **hot** in the summer.",
        questions: [
          {
            questionNumber: 8,
            stem: 'These puppies are very ___. (sweet) ',
            correctAnswerValue: 'sweet',
          },
          {
            questionNumber: 9,
            stem: 'They live in a ___ house. (large) ',
            correctAnswerValue: 'large',
          },
          {
            questionNumber: 10,
            stem: 'Many ___ people have no home. (poor) ',
            correctAnswerValue: 'poor',
          },
          {
            questionNumber: 11,
            stem: 'The company is giving away ___ gifts to its customers. (free) ',
            correctAnswerValue: 'free',
          },
          {
            questionNumber: 12,
            stem: 'The climbers are climbing up a ___ mountain. (high) ',
            correctAnswerValue: 'high',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 6: Chọn 1 trong 4 từ/ cụm từ được gạch chân có chứa lỗi sai ở mỗi câu hỏi.',
        questions: [
          {
            questionNumber: 13,
            stem: 'Ann is an **intelligence** student.',
            options: [
              { key: 'A', value: 'Ann' },
              { key: 'B', value: 'is' },
              { key: 'C', value: 'intelligence' },
              { key: 'D', value: 'student' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'intelligence',
            errorType: 'Danh từ thay vì tính từ',
            correctForm: 'intelligent',
          },
          {
            questionNumber: 14,
            stem: 'I saw some **beautifuls** pictures.',
            options: [
              { key: 'A', value: 'I' },
              { key: 'B', value: 'saw' },
              { key: 'C', value: 'beautifuls' },
              { key: 'D', value: 'pictures' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'beautifuls',
            errorType: 'Tính từ không có dạng số nhiều',
            correctForm: 'beautiful',
          },
          {
            questionNumber: 15,
            stem: 'Alex needs batteries **new** for his camera.',
            options: [
              { key: 'A', value: 'needs' },
              { key: 'B', value: 'new' },
              { key: 'C', value: 'for' },
              { key: 'D', value: 'camera' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'new',
            errorType: 'Sai vị trí của tính từ (Adj + N)',
            correctForm: 'new batteries',
          },
          {
            questionNumber: 16,
            stem: 'I put the **happy** of my family above other things.',
            options: [
              { key: 'A', value: 'put' },
              { key: 'B', value: 'happy' },
              { key: 'C', value: 'family' },
              { key: 'D', value: 'things' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'happy',
            errorType: "Tính từ thay vì danh từ (sau 'the')",
            correctForm: 'happiness',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 7: Hoàn thành những câu sau, sử dụng một động từ ở bảng bên trái và một tính từ ở bảng bên phải.',
        table: {
          VERB: ['feel', 'look', 'seem', 'smell', 'sound', 'taste'],
          ADJECTIVE: ['awful', 'nervous', 'interesting', 'nice', 'upset', 'wet'],
        },
        example: 'Ví dụ: Helen **seemed upset** this morning. Do you know what was wrong?',
        questions: [
          {
            questionNumber: 17,
            stem: "I can't eat this. I've just tried it and it ___ ___.",
            correctAnswerValue: 'tastes awful',
          },
          {
            questionNumber: 18,
            stem: "It's normal to ___ ___ before an exam or an interview.",
            correctAnswerValue: 'feel nervous',
          },
          {
            questionNumber: 19,
            stem: 'What beautiful flowers! They ___ ___ too.',
            correctAnswerValue: 'smell nice',
          },
          {
            questionNumber: 20,
            stem: 'You ___ ___. Have you been out in the rain?',
            correctAnswerValue: 'look wet',
          },
          {
            questionNumber: 21,
            stem: 'James told me about his new job. It ___ ___ much better than his old job.',
            correctAnswerValue: 'sounds interesting',
          },
        ],
      },
    ],
  },
  {
    testName: 'THỨ TỰ TÍNH TỪ (ADJECTIVE ORDER)',
    testCategory: 'Grammar',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 1: Phân loại và điền các tính từ trong bảng vào loại tính từ thích hợp.',
        hint: 'Chỉ điền 1 tính từ vào mỗi ô trống.',
        adjectivePool:
          'pretty, large, wonderful, Chinese, red, blue, round, young, wooden, British, paper, plastic, long, sports',
        questions: [
          {
            questionNumber: 1,
            stem: 'Tính từ chỉ quan điểm - OPINION:',
            correctAnswerValue: 'wonderful', // Giả định theo AI
          },
          {
            questionNumber: 2,
            stem: 'Tính từ chỉ kích thước - SIZE:',
            correctAnswerValue: 'large', // Giả định theo AI
          },
          {
            questionNumber: 3,
            stem: 'Tính từ chỉ tuổi tác - AGE:',
            correctAnswerValue: 'young', // Giả định theo AI
          },
          {
            questionNumber: 4,
            stem: 'Tính từ chỉ hình dạng - SHAPE:',
            correctAnswerValue: 'round', // Giả định theo AI
          },
          {
            questionNumber: 5,
            stem: 'Tính từ chỉ màu sắc - COLOUR:',
            correctAnswerValue: 'red', // Giả định theo AI
          },
          {
            questionNumber: 6,
            stem: 'Tính từ chỉ nguồn gốc - ORIGIN:',
            correctAnswerValue: 'Chinese', // Giả định theo AI
          },
          {
            questionNumber: 7,
            stem: 'Tính từ chỉ chất liệu - MATERIAL:',
            correctAnswerValue: 'wooden', // Giả định theo AI
          },
          {
            questionNumber: 8,
            stem: 'Tính từ chỉ mục đích - PURPOSE:',
            correctAnswerValue: 'sports', // Giả định theo AI
          },
        ],
      },
      {
        exerciseType: EExerciseType.Rearrangement,
        exerciseTitle: 'Exercise 2: Sắp xếp các tính từ sau để chúng theo đúng thứ tự.',
        questions: [
          {
            questionNumber: 1,
            stem: 'hair/long/black',
            correctAnswerValue: 'long black hair',
          },
          {
            questionNumber: 2,
            stem: 'an/old/chair/wooden',
            correctAnswerValue: 'an old wooden chair',
          },
          {
            questionNumber: 3,
            stem: 'an/book/interesting/old',
            correctAnswerValue: 'an interesting old book',
          },
          {
            questionNumber: 4,
            stem: 'a/house/beautiful/modern',
            correctAnswerValue: 'a beautiful modern house',
          },
          {
            questionNumber: 5,
            stem: 'student/a/friendly/Vietnamese',
            correctAnswerValue: 'a friendly Vietnamese student',
          },
          {
            questionNumber: 6,
            stem: 'brown/cup/German/huge/a/glass',
            correctAnswerValue: 'a huge brown German glass cup', // Size - Colour - Origin - Material - Noun
          },
        ],
      },
      {
        exerciseType: EExerciseType.Rewrite,
        exerciseTitle:
          'Exercise 3: Viết lại những câu sau bằng cách sắp xếp các tính từ trong ngoặc đơn vào vị trí phù hợp.',
        example: 'Ví dụ: One day, a time ago, (long, fine) -> **One fine day, a long time ago,**',
        questions: [
          {
            questionNumber: 1,
            stem: 'a girl (beautiful, little) / in a coat (red, long) / was walking through a forest (dark) / with a bag (big, yellow) / of apples (red, wonderful) / to see her grandmother. (old)',
            correctAnswerValue:
              'A **beautiful little** girl in a **long red** coat was walking through a **dark** forest with a **big yellow** bag of **wonderful red** apples to see her **old** grandmother.',
          },
          {
            questionNumber: 2,
            stem: 'She saw a wolf (big) / with teeth (white, long) / under a tree. (tall, green)',
            correctAnswerValue: 'She saw a **big** wolf with **long white** teeth under a **tall green** tree.',
          },
          {
            questionNumber: 3,
            stem: 'The house is for sale. (cute, little)',
            correctAnswerValue: 'The **cute little** house is for sale.', // Opinion - Size
          },
          {
            questionNumber: 4,
            stem: 'I need a watch. (Swiss, new)',
            correctAnswerValue: 'I need a **new Swiss** watch.', // Age - Origin
          },
          {
            questionNumber: 5,
            stem: "I'm going to buy some roses. (nice, red)",
            correctAnswerValue: "I'm going to buy some **nice red** roses.", // Opinion - Colour
          },
        ],
      },
      {
        exerciseType: EExerciseType.Rearrangement,
        exerciseTitle: 'Exercise 4: Hãy sắp xếp các từ trong thông báo thanh lý đồ đạc sau theo đúng thứ tự.',
        stem: 'HOUSE SALE! We are moving house and have decided to sell these things:',
        example: '0. round/table/ plastic/big/a -> a big round plastic table',
        questions: [
          {
            questionNumber: 1,
            stem: 'curtains/long/some/ Indian',
            correctAnswerValue: 'some long Indian curtains', // Size - Origin
          },
          {
            questionNumber: 2,
            stem: 'black/ metal/chair/a/ comfortable',
            correctAnswerValue: 'a comfortable black metal chair', // Opinion - Colour - Material
          },
          {
            questionNumber: 3,
            stem: 'oil/ Dutch/ beautiful/ painting/ a',
            correctAnswerValue: 'a beautiful Dutch oil painting', // Opinion - Origin - Material (Oil as a noun/type of painting)
          },
          {
            questionNumber: 4,
            stem: 'huge/ wardrobe/ wooden/ a(n)',
            correctAnswerValue: 'a huge wooden wardrobe', // Size - Material
          },
          {
            questionNumber: 5,
            stem: 'a/ carpet/little/ lovely/ round',
            correctAnswerValue: 'a lovely little round carpet', // Opinion - Size - Shape
          },
          {
            questionNumber: 6,
            stem: 'Peruvian/ a/ square/ bedcover',
            correctAnswerValue: 'a square Peruvian bedcover', // Shape - Origin
          },
        ],
      },
      {
        exerciseType: EExerciseType.SentenceRearrangement,
        exerciseTitle: 'Exercise 5: Sắp xếp từ trong các câu sau để tạo thành câu đúng.',
        questions: [
          {
            questionNumber: 1,
            stem: 'wedding/dress/she/long/wore/white/ a.',
            correctAnswerValue: 'She wore a long white wedding dress.', // Size - Colour - Purpose
          },
          {
            questionNumber: 2,
            stem: 'woman/ English/is/an/young/ intelligent/ this..',
            correctAnswerValue: 'This young intelligent English woman is an.', // Age - Opinion - Origin (Giả định: 'this' là từ hạn định, 'an' ở cuối bị dư/đánh máy nhầm)
          },
          {
            questionNumber: 3,
            stem: 'is/ bag/this/ sleeping/ black/ a/ new.',
            correctAnswerValue: 'This is a new black sleeping bag.', // Age - Colour - Purpose
          },
          {
            questionNumber: 4,
            stem: 'pink/she/house/ bought/big/beautiful/a.',
            correctAnswerValue: 'She bought a beautiful big pink house.', // Opinion - Size - Colour
          },
          {
            questionNumber: 5,
            stem: 'gave/ dinosaur/him/she/cute/small/a/ plastic.',
            correctAnswerValue: 'She gave him a cute small plastic dinosaur.', // Opinion - Size - Material
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle:
          'Exercise 6: Mark the letter A, B, C, or D on your answer sheet to indicate the corrected answer to each other following questions.',
        questions: [
          {
            questionNumber: 1,
            stem: "They say he's a ___ student for his age.",
            options: [
              { key: 'A', value: 'tall mature brilliant' }, // Size - Age - Opinion
              { key: 'B', value: 'mature brilliant tall' }, // Age - Opinion - Size
              { key: 'C', value: 'brilliant tall mature' }, // Opinion - Size - Age
              { key: 'D', value: 'tall brilliant mature' }, // Size - Opinion - Age
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'brilliant tall mature', // Opinion (brilliant) - Size (tall) - Age (mature). **AI phân tích: Trật tự OSASCOMP: Opinion(brilliant) - Size(tall) - Age(mature) là hợp lý nhất.**
          },
          {
            questionNumber: 2,
            stem: 'The speaker is a ___ professor.',
            options: [
              { key: 'A', value: 'old short American kind' },
              { key: 'B', value: 'kind short old American' }, // Opinion - Size - Age - Origin
              { key: 'C', value: 'American kind old short' },
              { key: 'D', value: 'kind American short old' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'kind short old American', // Opinion (kind) - Size (short) - Age (old) - Origin (American)
          },
          {
            questionNumber: 3,
            stem: 'My sister lives in a ___ apartment.',
            options: [
              { key: 'A', value: 'nice wooden new' },
              { key: 'B', value: 'new nice wooden' },
              { key: 'C', value: 'nice new wooden' }, // Opinion - Age - Material
              { key: 'D', value: 'wooden nice new' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'nice new wooden', // Opinion (nice) - Age (new) - Material (wooden)
          },
          {
            questionNumber: 4,
            stem: 'My cousin bought a ___ bowl.',
            options: [
              { key: 'A', value: 'blue ancient lovely small' },
              { key: 'B', value: 'lovely blue small ancient' },
              { key: 'C', value: 'small blue ancient lovely' },
              { key: 'D', value: 'lovely small ancient blue' }, // Opinion - Size - Age - Colour
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'lovely small ancient blue', // Opinion (lovely) - Size (small) - Age (ancient) - Colour (blue)
          },
          {
            questionNumber: 5,
            stem: 'They visited a ___ building with their children.',
            options: [
              { key: 'A', value: 'beautiful big traditional Vietnamese' }, // Opinion - Size - Age/Type - Origin
              { key: 'B', value: 'Vietnamese delicious big traditional' },
              { key: 'C', value: 'traditional delicious big Vietnamese' },
              { key: 'D', value: 'big delicious traditional Vietnamese' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'beautiful big traditional Vietnamese', // Opinion (beautiful) - Size (big) - Age/Type (traditional) - Origin (Vietnamese)
          },
          {
            questionNumber: 6,
            stem: 'She is doing extremely well in her ___ graduate course.',
            options: [
              { key: 'A', value: 'intensive one-year English' }, // Opinion/Type - Age - Origin
              { key: 'B', value: 'one-year English intensive' },
              { key: 'C', value: 'intensive English one-year' },
              { key: 'D', value: 'English intensive one-year' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'intensive one-year English', // Opinion/Type (intensive) - Age/Duration (one-year) - Origin/Language (English)
          },
          {
            questionNumber: 7,
            stem: 'During the winter I like having a ___ house.',
            options: [
              { key: 'A', value: 'pretty small red wooden' }, // Opinion - Size - Colour - Material
              { key: 'B', value: 'wooden pretty small red' },
              { key: 'C', value: 'small pretty red wooden' },
              { key: 'D', value: 'red wooden pretty small' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'pretty small red wooden', // Opinion (pretty) - Size (small) - Colour (red) - Material (wooden)
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 3: Trạng từ',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 1. Các tính từ dưới đây có dạng trạng từ bất quy tắc. Hãy xếp chúng vào nhóm phù hợp.',
        questions: [
          {
            questionNumber: 1,
            stem: 'easy, hard, greedy, deep, good, grateful, early, careful, late',
            correctAnswerValue:
              'TH1: easy → easily, greedy → greedily, early → early; TH2: careful → carefully; TH3: hard → hard, deep → deeply, good → well, grateful → gratefully, late → late',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 2. Hãy thành lập trạng từ từ các tính từ dưới đây.',
        questions: [
          { questionNumber: 2, stem: 'Easy →', correctAnswerValue: 'Easily' },
          { questionNumber: 3, stem: 'Greedy →', correctAnswerValue: 'Greedily' },
          { questionNumber: 4, stem: 'Deep →', correctAnswerValue: 'Deeply' },
          { questionNumber: 5, stem: 'Good →', correctAnswerValue: 'Well' },
          { questionNumber: 6, stem: 'Grateful →', correctAnswerValue: 'Gratefully' },
          { questionNumber: 7, stem: 'Careful →', correctAnswerValue: 'Carefully' },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 3. Cho biết từ được gạch chân là tính từ hay trạng từ.',
        questions: [
          {
            questionNumber: 8,
            stem: 'Heating the clay makes it hard.',
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Tính từ',
          },
          {
            questionNumber: 9,
            stem: "Work hard and play hard, that's my motto.",
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Trạng từ',
          },
          {
            questionNumber: 10,
            stem: 'Our neighbours have always been very friendly towards us.',
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Tính từ',
          },
          {
            questionNumber: 11,
            stem: 'Tobacco is highly addictive.',
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Trạng từ',
          },
          {
            questionNumber: 12,
            stem: 'She gets lonely now that all the kids have left home.',
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Tính từ',
          },
          {
            questionNumber: 13,
            stem: 'It was silly of you to go out in the sun without a hat.',
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Tính từ',
          },
          {
            questionNumber: 14,
            stem: "It's so airless in here - I can hardly breathe.",
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Trạng từ',
          },
          {
            questionNumber: 15,
            stem: 'It was late at night.',
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Tính từ',
          },
          {
            questionNumber: 16,
            stem: 'The programme started late.',
            options: [
              { key: 'A', value: 'Tính từ' },
              { key: 'B', value: 'Trạng từ' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Trạng từ',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 4. Cho biết trạng từ được gạch chân bổ sung ý nghĩa gì.',
        questions: [
          {
            questionNumber: 17,
            stem: 'In the spring, there are flowers everywhere.',
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'Địa Điểm',
          },
          {
            questionNumber: 18,
            stem: 'The programme started late.',
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: 'Thời Gian',
          },
          {
            questionNumber: 19,
            stem: 'I often go to school by bus.',
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'F',
            correctAnswerValue: 'Tần Suất',
          },
          {
            questionNumber: 20,
            stem: 'She did all the homework by herself.',
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'Cách Thức',
          },
          {
            questionNumber: 21,
            stem: 'Tobacco is highly addictive.',
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'E',
            correctAnswerValue: 'Mức Độ',
          },
          {
            questionNumber: 22,
            stem: 'Tom has been in England for one year.',
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'Thời Lượng',
          },
          {
            questionNumber: 23,
            stem: "It's so airless in here - I can hardly breathe.",
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'E',
            correctAnswerValue: 'Mức Độ',
          },
          {
            questionNumber: 24,
            stem: "Work hard and play hard, that's my motto.",
            options: [
              { key: 'A', value: 'Thời Gian' },
              { key: 'B', value: 'Thời Lượng' },
              { key: 'C', value: 'Địa Điểm' },
              { key: 'D', value: 'Cách Thức' },
              { key: 'E', value: 'Mức Độ' },
              { key: 'F', value: 'Tần Suất' },
            ],
            correctAnswerKey: 'D',
            correctAnswerValue: 'Cách Thức',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5. Nhận diện trạng từ in hoa bổ nghĩa cho gì.',
        questions: [
          {
            questionNumber: 25,
            stem: 'UNFORTUNATELY, Friday will be quite cloudy.',
            correctAnswerValue: 'Cả câu (trạng từ chỉ thái độ của người nói)',
          },
          {
            questionNumber: 26,
            stem: 'Unfortunately, Friday will be QUITE cloudy.',
            correctAnswerValue: 'Trạng từ "quite" bổ nghĩa cho tính từ "cloudy"',
          },
          {
            questionNumber: 27,
            stem: 'The race finished TOO quickly.',
            correctAnswerValue: 'Trạng từ "too" bổ nghĩa cho trạng từ "quickly"',
          },
          {
            questionNumber: 28,
            stem: 'The race finished too QUICKLY.',
            correctAnswerValue: 'Trạng từ "quickly" bổ nghĩa cho động từ "finished"',
          },
          {
            questionNumber: 29,
            stem: 'I will SERIOUSLY consider your suggestion.',
            correctAnswerValue: 'Trạng từ "seriously" bổ nghĩa cho động từ "consider"',
          },
          {
            questionNumber: 30,
            stem: 'He was MADLY in love with her.',
            correctAnswerValue: 'Trạng từ "madly" bổ nghĩa cho cụm giới từ "in love with her"',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 6. Điền (cụm) trạng từ vào chỗ trống thích hợp.',
        exerciseStem:
          'always, at the end, carefully, early, fast, in a friendly way, in the bedroom, never, right, slowly, last week, upstairs',
        questions: [
          {
            questionNumber: 31,
            stem: 'My grandmother fell over _____. She hurt her leg so now she can only walk _____.',
            correctAnswerValue: 'last week; slowly',
          },
          {
            questionNumber: 32,
            stem: 'I always get up early so I am _____ late for work.',
            correctAnswerValue: 'never',
          },
          {
            questionNumber: 33,
            stem: 'Remember to answer the questions _____ and stop writing at the end of the test.',
            correctAnswerValue: 'carefully',
          },
          {
            questionNumber: 34,
            stem: 'Our teacher is nice; she _____ talks to us _____.',
            correctAnswerValue: 'always; in a friendly way',
          },
          {
            questionNumber: 35,
            stem: 'Go to the end of the road and turn _____ at the traffic lights. If you walk _____, you’ll get there in about five minutes.',
            correctAnswerValue: 'right; fast',
          },
          {
            questionNumber: 36,
            stem: 'I went _____ with the electrician and we looked at the broken light _____.',
            correctAnswerValue: 'upstairs; in the bedroom',
          },
        ],
      },
    ],
  },

  {
    testName: 'Section 5: So sánh tính từ/ trạng từ',
    testCategory: ETestCategory.Grammar,
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1. Hãy chọn những phát biểu đúng.',
        questions: [
          {
            questionNumber: 1,
            stem: 'Chưa có nội dung chi tiết trong PDF, chỉ có tiêu đề. (Có thể là phần video hoặc slide)',
            correctAnswerValue: 'Không có dữ liệu trong file PDF.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 2. Điền tính từ thích hợp vào chỗ trống.',
        exerciseStem: 'colder, expensive, fastest, smaller, better, difficult, hardest',
        questions: [
          { questionNumber: 2, stem: 'Last year was the ___________ year of my life.', correctAnswerValue: 'hardest' },
          {
            questionNumber: 3,
            stem: 'England is ___________ than Greece and it rains a lot too.',
            correctAnswerValue: 'colder',
          },
          {
            questionNumber: 4,
            stem: 'It is ___________ than my house in Greece but more comfortable.',
            correctAnswerValue: 'smaller',
          },
          {
            questionNumber: 5,
            stem: 'The food is the most ___________ thing in town but it is also really delicious.',
            correctAnswerValue: 'expensive',
          },
          {
            questionNumber: 6,
            stem: 'The job is more ___________ than I thought but I am getting ___________ at it.',
            correctAnswerValue: 'difficult; better',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 3. Viết dạng so sánh hơn và so sánh nhất của các tính từ sau.',
        questions: [
          { questionNumber: 7, stem: 'rich →', correctAnswerValue: 'richer, the richest' },
          { questionNumber: 8, stem: 'small →', correctAnswerValue: 'smaller, the smallest' },
          { questionNumber: 9, stem: 'green →', correctAnswerValue: 'greener, the greenest' },
          { questionNumber: 10, stem: 'fat →', correctAnswerValue: 'fatter, the fattest' },
          { questionNumber: 11, stem: 'hot →', correctAnswerValue: 'hotter, the hottest' },
          { questionNumber: 12, stem: 'big →', correctAnswerValue: 'bigger, the biggest' },
          { questionNumber: 13, stem: 'wet →', correctAnswerValue: 'wetter, the wettest' },
          { questionNumber: 14, stem: 'new →', correctAnswerValue: 'newer, the newest' },
          { questionNumber: 15, stem: 'safe →', correctAnswerValue: 'safer, the safest' },
          { questionNumber: 16, stem: 'strange →', correctAnswerValue: 'stranger, the strangest' },
          { questionNumber: 17, stem: 'lazy →', correctAnswerValue: 'lazier, the laziest' },
          { questionNumber: 18, stem: 'sleepy →', correctAnswerValue: 'sleepier, the sleepiest' },
          { questionNumber: 19, stem: 'friendly →', correctAnswerValue: 'friendlier, the friendliest' },
          { questionNumber: 20, stem: 'careful →', correctAnswerValue: 'more careful, the most careful' },
          { questionNumber: 21, stem: 'beautiful →', correctAnswerValue: 'more beautiful, the most beautiful' },
          { questionNumber: 22, stem: 'intelligent →', correctAnswerValue: 'more intelligent, the most intelligent' },
          { questionNumber: 23, stem: 'dangerous →', correctAnswerValue: 'more dangerous, the most dangerous' },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 4. Chọn đáp án đúng.',
        questions: [
          {
            questionNumber: 24,
            stem: 'The _____ building I saw in Paris was the Eiffel Tower.',
            options: [
              { key: 'A', value: 'tall' },
              { key: 'B', value: 'taller' },
              { key: 'C', value: 'tallest' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'tallest',
          },
          {
            questionNumber: 25,
            stem: 'Anita is _____ than all the girls in my class.',
            options: [
              { key: 'A', value: 'smart' },
              { key: 'B', value: 'smarter' },
              { key: 'C', value: 'smartest' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'smarter',
          },
          {
            questionNumber: 26,
            stem: 'It’s _____ today than yesterday.',
            options: [
              { key: 'A', value: 'hot' },
              { key: 'B', value: 'hotter' },
              { key: 'C', value: 'hottest' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'hotter',
          },
          {
            questionNumber: 27,
            stem: 'This ring was the _____ jewelry in the shop.',
            options: [
              { key: 'A', value: 'expensive' },
              { key: 'B', value: 'more expensive' },
              { key: 'C', value: 'most expensive' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'most expensive',
          },
          {
            questionNumber: 28,
            stem: 'This book is _____ than that one.',
            options: [
              { key: 'A', value: 'heavy' },
              { key: 'B', value: 'heavier' },
              { key: 'C', value: 'the heaviest' },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: 'heavier',
          },
          {
            questionNumber: 29,
            stem: 'All of my friends are nice, and Sarah is certainly _____.',
            options: [
              { key: 'A', value: 'nice the' },
              { key: 'B', value: 'nicer' },
              { key: 'C', value: 'the nicest' },
            ],
            correctAnswerKey: 'C',
            correctAnswerValue: 'the nicest',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 5. Viết dạng so sánh hơn và so sánh nhất của các trạng từ sau.',
        questions: [
          { questionNumber: 30, stem: 'late →', correctAnswerValue: 'later, the latest' },
          { questionNumber: 31, stem: 'fast →', correctAnswerValue: 'faster, the fastest' },
          { questionNumber: 32, stem: 'hard →', correctAnswerValue: 'harder, the hardest' },
          { questionNumber: 33, stem: 'quick →', correctAnswerValue: 'quicker, the quickest' },
          { questionNumber: 34, stem: 'slowly →', correctAnswerValue: 'more slowly, the most slowly' },
          { questionNumber: 35, stem: 'fluently →', correctAnswerValue: 'more fluently, the most fluently' },
          { questionNumber: 36, stem: 'seriously →', correctAnswerValue: 'less seriously, the least seriously' },
          { questionNumber: 37, stem: 'beautifully →', correctAnswerValue: 'less beautifully, the least beautifully' },
          { questionNumber: 38, stem: 'well →', correctAnswerValue: 'better, the best' },
          { questionNumber: 39, stem: 'badly →', correctAnswerValue: 'worse, the worst' },
          { questionNumber: 40, stem: 'far →', correctAnswerValue: 'farther/further, the farthest/the furthest' },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 6. Hoàn thành đoạn văn với dạng so sánh hơn của tính từ và trạng từ trong ngoặc.',
        questions: [
          {
            questionNumber: 41,
            stem: 'Do you find that you’re getting ___________ (BUSY) every day?',
            correctAnswerValue: 'busier',
          },
          {
            questionNumber: 42,
            stem: 'You’re working ___________ (HARD) than ever, but you’re getting ___________ (EFFICIENT)?',
            correctAnswerValue: 'harder; less efficient',
          },
          {
            questionNumber: 43,
            stem: 'You’ve never got time to get to the gym and you’re getting ___________ (FAT) and ___________ (SLOW)?',
            correctAnswerValue: 'fatter; slower',
          },
          {
            questionNumber: 44,
            stem: 'The new version is guaranteed to make you ___________ (FIT) and ___________ (HEALTHY).',
            correctAnswerValue: 'fitter; healthier',
          },
          {
            questionNumber: 45,
            stem: 'It’ll help you feel ___________ (STRESSED) out.',
            correctAnswerValue: 'less stressed',
          },
          {
            questionNumber: 46,
            stem: "It'll help you work ___________ (QUICK) and ___________ (EFFICIENT).",
            correctAnswerValue: 'more quickly; more efficiently',
          },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 7. Nối ví dụ với lỗi sai tương ứng.',
        questions: [
          {
            questionNumber: 47,
            stem: 'Among all of my friends, Jane is taller.',
            correctAnswerValue: 'Sai cấu trúc so sánh hơn (thiếu than)',
          },
          {
            questionNumber: 48,
            stem: 'Indian food is hoter and spicier than Vietnamese food.',
            correctAnswerValue: 'Lỗi chính tả ("hotter")',
          },
          {
            questionNumber: 49,
            stem: 'Sport is more interesting politics.',
            correctAnswerValue: 'Nhầm lẫn sử dụng tính từ và trạng từ trong so sánh',
          },
          {
            questionNumber: 50,
            stem: 'It was largest company in the town.',
            correctAnswerValue: 'Sai cấu trúc so sánh nhất (thiếu the)',
          },
          {
            questionNumber: 51,
            stem: 'The CD is the more expensive than the cassette.',
            correctAnswerValue: 'Nhầm lẫn giữa so sánh hơn và so sánh nhất',
          },
          {
            questionNumber: 52,
            stem: 'Kim, Kate and Jo all sing well, but Kate sings the most beautiful.',
            correctAnswerValue: 'Sai cấu trúc so sánh hơn (thừa the hoặc sai loại từ)',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 8. Viết lại các câu ở bài tập trước cho đúng.',
        questions: [
          {
            questionNumber: 53,
            stem: 'Among all of my friends, Jane is taller →',
            correctAnswerValue: 'Among all of my friends, Jane is the tallest.',
          },
          {
            questionNumber: 54,
            stem: 'Indian food is hoter and spicier than Vietnamese food →',
            correctAnswerValue: 'Indian food is hotter and spicier than Vietnamese food.',
          },
          {
            questionNumber: 55,
            stem: 'Sport is more interesting politics →',
            correctAnswerValue: 'Sport is more interesting than politics.',
          },
          {
            questionNumber: 56,
            stem: 'It was largest company in the town →',
            correctAnswerValue: 'It was the largest company in the town.',
          },
          {
            questionNumber: 57,
            stem: 'The CD is the more expensive than the cassette →',
            correctAnswerValue: 'The CD is more expensive than the cassette.',
          },
          {
            questionNumber: 58,
            stem: 'Kim, Kate and Jo all sing well, but Kate sings the most beautiful →',
            correctAnswerValue: 'Kim, Kate and Jo all sing well, but Kate sings the most beautifully.',
          },
        ],
      },
    ],
  },
  // dữ liệu câu này bị trùng với file trên

  // Giới từ
  {
    testName: 'Section 2.2: Thì hiện tại đơn_1',
    testCategory: 'Tenses',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 1: Nối chủ ngữ với cách chia động từ đúng của thì hiện tại đơn',
        matchingOptions: ['am / V', 'is / V(S/ES)', 'are / V'],
        options: ['I', 'He/She/It/N(Số ít)', 'You/We/They/N(Số nhiều)'],

        matchingPairs: [
          { clue: 'I', correctMatch: 'am / V' },
          { clue: 'He/She/It/N(Số ít)', correctMatch: 'is / V(S/ES)' },
          { clue: 'You/We/They/N(Số nhiều)', correctMatch: 'are / V' },
        ],
        explanation:
          "Trong thì Hiện tại đơn: Động từ to be chia là 'am' (I), 'is' (He/She/It/N số ít), 'are' (You/We/They/N số nhiều). Động từ thường chia là V (I/You/We/They/N số nhiều) và V(S/ES) (He/She/It/N số ít).",
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 2: Nối các động từ có dấu hiệu sau với các cách thêm S/ES tương ứng',
        matchingPairs: [
          { clue: 'Động từ tận cùng bằng -CH, -SH, -S, -X, O', correctMatch: 'Thêm ES' },
          { clue: 'Động từ tận cùng bằng một phụ âm rồi đến Y', correctMatch: 'Đổi Y thành I rồi thêm ES' },
          { clue: 'Phần lớn động từ', correctMatch: 'Thêm S' },
          { clue: 'Động từ tận cùng bằng một nguyên âm rồi đến Y', correctMatch: 'Thêm S' },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 3: Chọn các trường hợp KHÔNG phải là cách sử dụng của thì hiện tại đơn',
        options: [
          { key: 'A', value: 'Những hành động thường xuyên xảy ra, có tính lặp lại' },
          { key: 'B', value: 'Những thói quen ở hiện tại' },
          { key: 'C', value: 'Đưa ra cảm giác, nghề nghiệp, tình trạng hiện tại, tính chất, sở hữu' },
          { key: 'D', value: 'Nói về một giả thiết' },
          { key: 'E', value: 'Dự đoán các tình tiết, sự kiện trong phim, truyện' },
          { key: 'F', value: 'Tiêu đề các bài báo' },
        ],
        correctAnswerKeys: 'D',
        correctAnswerValue: 'Nói về một giả thiết',
        explanation:
          'Thì Hiện tại đơn dùng cho thói quen, sự thật hiển nhiên, lịch trình, và tóm tắt (phim/truyện, tiêu đề báo). Nói về một giả thiết hoặc dự đoán không có căn cứ thường dùng thì Tương lai đơn/gần.',
      },
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle:
          'Exercise 4: Chọn True nếu khẳng định là đúng - chọn False nếu khẳng định là sai với mỗi khẳng định về thì hiện tại đơn sau',
        questions: [
          {
            questionNumber: 1,
            stem: 'Trong câu phủ định, động từ `to be` được thêm `not` vào sau (am not, is not, are not).',
            correctAnswerValue: 'TRUE',
            explanation: 'Đúng. Đây là cách thành lập câu phủ định với động từ to be trong Hiện tại đơn.',
          },
          {
            questionNumber: 2,
            stem: 'Trợ động từ `do/does` được dùng cho cả câu hỏi và câu phủ định đối với động từ `to be`.',
            correctAnswerValue: 'FALSE',
            explanation:
              'Sai. Trợ động từ `do/does` chỉ dùng cho **Động từ thường**. Động từ `to be` tự thành lập câu phủ định/nghi vấn.',
          },
          {
            questionNumber: 3,
            stem: 'Động từ chính (động từ thường) trong câu phủ định luôn được giữ nguyên mẫu, không chia (không thêm S/ES).',
            correctAnswerValue: 'TRUE',
            explanation:
              'Đúng. Khi đã có trợ động từ `do/does`, động từ chính phải ở dạng nguyên mẫu không to (bare infinitive).',
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 3: Thì hiện tại tiếp diễn_',
    testCategory: 'Tenses',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 1: Điền dạng đầy đủ của động từ to be để hoàn thành bảng công thức',
        questions: [
          {
            questionNumber: 1,
            stem: 'S = I -> To be: (1)',
            correctAnswerValue: 'am',
            explanation: "To be chia theo ngôi I là 'am'.",
          },
          {
            questionNumber: 2,
            stem: 'S = You / We / They / N Số nhiều -> To be: (2)',
            correctAnswerValue: 'are',
            explanation: "To be chia theo ngôi You/We/They/N số nhiều là 'are'.",
          },
          {
            questionNumber: 3,
            stem: 'S = He/She/It / N Số ít -> To be: (3)',
            correctAnswerValue: 'is',
            explanation: "To be chia theo ngôi He/She/It/N số ít là 'is'.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 2: Nối các trường hợp thêm đuôi -ing vào động từ với quy tắc tương ứng',
        matchingPairs: [
          { clue: 'Live (Live -> Living)', correctMatch: 'Tận cùng bằng E (Bỏ E và thêm -ING)' },
          { clue: 'Run (Run -> Running)', correctMatch: 'V một âm tiết, nguyên âm + phụ âm (Phụ âm x2 và thêm -ING)' },
          {
            clue: 'Begin (Begin -> Beginning)',
            correctMatch: 'V hai âm tiết, trọng âm 2, nguyên âm + phụ âm (Phụ âm x2 và thêm -ING)',
          },
          { clue: 'Enter (Enter -> Entering)', correctMatch: 'V hai âm tiết, trọng âm 1 (Thêm -ING)' },
          { clue: 'Lie (Lie -> Lying)', correctMatch: 'Tận cùng bằng IE (Chuyển IE thành Y và thêm -ING)' },
          { clue: 'Picnic (Picnic -> Picnicking)', correctMatch: 'Tận cùng bằng C (Thêm đuôi K và thêm -ING)' },
          { clue: 'Free (Free -> Freeing)', correctMatch: 'Tận cùng bằng EE (Thêm -ING)' },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 3: Nối các câu sau với cách sử dụng phù hợp của thì hiện tại tiếp diễn',
        matchingPairs: [
          {
            clue: 'We are studying for the final exam this week.',
            correctMatch: 'Diễn tả hành động tạm thời, xảy ra trong khoảng thời gian xung quanh thời điểm nói.',
          },
          {
            clue: 'Look! The children are playing in the garden.',
            correctMatch:
              'Diễn tả hành động đang xảy ra tại thời điểm nói (thường đi kèm các từ như *now, at the moment*).',
          },
          {
            clue: 'My sister is always complaining about her husband!',
            correctMatch: 'Diễn tả hành động lặp đi lặp lại gây khó chịu, than phiền (thường dùng với *always*).',
          },
          {
            clue: 'We are flying to Paris tomorrow morning.',
            correctMatch: 'Diễn tả kế hoạch, sự sắp xếp trong tương lai gần đã được xác định.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 9: Hoàn thành đoạn văn sau bằng cách điền đúng thì hiện tại tiếp diễn của động từ trong ngoặc',
        questions: [
          {
            questionNumber: 1,
            stem: "It's a lovely summer afternoon in the park. Robert and Mick **(play) (1)** football.",
            correctAnswerValue: 'are playing',
            explanation: 'Hành động đang xảy ra (at the moment), dùng Present Continuous. Chủ ngữ số nhiều.',
          },
          {
            questionNumber: 2,
            stem: 'Miranda **(listen) (2)** to music and Carlos **(run) (3)**.',
            correctAnswerValue: 'is listening',
            explanation: 'Hành động đang xảy ra. Chủ ngữ số ít.',
          },
          {
            questionNumber: 3,
            stem: 'Miranda is listening to music and Carlos **(run) (3)**.',
            correctAnswerValue: 'is running',
            explanation: "Hành động đang xảy ra. Chủ ngữ số ít. 'run' là V ngắn, nhân đôi phụ âm trước khi thêm -ing.",
          },
          {
            questionNumber: 4,
            stem: 'My friends, Isabel and Rashid, **(have) (4)** a picnic.',
            correctAnswerValue: 'are having',
            explanation: "Hành động đang xảy ra. Chủ ngữ số nhiều. 'have' bỏ 'e' trước khi thêm -ing.",
          },
          {
            questionNumber: 5,
            stem: 'Isabel **(eat) (5)** a sandwich and Rashid **(drink) (6)** beer.',
            correctAnswerValue: 'is eating',
            explanation: 'Hành động đang xảy ra. Chủ ngữ số ít.',
          },
          {
            questionNumber: 6,
            stem: 'Isabel is eating a sandwich and Rashid **(drink) (6)** beer.',
            correctAnswerValue: 'is drinking',
            explanation: 'Hành động đang xảy ra. Chủ ngữ số ít.',
          },
          {
            questionNumber: 7,
            stem: 'Over there, I can see my neighbors, Mr. and Mrs. Berénon. They **(take) (7)** their dog for a walk.',
            correctAnswerValue: 'are taking',
            explanation: "Hành động đang xảy ra. Chủ ngữ số nhiều. 'take' bỏ 'e' trước khi thêm -ing.",
          },
          {
            questionNumber: 8,
            stem: 'Bruce Laurence is a young actor. He is very excited because right now he **(act) (8)** in a professional show for the first time.',
            correctAnswerValue: 'is acting',
            explanation: "Hành động đang diễn ra tại thời điểm nói ('right now').",
          },
          {
            questionNumber: 9,
            stem: "It's 7.15 p.m. and he **(wait) (9)** in his dressing room. His assistant **(put) (10)** on his make-up and Bruce **(practise) (11)** his words.",
            correctAnswerValue: 'is waiting',
            explanation: "Hành động đang xảy ra ở thời điểm cụ thể ('It's 7.15 p.m.').",
          },
          {
            questionNumber: 10,
            stem: 'His assistant **(put) (10)** on his make-up...',
            correctAnswerValue: 'is putting',
            explanation: 'Hành động đang xảy ra. Chủ ngữ số ít.',
          },
          {
            questionNumber: 11,
            stem: '...and Bruce **(practise) (11)** his words.',
            correctAnswerValue: 'is practising',
            explanation: "Hành động đang xảy ra. Chủ ngữ số ít. 'practise' bỏ 'e' trước khi thêm -ing.",
          },
        ],
      },
    ],
  },
  // Các mẫu câu
  {
    testName: 'Section 4: Thì quá khứ đơn',
    testCategory: 'Tenses',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 1: Chọn những trạng từ sẽ thường xuất hiện trong thì quá khứ đơn',
        options: [
          { key: 'Yesterday', value: 'Yesterday' },
          { key: 'This week/month/year', value: 'This week/month/year' },
          { key: 'Last week/month/year', value: 'Last week/month/year' },
          { key: 'Right now', value: 'Right now' },
          { key: 'At present', value: 'At present' },
          { key: 'A week ago - two weeks ago', value: 'A week ago - two weeks ago' },
        ],
        correctAnswerKeys: `'Yesterday', 'Last week/month/year', 'A week ago - two weeks ago']`,
        correctAnswerValue: 'Yesterday',
        explanation:
          'Thì quá khứ đơn dùng cho hành động đã kết thúc trong quá khứ, đi kèm các trạng từ chỉ thời gian xác định trong quá khứ như *yesterday, last, ago*.',
      },
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 2: Chọn đúng (True) hoặc sai (False) cho các câu sau về thì quá khứ đơn.',
        questions: [
          {
            questionNumber: 1,
            stem: 'Thì quá khứ đơn chỉ một hành động đã xảy ra ở quá khứ và kết quả vẫn còn lưu lại ở hiện tại.',
            correctAnswerValue: 'FALSE',
            explanation:
              'Sai. Hành động đã kết thúc và còn kết quả ở hiện tại là cách dùng của Thì hiện tại hoàn thành. Quá khứ đơn chỉ hành động đã kết thúc hoàn toàn trong quá khứ.',
          },
          {
            questionNumber: 2,
            stem: "Ở dạng khẳng định, cấu trúc chung của câu quá khứ đơn là 'S + verb (past tense)'.",
            correctAnswerValue: 'TRUE',
            explanation:
              'Đúng. Động từ sẽ được chia ở dạng V-ed (đối với động từ có quy tắc) hoặc V2 (đối với động từ bất quy tắc).',
          },
          {
            questionNumber: 3,
            stem: 'Các động từ chia thì quá khứ đơn là các động từ bất quy tắc.',
            correctAnswerValue: 'FALSE',
            explanation:
              'Sai. Động từ được chia ở Quá khứ đơn bao gồm cả động từ có quy tắc (thêm -ed) và động từ bất quy tắc (cột 2).',
          },
          {
            questionNumber: 4,
            stem: "Dạng phủ định của thì quá khứ đơn với các động từ thường là 'S + did not/didn't + verb (past tense)'.",
            correctAnswerValue: 'FALSE',
            explanation:
              "Sai. Cấu trúc đúng là 'S + did not/didn't + **verb (nguyên mẫu)**'. Khi đã dùng trợ động từ 'did', động từ chính phải về nguyên mẫu.",
          },
          {
            questionNumber: 5,
            stem: "Với các động từ có quy tắc và tận cùng là chữ 'e', ta phải thêm đuôi 'ed' khi chia động từ ở thì quá khứ đơn.",
            correctAnswerValue: 'FALSE',
            explanation: "Sai. Động từ tận cùng bằng 'e' chỉ cần thêm 'd' (ví dụ: live -> lived).",
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle:
          'Exercise 8: Điền đúng thì của các động từ trong ngoặc để hoàn thành đoạn văn dưới đây (Thì quá khứ đơn)',
        questions: [
          {
            questionNumber: 1,
            stem: 'My last holiday (be) a five-day trip to Prague...',
            correctAnswerValue: 'was',
            explanation: "Chủ ngữ số ít 'My last holiday', dùng dạng quá khứ của 'be' là 'was'.",
          },
          {
            questionNumber: 2,
            stem: 'I know Prague well because I (live) there when I (be) at university, more than ten years ago.',
            correctAnswerValue: 'lived',
            explanation:
              "Hành động đã xảy ra trong quá khứ (more than ten years ago). 'live' là động từ có quy tắc, thêm -ed.",
          },
          {
            questionNumber: 3,
            stem: '...when I (be) at university, more than ten years ago.',
            correctAnswerValue: 'was',
            explanation: "Chủ ngữ 'I', dùng dạng quá khứ của 'be' là 'was'.",
          },
          {
            questionNumber: 4,
            stem: 'Instead of staying in a hotel, I stayed with one of my old friends. It (be) so much fun...',
            correctAnswerValue: 'was',
            explanation: "Chủ ngữ 'It', dùng dạng quá khứ của 'be' là 'was'.",
          },
          {
            questionNumber: 5,
            stem: 'I (want) to do all the same things I (do) during my university years...',
            correctAnswerValue: 'wanted',
            explanation: "'want' là động từ có quy tắc, thêm -ed.",
          },
          {
            questionNumber: 6,
            stem: 'I (want) to do all the same things I (do) during my university years...',
            correctAnswerValue: 'did',
            explanation: "'do' là động từ bất quy tắc, dạng quá khứ là 'did'.",
          },
          {
            questionNumber: 7,
            stem: 'so I (visit) the university.',
            correctAnswerValue: 'visited',
            explanation: "'visit' là động từ có quy tắc, thêm -ed.",
          },
          {
            questionNumber: 8,
            stem: 'I also (go) to the supermarket near my old house.',
            correctAnswerValue: 'went',
            explanation: "'go' là động từ bất quy tắc, dạng quá khứ là 'went'.",
          },
          {
            questionNumber: 9,
            stem: 'I (be) really happy to find my favorite cheese and chocolate biscuits...',
            correctAnswerValue: 'was',
            explanation: "Chủ ngữ 'I', dùng dạng quá khứ của 'be' là 'was'.",
          },
          {
            questionNumber: 10,
            stem: '...but they (cost) a bit more than I remember!',
            correctAnswerValue: 'cost',
            explanation:
              "'cost' là động từ bất quy tắc, có dạng quá khứ và nguyên mẫu giống nhau (cost - cost - cost).",
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 5: Thì tương lai đơn và tương lai gần_ver2',
    testCategory: 'Tenses',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 1: Nối các đặc điểm sau với các thì tương ứng',
        matches: [
          {
            left: 'Dự đoán 1 việc sẽ xảy ra trong tương lai',
            right: 'Thì tương lai đơn/ Thì tương lai gần',
            explanation: 'Cả hai thì đều có thể dùng để diễn tả dự đoán, tùy thuộc vào ngữ cảnh và bằng chứng cụ thể.',
          },
          {
            left: 'Diễn tả hành động sẽ xảy ra trong thời gian gần, có tính chắc chắn cao và có kế hoạch, được quyết định trước thời điểm nói',
            right: 'Thì tương lai gần',
            explanation:
              'Thì tương lai gần (be going to) dùng cho hành động đã có kế hoạch, dự định trước thời điểm nói.',
          },
          {
            left: 'Diễn tả một quyết định được đưa ra tại thời điểm nói',
            right: 'Thì tương lai đơn',
            explanation:
              'Thì tương lai đơn (Will) dùng để diễn tả quyết định, lời hứa, đề nghị, hoặc dự đoán không có căn cứ ngay tại thời điểm nói.',
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 2: Đặt câu ở thì tương lai gần với các từ cho sẵn',
        questions: [
          {
            questionNumber: 1,
            stem: 'how/ you / get to London (?)',
            correctAnswerValue: 'How are you going to get to London?',
            explanation: 'Cấu trúc nghi vấn thì tương lai gần: Wh-word + be + S + going to + V-nguyên mẫu?',
          },
          {
            questionNumber: 2,
            stem: 'it/snow (-)',
            correctAnswerValue: "It is not going to snow. / It isn't going to snow.",
            explanation: 'Cấu trúc phủ định thì tương lai gần: S + be not + going to + V-nguyên mẫu.',
          },
          {
            questionNumber: 3,
            stem: 'I/ cook fish / for lunch (+)',
            correctAnswerValue: "I am going to cook fish for lunch. / I'm going to cook fish for lunch.",
            explanation: 'Cấu trúc khẳng định thì tương lai gần: S + be + going to + V-nguyên mẫu.',
          },
          {
            questionNumber: 4,
            stem: 'when / you / see the doctor (?)',
            correctAnswerValue: 'When are you going to see the doctor?',
            explanation: 'Cấu trúc nghi vấn thì tương lai gần: Wh-word + be + S + going to + V-nguyên mẫu?',
          },
          {
            questionNumber: 5,
            stem: 'Angela / marry / her secretary (+)',
            correctAnswerValue: "Angela is going to marry her secretary. / Angela's going to marry her secretary.",
            explanation: "Chủ ngữ 'Angela' số ít, dùng 'is'.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.SentenceOrdering,
        exerciseTitle: 'Exercise 3: Sắp xếp thứ tự các từ cho sẵn để được câu khẳng định hoàn chỉnh',
        questions: [
          {
            questionNumber: 1,
            stem: 'dark and/ full of/ clouds/ The sky/ is/ now./ definitely/ It is/ rain/ going to',
            correctAnswerValue: 'The sky is dark and full of clouds now. It is definitely going to rain.',
            explanation:
              "Đây là dự đoán có căn cứ (trời nhiều mây đen) nên dùng thì tương lai gần. Trạng từ 'definitely' đứng trước 'going to'.",
          },
          {
            questionNumber: 2,
            stem: 'studied/ a lot / I / last night./ will not/ certainly/ fail this exam/I',
            correctAnswerValue: 'I studied a lot last night. I certainly will not fail this exam.',
            explanation:
              "Thì tương lai đơn (will) dùng cho dự đoán chủ quan dựa trên hành động đã xảy ra ('studied a lot'). Trạng từ 'certainly' đứng giữa 'will' và 'not'.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 8: Đọc ngữ cảnh được cho sẵn và chọn cách nói với thì động từ đúng.',
        questions: [
          {
            questionNumber: 1,
            stem: 'Ngữ cảnh 1: Can you help me out? I gotta get this letter to the mail by noon. (Bạn có thể giúp tôi không? Tôi phải gửi bức thư này qua đường bưu điện vào buổi trưa.)',
            options: [
              { key: 'A', value: "Sure. I'm going to drop it off on my way to work." },
              { key: 'B', value: "Sure. I'll drop it off on my way to work." },
            ],
            correctAnswerKey: 'B',
            correctAnswerValue: "Sure. I'll drop it off on my way to work.",
            explanation:
              "Đáp án B dùng 'I'll' (will) thể hiện quyết định được đưa ra ngay tại thời điểm nói để đáp lại yêu cầu (a spontaneous decision), phù hợp với ngữ cảnh.",
          },
          {
            questionNumber: 2,
            stem: 'Ngữ cảnh 2: Tell me again, why are you leaving work early? (Hãy nói lại cho tôi biết, tại sao bạn lại rời chỗ làm sớm?)',
            options: [
              { key: 'A', value: "I'm going to attend my cousin's funeral." },
              { key: 'B', value: "I'll attend my cousin's funeral." },
            ],
            correctAnswerKey: 'A',
            correctAnswerValue: "I'm going to attend my cousin's funeral.",
            explanation:
              "Đáp án A dùng 'I'm going to' thể hiện kế hoạch đã được sắp xếp, dự định từ trước (attend a funeral), phù hợp với câu hỏi 'why are you leaving...?' (tại sao bạn đang rời đi - ám chỉ hành động đã có kế hoạch).",
          },
        ],
      },
    ],
  },
  {
    testName: 'Section 6: Danh động từ và Động từ nguyên thể',
    testCategory: 'Verb Forms',
    courseSlug: 'toeic-foundation',
    exercises: [
      {
        exerciseType: EExerciseType.TrueFalse,
        exerciseTitle: 'Exercise 1: Chọn True nếu khẳng định là đúng, False nếu khẳng định là sai',
        questions: [
          {
            questionNumber: 1,
            statement: 'Danh động từ là cụm một danh từ đứng cạnh một động từ.',
            correctAnswer: 'B. False',
            explanation: 'Danh động từ (Gerund) là động từ thêm đuôi -ing (V-ing), hoạt động như một danh từ.',
          },
          {
            questionNumber: 2,
            statement: 'Danh động từ có thể làm chủ ngữ và cũng có thể làm tân ngữ trong câu.',
            correctAnswer: 'A. True',
            explanation: 'V-ing có thể đứng đầu câu làm chủ ngữ hoặc đứng sau động từ/giới từ làm tân ngữ.',
          },
          {
            questionNumber: 3,
            statement: 'Động từ nguyên thể nếu muốn làm chủ ngữ trong câu phải được đổi thành dạng V-ing',
            correctAnswer: 'B. False',
            explanation:
              "Động từ nguyên thể (To V) có thể làm chủ ngữ, nhưng thường dùng cấu trúc: 'It is + adj + to V'. Dùng V-ing (Danh động từ) làm chủ ngữ phổ biến hơn.",
          },
          {
            questionNumber: 4,
            statement: 'Một động từ chỉ có thể được đi sau bởi V-ing hoặc to V.',
            correctAnswer: 'B. False',
            explanation:
              'Có những động từ không cần tân ngữ (nội động từ), hoặc được theo sau bởi V-nguyên mẫu (Bare Infinitive).',
          },
        ],
      },
      {
        exerciseType: EExerciseType.MultipleChoice,
        exerciseTitle: 'Exercise 2: Chọn CÁC đáp án đúng (Động từ + V-ing/to V không đổi nghĩa)',
        questions: [
          {
            questionNumber: 1,
            stem: 'Động từ nào sau đây khi được theo sau bởi V-ing hay to V thì nghĩa hầu như không có sự khác biệt:',
            options: [
              { key: 'A', value: 'decide' },
              { key: 'B', value: 'begin' },
              { key: 'C', value: 'want' },
              { key: 'D', value: 'agree' },
              { key: 'E', value: 'start' },
              { key: 'F', value: 'continue' },
              { key: 'G', value: 'promise' },
              { key: 'H', value: 'like' },
              { key: 'I', value: 'love' },
              { key: 'J', value: 'refuse' },
              { key: 'K', value: 'hate' },
            ],
            correctAnswerKeys: `'B', 'E', 'F', 'H', 'I', 'K'`,
            explanation:
              "Các động từ: 'begin', 'start', 'continue', 'like', 'love', 'hate' khi theo sau là V-ing hay To V đều không thay đổi nghĩa.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.Matching,
        exerciseTitle: 'Exercise 3: Nối các từ vựng đã học với nghĩa tiếng Việt tương ứng',
        matches: [
          {
            left: 'Từ chối làm việc gì',
            right: 'Refuse to V',
            explanation: "'Refuse' luôn đi kèm với 'to V'.",
          },
          {
            left: 'Hứa làm việc gì',
            right: 'Promise to V',
            explanation: "'Promise' luôn đi kèm với 'to V'.",
          },
          {
            left: 'Quyết định làm việc gì',
            right: 'Decide to V',
            explanation: "'Decide' luôn đi kèm với 'to V'.",
          },
          {
            left: 'Đồng ý làm việc gì',
            right: 'Agree to V',
            explanation: "'Agree' luôn đi kèm với 'to V'.",
          },
        ],
      },
      {
        exerciseType: EExerciseType.FillInBlank,
        exerciseTitle: 'Exercise 7: Điền đúng dạng V-ing (Gerund) hoặc To V (Infinitive) của các từ trong ngoặc',
        questions: [
          {
            questionNumber: 1,
            stem: "My mother doesn't allow me (go) out alone at night.",
            correctAnswerValue: 'to go',
            explanation: 'Cấu trúc: allow somebody + to V (cho phép ai làm gì).',
          },
          {
            questionNumber: 2,
            stem: "It's not easy (learn) English.",
            correctAnswerValue: 'to learn',
            explanation: "Cấu trúc: It's + adj + to V (Thật là... khi làm gì).",
          },
          {
            questionNumber: 3,
            stem: "I can't imagine (live) in a big city.",
            correctAnswerValue: 'living',
            explanation: "Động từ 'imagine' luôn theo sau bởi Gerund (V-ing).",
          },
          {
            questionNumber: 4,
            stem: 'What do you like (do) in your free time?',
            correctAnswerValue: 'to do / doing',
            explanation: "Động từ 'like' có thể theo sau bởi cả To V và V-ing mà không đổi nghĩa.",
          },
          {
            questionNumber: 5,
            stem: "I don't mind (wait) for you.",
            correctAnswerValue: 'waiting',
            explanation: "Động từ 'mind' luôn theo sau bởi Gerund (V-ing).",
          },
        ],
      },
    ],
  },
]
