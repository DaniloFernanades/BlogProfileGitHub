import { useEffect, useState } from "react";
import { Issues, IssueProps } from "./components/Issues";
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside } from "./styles";
import api from "../../lib/api";

export function Home() {
  const [issues, setIssues] = useState<IssueProps[]>([]);

  useEffect(() => {
    async function getIssues() {
      try {
        const response = await api.get("search/issues?q=repo:DaniloFernanades/BlogProfileGitHub");
        const data = response.data.items;
        setIssues(data);
      } catch (error) {
        console.error("Erro ao buscar issues:", error);
      }
    }

    getIssues();
  }, []);

  return (
    <HomeContainer>
      <Summary />
      <IssuesAside>
        {issues.map((issue) => (
          <Issues
            key={issue.id}
            id={issue.id}
            title={issue.title}
            body={issue.body}
            created_at={issue.created_at}
          />
        ))}
      </IssuesAside>
    </HomeContainer>
  );
}
