import { ComponentPropsWithoutRef, ElementType } from "react";

export interface CoreConfig {
  LinkComponent: ElementType<
    ComponentPropsWithoutRef<"a"> & {
      href: NonNullable<ComponentPropsWithoutRef<"a">["href"]>;
    }
  >;
}

let config: CoreConfig = {
  LinkComponent: "a",
};

export function defineConfig(newConfig: CoreConfig) {
  config = newConfig;
}

export function getConfig() {
  return config;
}
