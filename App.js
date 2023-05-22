import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = [
    {
      article: "nano1",
      issue: 1,
      year: 2016,
    },
    {
      article: "mech1",
      issue: 1,
      year: 2017,
    },
    {
      article: "mech4",
      issue: 4,
      year: 2017,
    },
    {
      article: "mech44",
      issue: 4,
      year: 2017,
    },
    {
      article: "mech10",
      issue: 10,
      year: 2017,
    },
    {
      article: "aerospace22",
      issue: 2,
      year: 2014,
    },
    {
      article: "aerospace1",
      issue:1,
      year: 2014,
    },
    {
      article: "aerospace2",
      issue: 2,
      year: 2014,
    },

    {
      article: "bio1",
      issue: 1,
      year: 2015,
    },
    {
      article: "bio5",
      issue: 5,
      year: 2015,
    },
    {
      article: "bio2",
      issue: 2,
      year: 2015,
    },
    {
      article: "bio22",
      issue: 2,
      year: 2015,
    },
    {
      article: "nano3",
      issue: 3,
      year: 2016,
    },
    {
      article: "nano5",
      issue: 5,
      year: 2016,
    },
  ];

  const groupByYear = data.reduce((acc, article) => {
    (acc[article.year] = acc[article.year] || []).push(article);
    return acc;
  }, {});

  return (
    <div className="App">
      {Object.keys(groupByYear).map((yearKey) => {
        const yearData = groupByYear[yearKey];
        const groupByIssue = yearData.reduce((acc, article) => {
          (acc[article.issue] = acc[article.issue] || []).push(article);
          return acc;
        }, {});
        return (
          <div key={yearKey}>
            <p>Year: {yearKey}</p>
            {Object.keys(groupByIssue).map((issueKey) => {
              const issueData = groupByIssue[issueKey];
             
              return (
                <div key={issueKey} className="year-body">
                  <p>issue : {issueKey}</p>
                  {issueData.map((data, index) => {
                    return (
                      <span key={index}>
                       {/* {data.article} */}
                      </span> // write your logic here in this return
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
