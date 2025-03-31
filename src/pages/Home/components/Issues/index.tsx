// import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer, StyledNavLink } from "./styles";
import { useState, useEffect } from "react";
import api from '../../../../lib/api';

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
};

export function Issues() {
 
    const [Issue, setIssue] = useState<Issue | null>(null);
  
    useEffect(() => {
    async function getIssue() {
      try {
        const response = await api.get('users/DaniloFernanades');
        const data = response.data;
  
        setIssue(data);
      } catch (error) {
        console.error(error);
      }
    }
    getIssue()
  }, []);
  
  return (
    <IssuesContainer>
      <StyledNavLink to="/issue">
        <div>
          <h2>{Issue?.title}</h2>
          <span>20/03/2025</span>
        </div>
        <p>body</p>
      </StyledNavLink>
    </IssuesContainer>
  );
}
