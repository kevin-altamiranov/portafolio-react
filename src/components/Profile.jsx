import React from "react";
import { Section, Card } from "./LayoutComponents";

const Profile = ({ data }) => {
  return (
    <Section title="Perfil Profesional">
      <Card className="border-none shadow-sm bg-white">
        <p className="leading-relaxed text-slate-500 text-justify italic">~{data}</p>
      </Card>
    </Section>
  );
};

export default Profile;
