import { IssuesContainer, StyledNavLink } from "./styles";

export interface IssueProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Issues({ id, title, body, created_at }: IssueProps) {
  return (
    <IssuesContainer>
      <StyledNavLink to="/issue">
        <div>
          <div>
            <h2>{title}</h2>
            <span>{new Date(created_at).toLocaleDateString()}</span>
          </div>
          <p>{body}</p>
          <div>
            <span>ID: {id}</span>
          </div>
        </div>
      </StyledNavLink>
    </IssuesContainer>
  );
}
