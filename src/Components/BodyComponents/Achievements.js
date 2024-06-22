import Title from "../Title";

export default function Achievements(props) {
  const achievements = [
    {
      title: "KVPY2021(SX)",
      body: "Secured All India Rank of 760 among 50k+ candidates.",
    },
    {
      title: "jeeMain2022",
      body: "Secured All India Rank of 639 among 1 million candidates.",
    },
    {
      title: "jeeAdvanced2022",
      body: "Secured All India Rank of 1830 among 0.16 million contesting candidates, one of the most prestigious competitive exams of India.",
    },
    {
      title: "codeforces",
      body: "Expert (Rating 1640) on Codeforces.",
    },
    {
      title: "codeChef",
      body: "Max rating of 1935(4-star) on CodeChef.",
    },
    {
      title: "Atcoder",
      body: "Green(Rating 975) on Atcoder.",
    },
    {
      title: "codeforces",
      body: " Secured Global Rank 337 among 14500+ participants in Codeforces Round 937.",
    },
    {
      title: "codechef",
      body: " Secured Global Rank 200(in Div-2) among 23500+ participants in Starter 112.",
    },
    {
      title: "Meta Hacker Cup 2023",
      body: "Qualified for Round 2 and Secured Global Rank 4122 out of 20324 participants.",
    },
    {
      title: "AlgoUniversity Graph Contest 2024",
      body: " Secured rank 11 among 1.5k+ participants | 3rd in IITG.",
    },
  ];

  return (
    <div
      ref={props.achievementsRef}
      className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32"
    >
      <Title>achievements</Title>

      {achievements.map((achievement) => (
        <div key={achievement.title} className="flex flex-col sm:flex-row">
          <div className={`text-color-hover px-2`}>
            {achievement.title + ":"}
          </div>
          <div>{achievement.body}</div>
        </div>
      ))}
    </div>
  );
}
