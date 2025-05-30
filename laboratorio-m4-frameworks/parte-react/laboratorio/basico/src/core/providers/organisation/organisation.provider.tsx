import React, { PropsWithChildren } from "react";
import { OrganisationContextModel } from "./organisation.vm";

export const OrganisationContext =
  React.createContext<OrganisationContextModel>(null);

export const OrganisationProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [organisation, setOrganisation] = React.useState<string>("lemoncode");

  return (
    <OrganisationContext.Provider
      value={{ organisation, onChangeOrganisation: setOrganisation }}
    >
      {children}
    </OrganisationContext.Provider>
  );
};
