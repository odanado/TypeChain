/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
import BN from "bn.js";
import { Contract } from "web3-eth-contract";
import { EventLog, PromiEvent, TransactionReceipt } from "web3-core/types";
import { EventEmitter } from "events";

interface EstimateGasOptions {
  from?: string;
  gas?: number;
  value?: number | string | BN;
}

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Callback<T> = (error: Error, result: T) => void;
export interface ContractEventLog<T> extends EventLog {
  returnValues: T;
}
export interface ContractEventEmitter<T> extends EventEmitter {
  on(event: "connected", listener: (subscriptionId: string) => void): this;
  on(
    event: "data" | "changed",
    listener: (event: ContractEventLog<T>) => void
  ): this;
  on(event: "error", listener: (error: Error) => void): this;
}

export interface NonPayableTx {
  nonce?: string | number;
  chainId?: string | number;
  from?: string;
  to?: string;
  data?: string;
  gas?: string | number;
  gasPrice?: string | number;
}

export interface PayableTx extends NonPayableTx {
  value?: string | number;
}

export interface NonPayableTransactionObject<T> {
  arguments: any[];
  call(tx?: NonPayableTx): Promise<T>;
  send(tx?: NonPayableTx): PromiEvent<TransactionReceipt>;
  estimateGas(tx?: NonPayableTx): Promise<number>;
  encodeABI(): string;
}

export interface PayableTransactionObject<T> {
  arguments: any[];
  call(tx?: PayableTx): Promise<T>;
  send(tx?: PayableTx): PromiEvent<TransactionReceipt>;
  estimateGas(tx?: PayableTx): Promise<number>;
  encodeABI(): string;
}

export type BlockType = "latest" | "pending" | "genesis" | number;
export type BaseContract = Omit<Contract, "clone" | "once">;