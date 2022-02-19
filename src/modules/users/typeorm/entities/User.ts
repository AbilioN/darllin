import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User{
    @PrimaryColumn()
    id : string

    @Column()
    name : string

    @Column()

    email: string;

    @Column()

    password : string;

    
    @Column()

    cpf : string;

    @Column()

    telefone : string;

    @Column()

    whatsapp : string;

    @Column()

    inicio_plantus : Date;

    @Column()

    avatar : string;

    @CreateDateColumn()

    created_at : Date;

    @UpdateDateColumn()

    updated_at : Date;
}

export default User;