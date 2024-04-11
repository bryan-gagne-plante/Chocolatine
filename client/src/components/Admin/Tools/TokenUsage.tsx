import type { FC } from 'react';
import useTokenUsage from '~/hooks/useTokenUsage';
import type { TGetTokenUsage } from 'librechat-data-provider';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableFooter, Label } from '../../ui';

const TokenUsage: FC = () => {
  const tokens = useTokenUsage();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell><Label>Email</Label></TableCell>
          <TableCell><Label>Token Count</Label></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens?.map((tokenUsage: TGetTokenUsage, index: number) => (
          <TableRow key={index}>
            <TableCell><Label>{tokenUsage.email}</Label></TableCell>
            <TableCell><Label>{tokenUsage.tokenCount * -1}</Label></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell><Label>Total</Label></TableCell>
          <TableCell><Label>{tokens?.reduce((acc, tokenUsage) =>
            acc + tokenUsage.tokenCount, 0) * -1}</Label></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TokenUsage;