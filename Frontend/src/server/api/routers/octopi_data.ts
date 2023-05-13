import { z } from "zod";
import { baseUrlApiOctoPi, tokenApiOctoPi } from "~/pages/_app";

import {
  createTRPCRouter,
  publicProcedure,

} from "~/server/api/trpc";

type TConnectionStatusPrinter = {
  current: {
    state: string;
    port: string;
    baudrate: number;
    printerProfile: string;
  };
  options: {
    ports: string[];
    baudrates: number[];
    printerProfiles: { name: string; id: string; }[];
    portPreference: string;
    baudratePreference: number;
    printerProfilePreference: string;
    autoconnect: boolean;
  };
};
type TProfiles = {
  profiles: {
    [key: string]: {
      name: string;
      model: string;
      axes: {
        x: {
          inverted: boolean;
          speed: number;
        };
        y: {
          inverted: boolean;
          speed: number;
        };
        z: {
          inverted: boolean;
          speed: number;
        };
        e: {
          inverted: boolean;
          speed: number;
        };
      };
      volume: {
        custom_box: boolean;
        width: number;
        depth: number;
        height: number;
        origin: string;
        formFactor: string;
      };
      extruder: {
        count: number;
        nozzleDiameter: number;
        defaultExtrusionLength: number;
        offsets: number[][];
        sharedNozzle: boolean;
      };
      heatedBed: boolean;
      heatedChamber: boolean;
      resource: string;
      default: boolean;
      current: boolean;
      color: string;
      id: string;
    };
  };
};
type TConnectPayload = {
  command: string;
  port: string;
  baudrate: number;
  printerProfile: string;
  save: boolean;
  autoconnect: boolean;
};
type TDisconnectPayload = {
  command: string;
};
export const octopi = createTRPCRouter({
  getStatusPrinter: publicProcedure
    .query(() => {
      return fetch(`${baseUrlApiOctoPi}/api/connection`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": tokenApiOctoPi,
        },
      }
      )
        .then((res) => res.json()) as Promise<TConnectionStatusPrinter>;
    }),
  getPrinterProfiles: publicProcedure
    .query(() => {
      return fetch(`${baseUrlApiOctoPi}/api/printerprofiles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": tokenApiOctoPi,
        },
      }
      )
        .then((res) => res.json()) as Promise<TProfiles>;
    }),

  connect: publicProcedure
    .input(z.object({
      command: z.string(),
      port: z.string(),
      baudrate: z.number(),
      printerProfile: z.string(),
      save: z.boolean(),
      autoconnect: z.boolean(),
    })).mutation(async ({ input }) => {
      return fetch(`${baseUrlApiOctoPi}/api/connection`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": tokenApiOctoPi,
        },
        body: JSON.stringify(input),
      }
      ).then((res) => res);

    }),
  disconnect: publicProcedure
    .mutation((input) => {
      return fetch(`${baseUrlApiOctoPi}/api/connection`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": tokenApiOctoPi,
        },
        body: JSON.stringify({
          command: "disconnect",
        }),
      }
      )
        .then((res) => res.json());
    }),






  /* getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }), */
});
